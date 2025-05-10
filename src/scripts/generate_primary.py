# --- START OF FILE generate_primary.py ---

import json
import os
import re
import requests
from dotenv import load_dotenv

load_dotenv() # Load environment variables from .env file

# --- Utility Functions (Unchanged) ---
def load_json_data(json_path):
    """Loads data from a JSON file."""
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Error: JSON file not found at {json_path}")
        return None
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from {json_path}")
        return None

def to_pascal_case(text):
    """Converts a string to PascalCase by removing non-alphanumeric, splitting, and capitalizing."""
    text = re.sub(r'[^\w\s-]', '', text) 
    return "".join(word.capitalize() for word in re.split(r'[\s-]+', text.strip()))

def format_primary_learning_objectives_for_prompt(objectives_list, indent=0):
    """Formats primary learning objectives for the prompt."""
    if not objectives_list:
        return "None"
    prefix = " " * indent
    formatted_objectives = []
    for obj in objectives_list:
        if isinstance(obj, dict):
            code = obj.get('code', '')
            objective_text = obj.get('objective', 'N/A')
            formatted_objectives.append(f"{prefix}- {code}: {objective_text}" if code else f"{prefix}- {objective_text}")
        else:
            formatted_objectives.append(f"{prefix}- {str(obj)}") 
    return "\n".join(formatted_objectives)

def format_questions_for_prompt(questions_data, indent=0):
    """Formats question data into a string for the prompt, pre-formatting for clarity."""
    prompt_parts = []
    text_prefix = " " * indent 
    item_prefix = " " * (indent + 2) 
    option_prefix = " " * (indent + 4) 

    if questions_data.get("mcq"):
        prompt_parts.append(f"{text_prefix}Multiple Choice Questions (Data):")
        for q_idx, q_data in enumerate(questions_data["mcq"], 1):
            prompt_parts.append(f"{item_prefix}{q_idx}. Question: {q_data.get('question')}")
            options_str_parts = []
            correct_answer_label = q_data.get('answer')
            for opt in q_data.get("options", []):
                label = opt.get('label')
                text = opt.get('text')
                if label == correct_answer_label:
                    options_str_parts.append(f"<strong>{label}. {text} ✅</strong>")
                else:
                    options_str_parts.append(f"{label}. {text}")
            prompt_parts.append(f"{option_prefix}Options Line: {' '.join(options_str_parts)}")
            prompt_parts.append("") 

    if questions_data.get("true_false"):
        prompt_parts.append(f"{text_prefix}True/False Questions (Data):")
        for q_idx, q_data in enumerate(questions_data["true_false"], 1):
            statement = q_data.get('statement')
            answer = q_data.get('answer')
            answer_text = "<strong>True ✅</strong>" if answer else "<strong>False ❌</strong>"
            prompt_parts.append(f"{item_prefix}{q_idx}. {statement} — {answer_text}")
        prompt_parts.append("")

    if questions_data.get("open_ended"):
        prompt_parts.append(f"{text_prefix}Open-ended Questions (Data):")
        for q_idx, q_data in enumerate(questions_data["open_ended"], 1):
            prompt_parts.append(f"{item_prefix}{q_idx}. {q_data.get('question')}")
        prompt_parts.append("")

    return "\n".join(prompt_parts)


