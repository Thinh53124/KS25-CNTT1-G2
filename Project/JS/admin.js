// DOM

let logout = document.getElementById("logout");

function showLogout() {
    logout.style.display = "flex";
}

function hideLogout() {
    logout.style.display = "none";
}

function logoutToLogin() {
    window.location.replace("../html/login.html");
}