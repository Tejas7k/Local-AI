# Local AI 🚀  

Local AI is a privacy-focused web application that enables you to interact with Large Language Models (LLMs) while keeping your data secure. Unlike cloud-based AI services, Local AI processes all queries locally, ensuring complete confidentiality.

## ✨ Features  

- **Privacy-Focused** – Runs entirely on your local machine, keeping your data confidential.  
- **User-Friendly Interface** – A sleek and intuitive web UI for seamless interaction with LLMs.  
- **Code Block Highlighting** – Displays code snippets with proper formatting for better readability.  
- **One-Click Copy** – Easily copy the entire response or individual code snippets.  
- **Conversation History** – Retains previous interactions locally for easy reference.  
- **Loading Indicator** – Provides visual feedback during API requests.  

## 🎥 Demo  

Check out the demo video showcasing Local AI in action:  

[![Demo](sample/DEMO.mp4)](sample/DEMO.mp4)  

## 🔧 Prerequisites  

Before running the application, ensure you have the following:  

- **Python 3.x** installed  
- **Flask**, **Requests**, and **Tenacity** libraries  
- **LLM API Key** (set as an environment variable `LLM_API_KEY`)  

## 🚀 Installation  

Follow these steps to set up and run Local AI:  

### 1️⃣ Clone the Repository  

```bash
git clone https://github.com/your-username/LocalAI.git
cd LocalAI
```

### 2️⃣ Create a Virtual Environment (Recommended)  

```bash
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
```

### 3️⃣ Install Dependencies  

```bash
pip install -r requirements.txt
```

### 4️⃣ Set Up API Key  

Set your LLM API Key as an environment variable:  

```bash
export LLM_API_KEY="YOUR_API_KEY"  # macOS/Linux
set LLM_API_KEY="YOUR_API_KEY"     # Windows
```

For PowerShell:  
```powershell
$env:LLM_API_KEY = "YOUR_API_KEY"
```

### 5️⃣ Run the Application  

```bash
python app.py
```

### 6️⃣ Access the Web Interface  

Open your browser and navigate to:  

```
http://127.0.0.1:5000/
```

## 🎯 Usage  

### 🔹 Enter Your Query  
![Input Field](sample/Query.png)  
Type your query in the input field.  

### 🔹 Click "Generate"  
![Generate Button](sample/Generate.png)  
Click the "Generate" button to process your request.  

### 🔹 View the Response  
![Response Area](sample/Response_View.png)  
Generated content will be displayed in the response area.  

### 🔹 Copy the Response  
![Copy Response Button](sample/Copy_whole.png)  
Click the **Copy Response** button to copy the full output.  

### 🔹 Copy Code Blocks  
![Copy Code Block](sample/copy_code_block.png)  
Copy individual code snippets with the **Copy** button.  

## 🤝 Contributing  

Contributions are welcome! Feel free to submit pull requests or report issues.  

## 📜 License  

This project is licensed under the MIT License. See the [LICENSE](License)

## 🙌 Acknowledgments  

Special thanks to:  
- **LLM Models** for AI capabilities  
- **Flask** for backend framework  
- **marked.js & Prism.js** (if used) for UI enhancements  

---
🚀 _Developed with ❤️ for privacy-conscious AI users._
```

Now you can copy the whole thing easily! Let me know if you need any modifications. 🚀
