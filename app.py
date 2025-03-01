from flask import Flask, request, jsonify, render_template
import requests
import time
import os
from tenacity import retry, stop_after_attempt, wait_exponential

app = Flask(__name__)

API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("GEMINI_API_KEY environment variable not set.")

GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={API_KEY}"

@app.route('/')
def home():
    return render_template('index.html')

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
def call_gemini_api(url, payload, headers):
    response = requests.post(url, json=payload, headers=headers, timeout=30)
    response.raise_for_status()
    return response

@app.route('/generate', methods=['POST'])
def generate_response():
    user_query = request.json.get('query')

    if not user_query:
        return jsonify({"response": "Please enter a valid query."}), 400

    payload = {
        "contents": [{"parts": [{"text": user_query}]}] # Correct payload structure
    }

    headers = {'Content-Type': 'application/json'}

    try:
        response = call_gemini_api(GEMINI_API_URL, payload, headers)
        response_data = response.json()
        print("Full Gemini API Response:", response_data)

        if response.status_code == 200:
            if "error" in response_data:
                error_message = response_data["error"].get("message", "An error occurred with the Gemini API")
                return jsonify({"response": error_message}), 500

            generated_text = ""
            if response_data.get("candidates"):  # Correct key for Gemini response
                for candidate in response_data["candidates"]:
                    if candidate.get("content") and candidate["content"].get("parts"):  # Check nested structure
                        for part in candidate["content"]["parts"]:
                            generated_text += part.get("text", "")

            if not generated_text:
                generated_text = "No response generated. The model might not have returned any text or the structure might be unexpected."

            return jsonify({"response": generated_text})

        else:
            return jsonify({"response": f"Gemini API returned an unexpected status code: {response.status_code}"}), response.status_code

    except requests.exceptions.RequestException as e:
        print(f"Request Error: {e}")
        return jsonify({"response": f"An error occurred: {str(e)}"}), 500
    except (KeyError, IndexError) as e:
        print(f"Data Error: {e}, Response Data: {response_data}")
        return jsonify({"response": "Error processing the model's response. The response format was unexpected."}), 500
    except Exception as e:
        print(f"A general error occurred: {e}")
        return jsonify({"response": "A general error occurred while processing the request."}), 500


if __name__ == '__main__':
    app.run(debug=True)