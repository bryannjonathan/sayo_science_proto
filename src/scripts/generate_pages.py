import json
import os
import re
import requests
from dotenv import load_dotenv

load_dotenv()

# --- Utility Functions ---
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
    # Remove non-alphanumeric characters except spaces and hyphens (to split by them)
    text = re.sub(r'[^\w\s-]', '', text)
    return "".join(word.capitalize() for word in re.split(r'[\s-]+', text))

def format_list_for_prompt(items_list, indent=0):
    """Formats a Python list into a string suitable for inclusion in a prompt."""
    if not items_list:
        return "None"
    prefix = " " * indent
    return "\n".join([f"{prefix}- {item}" for item in items_list])

def format_questions_for_prompt(questions_data, indent=0):
    """Formats question data into a string for the prompt."""
    prompt_parts = []
    prefix = " " * indent

    if questions_data.get("mcq"):
        prompt_parts.append(f"{prefix}Multiple Choice Questions:")
        for q in questions_data["mcq"]:
            prompt_parts.append(f"{prefix}  - Question: {q.get('question')}")
            prompt_parts.append(f"{prefix}    Options:")
            for opt in q.get("options", []):
                prompt_parts.append(f"{prefix}      - {opt.get('label')}: {opt.get('text')}")
            prompt_parts.append(f"{prefix}    Correct Answer Label: {q.get('answer')}")
        prompt_parts.append("") # Add a blank line for readability

    if questions_data.get("true_false"):
        prompt_parts.append(f"{prefix}True/False Questions:")
        for q in questions_data["true_false"]:
            prompt_parts.append(f"{prefix}  - Statement: {q.get('statement')}")
            prompt_parts.append(f"{prefix}    Answer: {'True' if q.get('answer') else 'False'}")
        prompt_parts.append("")

    if questions_data.get("open_ended"):
        prompt_parts.append(f"{prefix}Open-ended Questions:")
        for q in questions_data["open_ended"]:
            prompt_parts.append(f"{prefix}  - Question: {q.get('question')}")
        prompt_parts.append("")

    return "\n".join(prompt_parts)

