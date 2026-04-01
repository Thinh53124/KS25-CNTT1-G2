let users = JSON.parse(localStorage.getItem("users")) || [];

if (!users.find(u => u.role === "ADMIN")) {
  let admin = {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "123@123",
    role: "ADMIN"
  };

  users.push(admin);
  localStorage.setItem("users", JSON.stringify(users));
}

function login(e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let error = document.querySelector(".error-account");

  // Ẩn lỗi trước mỗi lần submit
  error.style.display = "none";

  if (email === "" || password === "") {
    error.style.display = "block";
    error.textContent = "Email và mật khẩu không được để trống!";
    return;
  }

  let user = users.find(
    (item) => item.email === email && item.password === password
  );

  if (!user) {
    error.style.display = "block";
    error.textContent = "Email hoặc mật khẩu không chính xác!";
  } else {
    localStorage.setItem("currentUser", JSON.stringify(user));
    rememberLogin();

    // ✅ Chỉ giữ toast khi thành công
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

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  toast.innerHTML = `
    <div>${title}</div>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}