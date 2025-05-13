#!/usr/bin/env python3
import json
import os
import re
import requests
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

# --- Utility Functions ---
def load_json_data(json_path: Path):
    """Loads JSON data from a file."""
    try:
        return json.loads(json_path.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"Error loading JSON ({json_path}): {e}")
        return None

def to_pascal_case(text: str) -> str:
    """Converts a string to PascalCase."""
    text = re.sub(r'[^\w\s-]', '', text)
    return "".join(word.capitalize() for word in re.split(r'[\s-]+', text))

def clean_deepseek_tsx_output(raw: str) -> str:
    """Cleans up raw TSX output from the DeepSeek API."""
    if not raw:
        return ""
    raw = raw.strip()

    # Remove markdown code blocks if present
    if raw.startswith("```tsx"):
        raw = raw[6:]
    if raw.endswith("```"):
        raw = raw[:-3]
    raw = raw.strip()

    # Attempt to trim to the main component export or first import
    # This helps in case the model adds preamble text.
    first_import_idx = raw.find("import ")
    export_default_idx = raw.find("export default")

    if export_default_idx != -1:
        start_idx = export_default_idx # Prioritize starting from export default
        if first_import_idx != -1 and first_import_idx < export_default_idx:
            start_idx = first_import_idx # But if an import comes before, start from there
        raw = raw[start_idx:]
    elif first_import_idx != -1:
        raw = raw[first_import_idx:]
    
    # Trim any trailing characters after the component's closing brace or semicolon
    # This assumes standard React functional component structure
    last_brace_idx = raw.rfind("}")
    if last_brace_idx != -1 and raw[last_brace_idx:].strip().startswith("}"):
        raw = raw[:last_brace_idx + 1]
    elif raw.endswith(';'):
        raw = raw # Keep trailing semicolon if present

    return raw.strip()


def call_deepseek_api(prompt: str, api_key: str, model: str="deepseek-chat") -> str:
    """Calls the DeepSeek API to generate TSX code."""
    url = "https://api.deepseek.com/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}",
    }
    payload = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 4000,
        "temperature": 0.5, # Slightly higher temperature for more creative content generation
    }
    try:
        resp = requests.post(url, headers=headers, json=payload, timeout=120) # Increased timeout
        resp.raise_for_status()
        content = resp.json()["choices"][0]["message"]["content"]
        return clean_deepseek_tsx_output(content)
    except Exception as e:
        print(f"❌ DeepSeek API error: {e}")
        print(f"Problematic prompt starts with: {prompt[:500]}...") # Print more of the prompt
        return None

