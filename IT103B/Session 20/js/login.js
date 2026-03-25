let users = JSON.parse(localStorage.getItem("users")) || [];

function login(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let isValid = true;

    if (email === "") {
        showErrorEmail("Email không được để trống!");
        isValid = false;
    } else {
        showErrorEmail("");
    }

    if (password === "") {
        showErrorPassword("Mật khẩu không được để trống!");
        isValid = false;
    } else {
        showErrorPassword("");
    }

    if (!isValid) return;

    let user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        showErrorPassword("Email hoặc mật khẩu không đúng!");
        return;
    }

    alert("Đăng nhập thành công!");

    localStorage.setItem("currentUser", JSON.stringify(user));

}

function showErrorEmail(message) {
    let el = document.querySelector(".error-email");
    if (message) {
        el.textContent = message;
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}

function showErrorPassword(message) {
    let el = document.querySelector(".error-password");
    if (message) {
        el.textContent = message;
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}