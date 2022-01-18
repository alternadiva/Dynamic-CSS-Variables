// DOM

let username = document.getElementById("username");
let password = document.getElementById("password");

let login = document.getElementById("login");
let cancel = document.getElementById("cancel");

let testUsername = "testuser";
let testPassword = "mypassword"

// Login Test

function testLogin() {
    if (username.value === testUsername && password.value === testPassword) {
        username.style.background = "var(--correct-background)";
        password.style.background = "var(--correct-background)";
    }
}


function resetLogin() {

}

// Event listeners

login.addEventListener("click", testLogin);
cancel.addEventListener("click", resetLogin);