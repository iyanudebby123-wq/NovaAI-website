alert("Welcome to NovaAI!")


// ORIGINAL NOVAAI BUTTON
document.getElementById("novaButton").addEventListener("click", function() {

    let appName = "NovaAI";
    let status = "Your Personal AI Assistant.";

    document.getElementById("message").textContent =
    `${appName} is ${status}`;

});


// NEW GREETING BUTTON
/** @param {string} name */
function createGreeting(name) {

    if (name === "") {
        return "Please enter your name.";
    } else {
        return `Hello ${name}! Welcome to NovaAI.`;
    }

}


document.getElementById("greetButton").addEventListener("click", function() {

    let userName = document.getElementById("userName").value.trim();

    document.getElementById("greeting").textContent =
    createGreeting(userName);

});