# --- Prompt Generation Function for Primary Content (Unchanged) ---
def generate_deepseek_page_creation_prompt_primary(topic_data, level_name, strand_name, theme_name, reference_tsx_structure_description):
    topic_name = topic_data.get("topic_name", "Untitled Topic")
    generated_id = topic_data.get("generated_id", "N/A")
    pascal_topic_name = to_pascal_case(topic_name)

    prompt = f"""
You are an expert React developer specializing in creating educational content for primary school students using Next.js and Tailwind CSS.
Your task is to generate the complete TSX code for a Next.js page component.
The page should look VERY SIMILAR to the provided reference structure in terms of HTML elements and Tailwind CSS classes.

**Page Context:**
- Level: "{level_name}"
- Strand: "{strand_name}"
- Theme (Broader Category): "{theme_name}"
- Current Topic: "{topic_name}" (ID: {generated_id})

**Reference Structure and Styling (Follow Closely):**
{reference_tsx_structure_description}

**Specific Content for the "{topic_name}" Page:**

1.  **Imports:**
    ```tsx
    import React from 'react';
    import BackButton from '@/components/BackButton'; // Use this exact import path
    ```
2.  **Component Name:** The React component function should be named `{pascal_topic_name}Page`.
3.  **Root Element:** The main content should be wrapped in `<main className="max-w-5xl mx-auto p-6">`.
4.  **Back Button:** At the very top of the `<main>` element's content, include `<BackButton />`.
5.  **H1 Title:** The main heading (h1) should be: "📚 {generated_id} {topic_name}". Use classes `text-3xl font-bold mb-4`.
6.  **Introduction Paragraph:**
    - Create a simple, engaging introductory paragraph for the "{topic_name}" topic, suitable for "{level_name}" students.
    - It should briefly state what this specific topic will cover based on its learning objectives.
    - Use class `text-gray-700 mb-6`.

7.  **Learning Objectives (🎯):**
    - This section should be wrapped in `<section className="mb-8">`.
    - Heading: `<h2 className="text-xl font-semibold mb-2">🎯 Learning Objectives</h2>`
    - List the following objectives as `<li>` items within `<ul className="list-disc list-inside">`:
{format_primary_learning_objectives_for_prompt(topic_data.get("learning_objectives", []), indent=6)}

8.  **Practice Questions (📝):**
    - This section should be wrapped in `<section className="mb-10">`.
    - Main Heading: `<h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>`

    **Multiple Choice Questions:**
    - Subheading: `<h3 className="font-semibold text-lg mb-2">Multiple Choice</h3>`
    - Use `<ol className="list-decimal list-inside space-y-2">`.
    - Each question should be an `<li>` item.
    - Inside the `<li>`, display the question text, then a `<br />`, then the options line.
    - The options line should be formatted exactly like: `Option 1 Option 2 Option 3 Option 4`
    - The correct option should be bolded and have a ✅ emoji, like: `<strong>A. Correct Option Text ✅</strong>`.
    - Use the pre-formatted data below for the content of the options line for each MCQ.
    - Data:
{format_questions_for_prompt(topic_data.get("questions", {}), indent=6)}

    **True or False Questions:**
    - Subheading: `<h3 className="font-semibold text-lg mt-6 mb-2">True or False</h3>`
    - Use `<ul className="list-disc list-inside space-y-1">`.
    - Each statement should be an `<li>` item.
    - The format inside the `<li>` should be: `Statement text — Answer text`
    - The answer text should be bolded with an emoji, like `<strong>True ✅</strong>` or `<strong>False ❌</strong>`.
    - Use the pre-formatted data below for each True/False item.
    - Data (already included in the formatted questions data above, ensure it's placed under this subheading if generated separately by AI).

    **Open-ended Questions:**
    - Subheading: `<h3 className="font-semibold text-lg mt-6 mb-2">Open-ended</h3>`
    - Use `<ul className="list-disc list-inside space-y-1">`.
    - Each question should be an `<li>` item containing the question text.
    - Data (already included in the formatted questions data above, ensure it's placed under this subheading if generated separately by AI).


**Output Requirements:**
- Provide **only** the complete, runnable TSX code for the page component. No explanations before or after the code block.
- Ensure all JSX is valid.
- The main component should be a default export: `export default {pascal_topic_name}Page;`.
- Adhere **strictly** to the Tailwind CSS classes and HTML structure described and shown in the reference structure description.
- Make sure all provided data (especially pre-formatted question data) is accurately incorporated into the respective sections.
- Ensure the output is clean and directly usable as a .tsx file.

Generate the TSX code now.
"""
    return prompt.strip()


def clean_deepseek_tsx_output(raw: str) -> str:
    """
    Cleans the TSX output returned from DeepSeek.
    """
    if not raw:
        return ""
    raw = raw.strip()
    if raw.startswith("```tsx"):
        raw = raw[len("```tsx"):]
    if raw.endswith("```"):
        raw = raw[:-len("```")]
    
    import_react_index = raw.find("import React from 'react';")
    if import_react_index != -1:
        preamble = raw[:import_react_index].strip()
        if preamble and not preamble.startswith("//"): 
            print(f"⚠️ Warning: Unexpected preamble found before 'import React':\n{preamble[:200]}...")
        raw = raw[import_react_index:]
    else:
        back_button_import_index = raw.find("import BackButton from '@/components/BackButton';")
        if back_button_import_index != -1:
            preamble = raw[:back_button_import_index].strip()
            if preamble and not preamble.startswith("//"):
                 print(f"⚠️ Warning: Unexpected preamble found before 'import BackButton':\n{preamble[:200]}...")
            raw = raw[back_button_import_index:]
        else:
            print("⚠️ Warning: Could not find 'import React' or 'import BackButton'. TSX output might be incomplete or malformed.")
            
    return raw.strip()

