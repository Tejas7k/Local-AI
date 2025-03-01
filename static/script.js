document.addEventListener('DOMContentLoaded', () => {
    const copyResponseButton = document.getElementById('copy-response-btn');
    const responseContainer = document.getElementById('response');
    
    if (copyResponseButton) {
        copyResponseButton.addEventListener('click', () => {
            copyToClipboard(responseContainer.textContent, copyResponseButton, 'Copy');
        });
    }
});

// Handle form submission
document.getElementById('query-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    const responseContainer = document.getElementById('response');
    const generateButton = document.getElementById('generate-btn');
    const loadingGif = document.getElementById('loading-gif');

    resetUI(responseContainer, loadingGif, generateButton);

    try {
        const data = await fetchResponse(query);
        if (data && data.response) {
            renderResponse(data.response, responseContainer);
        } else {
            handleError(responseContainer, 'Unexpected response format.');
        }
    } catch (error) {
        handleError(responseContainer, error.message);
    } finally {
        loadingGif.style.display = "none";
        generateButton.disabled = false;
    }
});

// Function to fetch response from the server
async function fetchResponse(query) {
    const response = await fetch('/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });
    
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'An error occurred.');
    }
    return response.json();
}

// Function to render response with markdown and syntax highlighting
function renderResponse(responseText, container) {
    container.innerHTML = marked.parse(responseText);
    
    const codeBlocks = container.querySelectorAll('pre code');
    codeBlocks.forEach((block, index) => {
        const copyButton = createCopyButton(block, index);
        block.parentNode.insertBefore(copyButton, block.nextSibling);
    });
    
    Prism.highlightAll();
    container.classList.add('animate');
}

// Function to create a copy button for code blocks
function createCopyButton(block, index) {
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.classList.add('copy-button');
    copyButton.addEventListener('click', () => {
        copyToClipboard(block.textContent, copyButton, 'Copy');
    });
    return copyButton;
}

// Function to copy text to clipboard with feedback
function copyToClipboard(text, button, defaultText) {
    navigator.clipboard.writeText(text)
        .then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => button.textContent = defaultText, 2000);
        })
        .catch(err => {
            console.error('Failed to copy:', err);
            button.textContent = 'Error';
            setTimeout(() => button.textContent = defaultText, 2000);
        });
}

// Function to reset UI before making a request
function resetUI(responseContainer, loadingGif, generateButton) {
    responseContainer.innerHTML = "";
    loadingGif.style.display = "block";
    responseContainer.classList.remove('show-response');
    generateButton.disabled = true;
}

// Function to handle errors and display them in UI
function handleError(container, message) {
    container.innerHTML = `<span style="color: red;">An error occurred: ${message}</span>`;
    console.error("Error:", message);
}