# --- Prompt Generation Function ---
def generate_deepseek_page_creation_prompt(subchapter_data, topic_title, topic_overview, reference_tsx_structure_description):
    """
    Generates a detailed prompt for DeepSeek to create a TSX page.
    """
    subchapter_name = subchapter_data.get("name", "Untitled Subchapter")
    subchapter_id = subchapter_data.get("generated_subtopic_id", "N/A")
    
    prompt = f"""
You are an expert React developer specializing in creating educational content with Next.js and Tailwind CSS.
Your task is to generate the complete TSX code for a Next.js page component.

**Page Context:**
- Main Topic: "{topic_title}"
- Topic Overview: "{topic_overview}"
- Current Subchapter: "{subchapter_name}" (ID: {subchapter_id})

**Reference Structure and Styling:**
The output TSX page should closely follow the structure, content organization, and Tailwind CSS styling of the provided reference example for "Molecules of Life" (page.tsx).
Key structural elements to replicate:
{reference_tsx_structure_description}

**Specific Content for the "{subchapter_name}" Page:**

1.  **Component Name:** The React component function should be named `{to_pascal_case(subchapter_name)}Page`.
2.  **H1 Title:** The main heading (h1) should be: "🔬 {subchapter_id} {subchapter_name}".
3.  **Introduction Paragraph:**
    - Create an engaging introductory paragraph for the "{subchapter_name}" subchapter.
    - It should connect to the main topic ("{topic_title}") and its overview.
    - Briefly state what this specific subchapter will cover based on its learning objectives.
    - Use the class `text-gray-700 mb-6` for the paragraph.

4.  **Learning Objectives (🎯):**
    - Heading: "🎯 Learning Objectives"
    - List the following objectives as `<li>` items within a `ul` with classes `list-disc list-inside`:
{format_list_for_prompt(subchapter_data.get("learning_objectives", []), indent=6)}

5.  **Interactive Activities (🧪):** (Corresponds to "suggested_activities" in the JSON)
    - Heading: "🧪 Interactive Activities"
    - List the following activities as `<li>` items within a `ul` with classes `list-disc list-inside`.
    - If an activity has sub-points or details in the JSON, try to represent them clearly.
{format_list_for_prompt(subchapter_data.get("suggested_activities", []), indent=6)}

6.  **Learning Outcomes (✅):**
    - Heading: "✅ Learning Outcomes"
    - Present the outcomes. If it's a list, use a `ul` with `list-disc list-inside`. If it's a single paragraph, use a `<p>` tag.
    - Data:
{format_list_for_prompt(subchapter_data.get("learning_outcomes", []), indent=6)}

7.  **Values & Attitudes (🌱):**
    - Heading: "🌱 Values & Attitudes"
    - List the following as `<li>` items within a `ul` with classes `list-disc list-inside`:
{format_list_for_prompt(subchapter_data.get("values_and_attitudes", []), indent=6)}

8.  **STSE Connections (🔍):**
    - Heading: "🔍 STSE Connections"
    - List the following as `<li>` items within a `ul` with classes `list-disc list-inside`:
{format_list_for_prompt(subchapter_data.get("stse_connections", []), indent=6)}

9.  **Practice Questions (📝):**
    - Main Heading: "📝 Practice Questions"
    - Follow the exact formatting (including `<strong>`, `✅`, `❌`, `<br />`, and `&emsp;` for spacing between MCQ options) as seen in the "Molecules of Life" reference for all question types.

    **Multiple Choice Questions:**
    - Subheading: "Multiple Choice"
    - Use an `<ol className="list-decimal list-inside space-y-2">`.
    - Data:
{format_questions_for_prompt(subchapter_data.get("questions", {}), indent=6)}

    **True or False Questions:**
    - Subheading: "True or False" (mt-6 mb-2 for the h3)
    - Use a `<ul className="list-disc list-inside space-y-1">`.
    - Data (already included in the formatted questions above, ensure it's placed under this subheading).

    **Open-ended Questions:**
    - Subheading: "Open-ended" (mt-6 mb-2 for the h3)
    - Use a `<ul className="list-disc list-inside space-y-1">`.
    - Data (already included in the formatted questions above, ensure it's placed under this subheading).


**Output Requirements:**
- Provide only the complete, runnable TSX code for the page component.
- Ensure all JSX is valid and all necessary imports (like `React`) are included.
- The main component should be a default export.
- Adhere strictly to the Tailwind CSS classes used in the reference for consistent styling.
- Make sure all provided data is accurately incorporated into the respective sections.
- Escape any special characters in the data that might conflict with JSX (e.g., '<', '>').

Generate the TSX code now.
"""
    return prompt.strip()

def clean_deepseek_tsx_output(raw: str) -> str:
    """
    Cleans the TSX output returned from DeepSeek:
    - Removes markdown fences (```tsx)
    - Trims any intro or outro text
    - Returns only clean, valid .tsx content
    """
    if not raw:
        return ""

    # Remove code fences if present
    raw = raw.strip()
    if raw.startswith("```tsx"):
        raw = raw[6:]
    if raw.endswith("```"):
        raw = raw[:-3]

    # Trim leading text before `import React`
    if "import React" in raw:
        raw = raw[raw.index("import React"):]

    # Optionally trim after the last `export default`
    if "export default" in raw:
        last_export = raw.rindex("export default")
        semi_index = raw.find(";", last_export)
        if semi_index != -1:
            raw = raw[:semi_index + 1]

    return raw.strip()

def call_deepseek_api(prompt_content, api_key, model_name="deepseek-chat"):
    """
    Calls the DeepSeek API and returns clean TSX code.
    """
    DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions"  # Update if needed

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}",
    }

    payload = {
        "model": model_name,
        "messages": [
            {"role": "user", "content": prompt_content},
        ],
        "max_tokens": 4000,
        "temperature": 0.3,
    }

    try:
        print("Sending request to DeepSeek API...")
        response = requests.post(DEEPSEEK_API_URL, headers=headers, json=payload, timeout=120)
        response.raise_for_status()

        data = response.json()
        message = data.get("choices", [])[0].get("message", {}).get("content", "")

        cleaned = clean_deepseek_tsx_output(message)
        return cleaned

    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        if hasattr(e, 'response') and e.response is not None:
            try:
                print("Response content:", e.response.json())
            except Exception:
                print("Response content:", e.response.text)
        return None
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return None