# --- API Call Function ---
def call_deepseek_api(prompt_content, api_key, model_name="deepseek-chat"):
    DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}",
    }
    payload = {
        "model": model_name,
        "messages": [
            {"role": "system", "content": "You are an expert React developer creating educational Next.js pages with Tailwind CSS for primary school content. You follow instructions for HTML structure and CSS classes VERY precisely."},
            {"role": "user", "content": prompt_content},
        ],
        "max_tokens": 4090, 
        "temperature": 0.15, 
    }
    try:
        print("🔄 Sending request to DeepSeek API...")
        response = requests.post(DEEPSEEK_API_URL, headers=headers, json=payload, timeout=240) 
        response.raise_for_status()
        data = response.json()
        if data.get("choices") and len(data["choices"]) > 0:
            message_obj = data["choices"][0].get("message", {})
            if message_obj:
                message = message_obj.get("content", "")
                cleaned_tsx = clean_deepseek_tsx_output(message)
                if not cleaned_tsx.strip().startswith("import React"):
                     print("⚠️ Warning: Cleaned TSX does not start with 'import React'. API output might be unusual.")
                     print("--- Raw API Message (first 500 chars) ---")
                     print(message[:500] + "...")
                     print("--- End Raw API Message ---")
                return cleaned_tsx
            else:
                print("❌ Error: 'message' object not found in API choice.")
                print("Full API Choice:", data["choices"][0])
                return None
        else:
            print("❌ Error: No 'choices' in API response or choices array is empty.")
            print("Full API Response:", data)
            return None
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        if hasattr(e, 'response') and e.response is not None:
            try:
                print("Response content:", e.response.json())
            except json.JSONDecodeError:
                print("Response content (not JSON):", e.response.text)
        return None
    except Exception as e:
        print(f"❌ Unexpected error during API call: {e}")
        return None

