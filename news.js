function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Read credentials from JSON file
    fetch('credentials.json')
        .then(response => response.json())
        .then(credentials => {
            if (credentials[username] === password) {
                document.getElementById("error-message").innerText = "";
                displayWelcomeMessage();
            } else {
                document.getElementById("error-message").innerText = "Invalid username or password. Please try again.";
            }
        })
        .catch(error => console.error('Error reading credentials:', error));
}

function displayWelcomeMessage(username) {
    document.body.innerHTML = ''; // Clear the body content

    var welcomeMessage = document.createElement('div');
    welcomeMessage.innerHTML = `
        <h1>Welcome 
        Succssfully login </h1>
        <div class="smiley"></div>
    `;
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.marginTop = '90px';
    welcomeMessage.style.color = 'white'; // Set the text color to white

    document.body.appendChild(welcomeMessage);
}