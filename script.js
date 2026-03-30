function sendMessage() {
    let input = document.getElementById("user-input");

    let rawMessage = input.value;
    let message = rawMessage.toLowerCase();

    // Prevent empty messages
    if (message.trim() === "") return;

    // Display user message (original text)
    displayMessage(rawMessage, "user");

    let response = getBotResponse(message);

    setTimeout(() => {
        displayMessage(response, "bot");
    }, 500);

    input.value = "";
}

function displayMessage(message, sender) {
    let chatBox = document.getElementById("chat-box");

    let msg = document.createElement("div");
    msg.className = sender;
    msg.innerText = message;

    chatBox.appendChild(msg);

    // Auto scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Greeting keywords
let greetings = ["hi", "hello", "hey", "hai"];

function getBotResponse(message) {

    // Greeting check (FIXED)
    if (greetings.some(greet => message.includes(greet))) {
        return "Hello! How can I help you?";
    } 

    else if (message.includes("how are you")) {
        return "I'm just code, but I'm doing great!";
    } 

    else if (message.includes("bye")) {
        return "Goodbye! Have a nice day!";
    } 

    else if (
        message.includes("your name") ||
        message.includes("who created you")
    ) {
        return "I'm Chatty, your friendly chatbot!";
    } 

    else {
        return "I don't understand that yet.";
    }
}

// Enter key support
document.getElementById("user-input")
.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
