document.getElementById("startButton").addEventListener("click", function() {
    // Exibe a interface do chat quando o botão "Comece" é clicado
    document.getElementById("chatContainer").style.display = "block";
    document.querySelector(".start-button").style.display = "none";
    
    // Adiciona uma saudação do chatbot
    addMessage("bot", "Olá! Como posso ajudar você hoje?");
});

document.getElementById("sendButton").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("userInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        addMessage("user", userInput);
        document.getElementById("userInput").value = ""; // Limpa o campo de texto
        botResponse(userInput);
    }
}

function addMessage(sender, text) {
    const chatBody = document.getElementById("chatBody");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    
    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }
    
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Rola para a última mensagem
}

function botResponse(userText) {
    let response;
    
    // Simulando respostas básicas do chatbot
    if (userText.toLowerCase().includes("problema")) {
        response = "Você pode descrever mais sobre o problema que está enfrentando?";
    } else if (userText.toLowerCase().includes("oi") || userText.toLowerCase().includes("olá")) {
        response = "Olá! Como posso ajudar você?";
    } else {
        response = "Desculpe, ainda estou aprendendo. Pode reformular sua pergunta?";
    }
    
    // Simula um atraso na resposta do bot
    setTimeout(() => {
        addMessage("bot", response);
    }, 1000);
}
