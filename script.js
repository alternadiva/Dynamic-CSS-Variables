// DOM

let username = document.getElementById("username");
let password = document.getElementById("password");

let login = document.getElementById("login");
let cancel = document.getElementById("cancel");

let warning = document.getElementById("warning");

// Variables

let testUsername = "testuser";
let testPassword = "mypassword";

// Login Test

function testLogin() {
    if (username.value === testUsername && password.value === testPassword) {
        username.style.background = "var(--correct-background)";
        password.style.background = "var(--correct-background)";
        warning.innerText = "Correct!"
        warning.style.background = "var(--correct-background)";
    }
    else if (username.value.indexOf(' ') >= 0 || password.value.indexOf(' ') >= 0) {
        if (username.value.indexOf(' ') >= 0 && password.value.indexOf(' ') >= 0) {
            username.style.background = "var(--space-background)";
            username.value = "";
            password.style.background = "var(--space-background)";
            password.value = "";
            warning.innerText = "Incorrect. Please, remove the white spaces!"
            warning.style.background = "var(--space-background)";
        }
        else if (username.value.indexOf(' ') >= 0) {
            username.style.background = "var(--space-background)";
            username.value = "";
            warning.innerText = "Incorrect. Please, remove the white spaces!"
            warning.style.background = "var(--space-background)";
        }
        else {
            password.style.background = "var(--space-background)";
            password.value = "";
            warning.innerText = "Incorrect. Please, remove the white spaces!"
            warning.style.background = "var(--space-background)";
        }
        
    }
    else {
        if (username.value !== testUsername && password.value !== testUsername) {
            username.style.background = "var(--incorrect-background)";
            username.value = "";
            password.style.background = "var(--incorrect-background)";
            password.value = "";
            warning.innerText = "Incorrect User ID and Password";
            warning.style.background = "var(--incorrect-background)";
        }
        else if (username.value !== testUsername) {
            username.style.background = "var(--incorrect-background)";
            username.value = "";
            warning.innerText = "Incorrect User ID"
            warning.style.background = "var(--incorrect-background)";
            password.style.background = "var(--default-background)";
        }
        else {
            password.style.background = "var(--incorrect-background)";
            password.value = "";
            warning.innerText = "Incorrect Password"
            warning.style.background = "var(--incorrect-background)";
            username.style.background = "var(--default-background)";
        }
    }
}

// Reset inputs and style

function resetLogin() {
    username.value = "";
    password.value = "";
    warning.innerText = "";

    warning.style.background = "var(--default-background)";
    username.style.background = "var(--default-background)";
    password.style.background = "var(--default-background)";
}

// Event listeners

login.addEventListener("click", testLogin);
cancel.addEventListener("click", resetLogin);