# --- Main Script Logic (MODIFIED TO SKIP FIRST TOPIC, PROCESS REST) ---
def main():
    print("🚀 Starting Primary School TSX Page Generation Script (Skipping 1st topic)...")

    deepseek_api_key = os.getenv("DEEPSEEK_API_KEY")
    if not deepseek_api_key:
        print("❌ Error: DEEPSEEK_API_KEY not found in .env file or environment variables.")
        return

    script_dir = os.path.dirname(os.path.abspath(__file__))
    json_data_path = os.path.join(script_dir, "..", "data", "primary_with_questions.json")
    output_base_dir = os.path.join(script_dir, "output_primary")
    os.makedirs(output_base_dir, exist_ok=True)

    full_data = load_json_data(json_data_path)
    if not full_data:
        return

    reference_tsx_structure = """
    - The component imports `React` and `BackButton from '@/components/BackButton'`.
    - The main content is wrapped in `<main className="max-w-5xl mx-auto p-6">`.
    - A `<BackButton />` component is placed at the beginning of the `<main>` content.
    - The page title is an `<h1 className="text-3xl font-bold mb-4">` (e.g., "📚 Primary1-S2-T0 Earth’s characteristics").
    - An introductory paragraph uses `<p className="text-gray-700 mb-6">`.
    - Content is organized into sections:
        - Each section is a `<section className="mb-8">` (Practice Questions uses `mb-10`).
        - Section titles are `<h2 className="text-xl font-semibold mb-2">` (e.g., "🎯 Learning Objectives").
        - Lists within sections (like Learning Objectives) use `<ul className="list-disc list-inside">`.
    - The "Practice Questions" section:
        - Main title: `<h2 className="text-xl font-semibold mb-4">📝 Practice Questions</h2>`.
        - Sub-section titles (Multiple Choice, True or False, Open-ended) are `<h3 className="font-semibold text-lg mb-2">` (True/False and Open-ended also have `mt-6`).
        - Multiple Choice Questions:
            - Use `<ol className="list-decimal list-inside space-y-2">`.
            - Each question is an `<li>`. Inside `<li>`: question text, `<br />`, then the options line.
            - Options line format: `<strong>A. Option Text ✅</strong> B. Option Text C. Option Text...` (Correct answer bolded with ✅, emsp for spacing).
        - True or False Questions:
            - Use `<ul className="list-disc list-inside space-y-1">`.
            - Each statement is an `<li>`. Format: `Statement text — <strong>Answer ✅/❌</strong>`.
        - Open-ended Questions:
            - Use `<ul className="list-disc list-inside space-y-1">`. Each question is an `<li>`.
    - The component is default exported.
    """

    topic_process_count = 0 # Counter for topics

    try:
        primary_science_data = full_data.get("PrimaryScience_P1_P6", {})
        levels_data = primary_science_data.get("levels", [])

        if not levels_data:
            print("⚠️ No levels found in JSON data.")
            return

        for level_info in levels_data:
            level_name = level_info.get("level", "Unknown Level")
            strands_data = level_info.get("strands", [])
            if not strands_data:
                print(f"⚠️ No strands found for {level_name}.")
                continue

            for strand_info in strands_data:
                strand_name = strand_info.get("strand_name", "Unknown Strand")
                themes_as_topics_data = strand_info.get("themes", [])
                if not themes_as_topics_data:
                    print(f"⚠️ No themes/topics found for {level_name} - {strand_name}.")
                    continue
                
                for topic_data_item in themes_as_topics_data:
                    topic_process_count += 1 # Increment for each topic encountered

                    if topic_process_count == 1: # Check if it's the first topic
                        topic_name_skipped = topic_data_item.get('topic_name', 'Untitled Topic')
                        generated_id_skipped = topic_data_item.get("generated_id", "UnknownID")
                        print(f"⏭️ Skipping first topic ({topic_process_count}): {topic_name_skipped} (ID: {generated_id_skipped})")
                        continue # Skip the first topic

                    # This block will execute for all topics AFTER the first one
                    topic_name = topic_data_item.get("topic_name", "Untitled Topic")
                    theme_name_for_context = topic_data_item.get("theme_name", "Unknown Theme") 
                    generated_id = topic_data_item.get("generated_id", None)

                    if not generated_id:
                        print(f"⚠️ Skipping topic '{topic_name}' in '{theme_name_for_context}' due to missing 'generated_id'.")
                        continue
                    
                    print(f"\n📖 Processing Topic {topic_process_count}: {level_name} - {strand_name} - {theme_name_for_context} - Topic: {topic_name} (ID: {generated_id})")

                    prompt_content = generate_deepseek_page_creation_prompt_primary(
                        topic_data_item,
                        level_name,
                        strand_name,
                        theme_name_for_context,
                        reference_tsx_structure
                    )
                    
                    tsx_code = call_deepseek_api(prompt_content, deepseek_api_key)

                    if tsx_code and tsx_code.strip():
                        topic_output_dir = os.path.join(output_base_dir, generated_id)
                        os.makedirs(topic_output_dir, exist_ok=True)
                        output_tsx_file_path = os.path.join(topic_output_dir, "page.tsx")
                        
                        with open(output_tsx_file_path, 'w', encoding='utf-8') as f:
                            f.write(tsx_code)
                        print(f"✅ Successfully generated TSX file: {output_tsx_file_path}")
                    else:
                        print(f"❌ Failed to generate TSX code for: {generated_id} - {topic_name}")
                        if tsx_code is None:
                            print("   API call might have failed or returned no usable content.")
                        elif not tsx_code.strip():
                            print("   API returned empty or whitespace-only content after cleaning.")
        
        if topic_process_count == 0:
             print("⚠️ No topics found in the JSON to process.")
        elif topic_process_count == 1:
             print("⚠️ Only one topic found, so it was skipped as per instruction. No other topics to process.")
        else:
             print(f"\n🏁 All processing complete. Processed {topic_process_count -1} topics (skipped the first one).")


    except (IndexError, TypeError, AttributeError) as e:
        print(f"❌ Error processing JSON data: {e}. Please check your JSON file structure.")
        import traceback
        traceback.print_exc()
    except Exception as e:
        print(f"❌ An unexpected error occurred in main: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()

# --- END OF FILE generate_primary.py ---
