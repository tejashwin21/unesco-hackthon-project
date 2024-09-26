document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;

    if (userInput.trim() !== '') {
        addMessage('You: ' + userInput, 'user-message');
        fetchBotResponse(userInput);
        document.getElementById('userInput').value = '';
    }
});

function addMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message ' + className;
    messageElement.textContent = message;
    document.getElementById('messages').appendChild(messageElement);
    scrollChatToBottom();
}

function scrollChatToBottom() {
    const chatBox = document.getElementById('chatbox');
    chatBox.scrollTop = chatBox.scrollHeight;
}

function fetchBotResponse(userMessage) {
    fetch('https://api.example.com/getBotResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.response || "I'm sorry, I didn't understand that. Can you please rephrase?";
        addMessage('Bot: ' + botMessage, 'bot-message');
    })
    .catch(error => {
        console.error('Error:', error);
        addMessage('Bot: There was an error processing your request.', 'bot-message');
    });
}
 
/* div2 */

document.getElementById('newsCheckerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let newsUrl = document.getElementById('newsUrl').value;
    let newsText = document.getElementById('newsText').value;
    
    // AI API integration (Pseudo-code)
    // Send the data to AI API and receive response (credibility check, etc.)

    // Example response:
    let response = {
        credibility: "High",
        bias: "Low",
        misinformation: "No issues detected"
    };

    document.getElementById('newsResult').innerHTML = `
        <h4>Analysis Results</h4>
        <p><strong>Credibility:</strong> ${response.credibility}</p>
        <p><strong>Bias:</strong> ${response.bias}</p>
        <p><strong>Misinformation:</strong> ${response.misinformation}</p>
    `;
});





  