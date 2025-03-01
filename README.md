# Local AI

Local AI is a web application that allows you to interact with LLM (Large Language Model) models while keeping your data and queries private. Unlike cloud-based AI services, Local AI processes your requests locally, ensuring that your sensitive information remains secure.

## Features

* **Privacy-Focused:** All processing is done locally, keeping your data confidential.
* **User-Friendly Interface:** A simple and intuitive web interface for interacting with LLM models.
* **Code Block Highlighting:** Code blocks are formatted and displayed clearly.
* **Copy Functionality:** Easily copy the entire response or individual code blocks.
* **Conversation History:** Stores and displays conversation history locally.
* **Loading Indicator:** Provides visual feedback during API requests.

## Demo

Watch the demo video to see Local AI in action:

[demo of the project](sample/DEMO.mp4)

## Prerequisites

* Python 3.x
* Flask
* Requests
* Tenacity
* An LLM API key (set as an environment variable `LLM_API_KEY`)

## Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/your-username/LocalAI.git](https://github.com/your-username/LocalAI.git)
    cd LocalAI
    ```

2.  Create a virtual environment (recommended):

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On macOS/Linux
    venv\Scripts\activate  # On Windows
    ```

3.  Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4.  Set your LLM API key as an environment variable:

    ```bash
    export LLM_API_KEY="YOUR_API_KEY"  # On macOS/Linux
    set LLM_API_KEY="YOUR_API_KEY"  # On Windows
    ```
    * Or, if you are using powershell: `$env:LLM_API_KEY = "YOUR_API_KEY"`

5.  Run the Flask application:

    ```bash
    python app.py
    ```

6.  Open your web browser and navigate to `http://127.0.0.1:5000/`.

## Usage

1.  **Enter your query:**
    ![Screenshot of the input field](sample/Query.png)
    
    Enter your query in the input field.

3.  **Click the "Generate" button:**
    ![Screenshot of the generate button](sample/Generate.png)
    
    Click the "Generate" button to send the query.

5.  **View the response:**
    ![Screenshot of the response area](sample/Response_View.png)
    
    View the response in the response area.

6.  **Copy the response:**
    ![Screenshot of the copy response button](sample/Copy_whole.png)
    
    Use the "Copy Response" button to copy the entire response.

7.  **Copy code blocks:**
    ![Screenshot of the copy code button](sample/copy_code_block.png)
    
    Use the "Copy" buttons next to code blocks to copy individual code snippets.

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues.

## License

[Add your license here, e.g., MIT License]

## Acknowledgments

* LLM Models
* Flask
* marked.js
* Prism.js (if used)
