let users = JSON.parse(localStorage.getItem("users")) || [];

if (!users.find((u) => u.role === "ADMIN")) {
  let admin = {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "123@123",
    role: "ADMIN",
  };

  users.push(admin);
  localStorage.setItem("users", JSON.stringify(users));
}

function login(e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let error = document.querySelector(".error-account");

  error.style.display = "none";

  if (email === "" || password === "") {
    error.style.display = "block";
    error.textContent = "Email và mật khẩu không được để trống!";
    return;
  }

  let user = users.find(
    (item) =>
      item.email.toLowerCase() === email.toLowerCase() &&
      item.password === password,
  );

  if (!user) {
    error.style.display = "block";
    error.textContent = "Email hoặc mật khẩu không chính xác!";
  } else {
    localStorage.setItem("currentUser", JSON.stringify(user));
    rememberLogin();

    createToast("success", "Thành công", "Đăng nhập thành công!");

    setTimeout(() => {
      if (user.role === "ADMIN") {
        window.location.href = "../HTML/admin.html";
      } else {
        window.location.href = "../HTML/index.html";
      }
    }, 1500);
  }
}

function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

function rememberLogin() {
  const checked = document.getElementById("remember").checked;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (checked) {
    localStorage.setItem("rememberedEmail", email);
    localStorage.setItem("rememberedPassword", password);
  } else {
    localStorage.removeItem("rememberedEmail");
    localStorage.removeItem("rememberedPassword");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const email = localStorage.getItem("rememberedEmail");
  const password = localStorage.getItem("rememberedPassword");

  if (email && password) {
    document.getElementById("email").value = email;
    document.getElementById("password").value = password;
    document.getElementById("remember").checked = true;
  }
});

function createToast(type, title, message) {
  const container = document.getElementById("toast-container");

  let icon = "";

  if (type === "success") {
    icon = '<i class="fa-regular fa-circle-check"></i>';
  } else if (type === "error") {
    icon = '<i class="fa-solid fa-xmark"></i>';
  } else if (type === "warning") {
    icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  toast.innerHTML = `
    <div class="icon">${icon}</div>
    <div class="content">
      <div class="title">${title}</div>
      <div class="message">${message}</div>
    </div>
    <div class="close" onclick="this.parentElement.remove()">✖</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(120%)";
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}
