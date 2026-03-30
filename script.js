function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.toLowerCase();
    
    if (message.trim() === "") {
    return;
    }    

    displayMessage(message, "user");

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
    chatBox.scrollTop = chatBox.scrollHeight;
}

let greetings = ["hi", "hello", "hey","hai"];

function getBotResponse(message) {
    if (message.some(greet => message.toLowerCase().includes(greet))) {
        return "Hello! How can I help you?";
    } 
    else if (message.includes("how are you")) {
        return "I'm just code, but I'm doing great!";
    } 
    else if (message.includes("bye")) {
        return "Goodbye! Have a nice day!";
    } 
    else if (message.includes("your name")) {
        return "I'm chatty, your friendly chatbot !";
    } 
    else if (message.includes("who created you")) {
        return "I'm chatty, your friendly chatbot !";
    } 
    else {
        return "I don't understand that yet.";
    }
}

document.getElementById("user-input")
.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});