# --- Prompt Building Function ---
# Modified to accept primary topic data and context, and request generation of extra sections
def build_prompt(topic: dict, level_name: str, strand_name: str, theme_name: str) -> str:
    """Builds the prompt for the DeepSeek API based on primary topic data and design."""
    topic_name = topic.get("topic_name", "Untitled Topic")
    sid  = topic.get("generated_id", "Unknown") # Use generated_id for primary

    # Helper to format list items for HTML, escaping single quotes and newlines
    # Modified to handle primary objectives format (list of dicts)
    def format_list_items(items_list):
        if not items_list:
            return ""
        formatted_items = []
        for item in items_list:
            # Handle both string objectives and dict objectives
            objective_text = item.get('objective', '') if isinstance(item, dict) else str(item)
            # Perform replacements first
            cleaned_item = objective_text.replace('\'', '\\\'').replace('\\', '\\\\').replace('\n', ' ')
            # Use .format() instead of f-string for this line to avoid backslash issue
            formatted_items.append("                <li>{}</li>".format(cleaned_item))
        return "\n".join(formatted_items)


    learning_objectives_html = format_list_items(topic.get("learning_objectives", []))

    # Prepare quizData as a stringified JSON for direct insertion into TSX
    quiz_data = topic.get("questions", {})
    mcq_questions = quiz_data.get("mcq", [])
    true_false_questions = quiz_data.get("true_false", [])
    open_ended_questions = quiz_data.get("open_ended", [])

    formatted_mcq = []
    for q in mcq_questions:
        question_text = q.get('question', '').replace('\'', '\\\'').replace('\\', '\\\\').replace('\n', ' ')
        # Clean the option text before using it in the f-string
        formatted_options = []
        for opt in q.get("options", []): # Use .get() for safety
             cleaned_opt_text = opt.get('text', '').replace('\'', '\\\'').replace('\\', '\\\\').replace('\n', ' ') # Use .get() for safety
             formatted_options.append(f"{{ label: '{opt.get('label', '')}', text: '{cleaned_opt_text}' }}") # Use .get() for safety
        options_str = ", ".join(formatted_options)

        formatted_mcq.append(f"""    {{
      question: '{question_text}',
      options: [{options_str}],
      answer: '{q.get('answer', '')}', # Use .get() for safety
    }},""")

    formatted_true_false = []
    for q in true_false_questions:
        statement_text = q.get('statement', '').replace('\'', '\\\'').replace('\\', '\\\\').replace('\n', ' ') # Use .get() for safety
        formatted_true_false.append(f"""    {{ statement: '{statement_text}', answer: {str(q.get('answer', False)).lower()} }},""") # Use .get() for safety

    formatted_open_ended = []
    for q in open_ended_questions:
        question_text = q.get('question', '').replace('\'', '\\\'').replace('\\', '\\\\').replace('\n', ' ') # Use .get() for safety
        formatted_open_ended.append(f"""    {{
      question: '{question_text}',
    }},""")

    # Construct quiz_data_str_block using .format() to avoid raw backslashes in the triple-quoted string
    quiz_data_str_block = """const quizData: QuizData = {{
  mcq: [
{}
  ],
  true_false: [
{}
  ],
  open_ended: [
{}
  ],
}};""".format(
        '\n'.join(formatted_mcq),
        '\n'.join(formatted_true_false),
        '\n'.join(formatted_open_ended)
    )

    # Pascal case for component name
    component_name = to_pascal_case(topic_name) + "Page"

    # Construct the main prompt string using f-string for the overall structure,
    # and instructing the API to generate content for missing sections.
    prompt_text = f"""
You are a Next.js + Tailwind CSS expert. Your task is to generate a complete TSX page for the primary science topic "{topic_name}" (ID: {sid}) under {level_name}, strand "{strand_name}", and theme "{theme_name}".

Generate content for the following sections based on the topic context provided:
- A 2-3 sentence overview for the main card.
- 3-5 bullet points for "Interactive Activities".
- A 1-2 sentence summary for "Learning Outcomes".
- 2-3 bullet points for "Values & Attitudes".
- 2-3 bullet points for "STSE Connections".

Adhere strictly to the following design structure, component usage, and styling. Ensure that the generated TSX code is clean, well-formatted, and does not contain any comments or extraneous text beyond the actual TSX.

1.  **Add `'use client'` at the very beginning of the file.**
2.  **Component Name**: `{component_name}`
3.  **Imports**:
    * `BackButton` from `@/components/BackButton`; // Note: Default import
    * `QuizSection` from `@/components/QuizSection`; // Note: Default import
    * `SectionCard` from `@/components/SectionCard`; // Note: Default import
    * All necessary icons from `lucide-react`: `BookOpen`, `Target`, `Lightbulb`, `CheckSquare`, `Heart`, `Microscope`, `HelpCircle`. // Note: Named imports for icons
    * Do NOT include `import React from 'react';` as it's implicitly handled in Next.js.
4.  **Quiz Data Definition**:
    * Define the `quizData` variable *outside* the main component function, at the top level of the file.
    * The content of `quizData` should be exactly this structure (ensure all string values are properly escaped for single quotes):
```tsx
{quiz_data_str_block}
```
5.  **Page Structure (within the `export default function {component_name}()`):**
    * Use the imported `SectionCard` component for ALL section cards. Do NOT create a new one.
    * Use the imported `QuizSection` component for the questions section.
    * Include ALL the following sections: "Overview", "Learning Objectives", "Interactive Activities", "Learning Outcomes", "Values & Attitudes", "STSE Connections", and "Practice Questions".
    * Populate the "Learning Objectives" and "Practice Questions" sections with the data provided in the JSON.
    * Populate the "Overview", "Interactive Activities", "Learning Outcomes", "Values & Attitudes", and "STSE Connections" sections with the content you generate based on the topic context.
    ```tsx
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="px-4 py-4 max-w-5xl mx-auto">
          <BackButton />
        </div>
      </header>

      <main className="px-4 py-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-teal-100 text-teal-700">
            <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">
             {topic_name}
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-sm border border-teal-100 rounded-xl p-6 mb-8">
          <p className="text-slate-700 leading-relaxed">
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <SectionCard icon={{<Target className="h-5 w-5 text-emerald-600" />}} title="Learning Objectives" color="emerald">
            <ul className="space-y-3 list-disc pl-5 marker:text-emerald-500">
{learning_objectives_html}
            </ul>
          </SectionCard>

          <SectionCard icon={{<Lightbulb className="h-5 w-5 text-amber-600" />}} title="Interactive Activities" color="amber">
            <ul className="space-y-3 list-disc pl-5 marker:text-amber-500">
            </ul>
          </SectionCard>

          <SectionCard icon={{<CheckSquare className="h-5 w-5 text-sky-600" />}} title="Learning Outcomes" color="sky">
            <p className="text-slate-700 leading-relaxed">
            </p>
          </SectionCard>

          <SectionCard icon={{<Heart className="h-5 w-5 text-rose-600" />}} title="Values & Attitudes" color="rose">
            <ul className="space-y-3 list-disc pl-5 marker:text-rose-500">
            </ul>
          </SectionCard>

          <SectionCard icon={{<Microscope className="h-5 w-5 text-indigo-600" />}} title="STSE Connections" color="indigo">
            <ul className="space-y-3 list-disc pl-5 marker:text-indigo-500">
            </ul>
          </SectionCard>
        </div>

        <div className="mt-8">
          <SectionCard icon={{<HelpCircle className="h-5 w-5 text-purple-600" />}} title="Practice Questions" color="purple">
            <QuizSection quizData={{quizData}} />
          </SectionCard>
        </div>
      </main>
    </div>
    ```

Return ONLY valid .tsx code. Do NOT include any markdown code blocks (\`\`\`tsx) in the final output, only the raw TSX code. Do NOT include comments (\`/* ... */\` or \`// ...\`) in the final TSX output.
""".strip()

    return prompt_text

