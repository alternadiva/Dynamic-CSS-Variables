// DOM

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let login = document.getElementById("login");
let cancel = document.getElementById("cancel");

let testUsername = "testuser";
let testPassword = "mypassword"

// Event listeners

login.addEventListener("click", testLogin());
cancel.addEventListener("click", resetLogin());