# --- Main Script Logic (Modified) ---
def main():
    print("Starting TSX Page Generation Script...")

    # 🔐 Load DeepSeek API key
    deepseek_api_key = os.getenv("DEEPSEEK_API_KEY")
    if not deepseek_api_key:
        print("Error: Deep Seek API Key is required.")

    # 📄 Path to JSON data
    json_data_path = os.path.join(os.path.dirname(__file__), "..", "data", "bio_with_questions.json")

    # 📁 Output directory inside ./scripts/output
    output_dir = os.path.join(os.path.dirname(__file__), "output")
    os.makedirs(output_dir, exist_ok=True)

    # 📚 Load curriculum data
    full_data = load_json_data(json_data_path)
    if not full_data:
        return

    # 📑 Reference TSX structure description
    reference_tsx_structure = """
    - A main React functional component, default exported.
    - Uses `<main className="max-w-5xl mx-auto p-6">` as the root container.
    - Sections (`<section className="mb-8">`) for:
        - Learning Objectives (h2, ul)
        - Interactive Activities (h2, ul)
        - Learning Outcomes (h2, p or ul)
        - Values & Attitudes (h2, ul)
        - STSE Connections (h2, ul)
        - Practice Questions (h2 for main, h3 for sub-types like MCQ, True/False, Open-ended)
    - Specific formatting for questions:
        - MCQs in `<ol>`, with options including correct answer marked with `<strong>` and `✅`. ` ` for spacing.
        - True/False in `<ul>`, with answers marked `<strong>True ✅</strong>` or `<strong>False ❌</strong>`.
        - Open-ended questions in `<ul>`.
    - Tailwind CSS is used for all styling.
    """

    try:
        # 🧠 Access Biology compulsory topics
        compulsory_parts = full_data.get("Secondary 4-6", {}).get("Biology", {}).get("compulsoryPart", [])
        if not compulsory_parts:
            print("Error: 'compulsoryPart' not found or empty in JSON.")
            return

        for topic_data in compulsory_parts:
            topic_title = topic_data.get("title", "Untitled Topic")
            topic_overview = topic_data.get("overview", "Overview of the topic.")
            subtopics_list = topic_data.get("subtopics", [])

            if not subtopics_list or len(subtopics_list) < 2:
                print(f"⚠️ Skipping topic '{topic_title}' — less than 2 subtopics.")
                continue

            # print(f"⏩ Skipping first subchapter: {subtopics_list[0]['generated_subtopic_id']} - {subtopics_list[0]['name']}")

            for subchapter_to_process in subtopics_list[1:]:
                subchapter_name = subchapter_to_process.get('name', 'UntitledSubchapter')
                subchapter_id = subchapter_to_process.get("generated_subtopic_id", "Unknown")

                print(f"\n🚀 Generating TSX for: {subchapter_id} - {subchapter_name}")

                prompt_content = generate_deepseek_page_creation_prompt(
                    subchapter_to_process,
                    topic_title,
                    topic_overview,
                    reference_tsx_structure
                )

                tsx_code = call_deepseek_api(prompt_content, deepseek_api_key)

                if tsx_code:
                    out_dir = os.path.join(output_dir, subchapter_id)
                    os.makedirs(out_dir, exist_ok=True)
                    out_path = os.path.join(out_dir, "page.tsx")

                    with open(out_path, 'w', encoding='utf-8') as f:
                        f.write(tsx_code)

                    print(f"✅ Saved: {out_path}")
                else:
                    print(f"❌ Failed to generate TSX for: {subchapter_id}")

    except (IndexError, TypeError, AttributeError) as e:
        print(f"❌ Error processing JSON data: {e}. Please check your JSON file structure.")
    except Exception as e:
        print(f"❌ An unexpected error occurred in main: {e}")

main()