# --- Main Script ---
def main():
    """Main function to load data, build prompts, call API, and save files for primary data."""
    api_key = os.getenv("DEEPSEEK_API_KEY")
    if not api_key:
        print("❌ Set DEEPSEEK_API_KEY in your environment.")
        return

    # Construct the path to the primary JSON data file
    data_file = Path(__file__).parent.parent / "data" / "primary_with_questions.json"
    full = load_json_data(data_file)
    if not full:
        return

    # Navigate the primary JSON structure
    primary_data = full.get("PrimaryScience_P1_P6", {})
    levels = primary_data.get("levels", [])

    if not levels:
        print("❌ JSON structure for primary levels not found.")
        return

    # Define the output base directory
    out_base = Path(__file__).parent / "output"

    # Process each level, strand, theme, and topic
    for level_data in levels:
        level_name = level_data.get("level", "Unknown Level")
        print(f"Processing Level: {level_name}")

        strands = level_data.get("strands", [])
        if not strands:
            print(f"  No strands found for level: {level_name}")
            continue

        for strand_data in strands:
            strand_name = strand_data.get("strand_name", "Unknown Strand")
            print(f"  Processing Strand: {strand_name}")

            themes = strand_data.get("themes", [])
            if not themes:
                print(f"    No themes found for strand: {strand_name}")
                continue

            for theme_data in themes:
                theme_name = theme_data.get("theme_name", "Unknown Theme")
                print(f"    Processing Theme: {theme_name}")

                topics_to_process = theme_data.get("topics", [])
                # In the primary structure, topics are directly under themes
                # If 'topics' key doesn't exist, assume the theme_data *is* the topic data
                if not topics_to_process:
                     # Check if theme_data itself contains topic-level keys
                     if "topic_name" in theme_data and "generated_id" in theme_data:
                         topics_to_process = [theme_data] # Treat the theme as a single topic
                     else:
                         print(f"      No topics found or theme structure unexpected for theme: {theme_name}")
                         continue


                for topic in topics_to_process:
                    sid  = topic.get("generated_id", "unknown")
                    topic_name = topic.get("topic_name", "Untitled Topic")
                    print(f"      🚀 Generating page for {sid} – {topic_name}…")

                    prompt = build_prompt(topic, level_name, strand_name, theme_name)
                    tsx    = call_deepseek_api(prompt, api_key)
                    if not tsx:
                        print(f"      ❌ Skipped {sid}")
                        continue

                    # Add 'use client' at the beginning of the generated TSX
                    final_tsx = "'use client';\n\n" + tsx

                    # Create the destination directory for the topic
                    # Using generated_id for directory name
                    dest = out_base / sid
                    dest.mkdir(parents=True, exist_ok=True)
                    file = dest / "page.tsx"
                    
                    # Write the generated TSX code to the file
                    try:
                        file.write_text(final_tsx, encoding="utf-8")
                        print(f"      ✅ Saved {sid}/page.tsx")
                    except Exception as e:
                        print(f"      ❌ Error saving {sid}/page.tsx: {e}")

if __name__ == "__main__":
    main()
