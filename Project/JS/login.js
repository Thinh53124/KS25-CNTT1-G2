let users = JSON.parse(localStorage.getItem("users")) || [];

// Nếu chưa có admin thì tạo sẵn
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

  if (email === "") {
    createToast("error", "Lỗi", "Email không được để trống!");
    return;
  }

  if (password === "") {
    createToast("error", "Lỗi", "Mật khẩu không được để trống!");
    return;
  }

  let user = users.find(
    (item) => item.email === email && item.password === password
  );

  if (!user) {
    createToast("error", "Lỗi", "Email hoặc mật khẩu không chính xác!");
  } else {
    localStorage.setItem("currentUser", JSON.stringify(user));

    createToast("success", "Thành công", "Đăng nhập thành công!");

    setTimeout(() => {
      // Nếu admin thì vào admin
      if (user.role === "ADMIN") {
        window.location.href = "../HTML/admin.html";
      } else {
        window.location.href = "../HTML/index.html";
      }
    }, 1500);
  }
}

// show/hide password
function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

// nhớ đăng nhập
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

// load lại dữ liệu nhớ
document.addEventListener("DOMContentLoaded", () => {
  const email = localStorage.getItem("rememberedEmail");
  const password = localStorage.getItem("rememberedPassword");

  if (email && password) {
    document.getElementById("email").value = email;
    document.getElementById("password").value = password;
    document.getElementById("remember").checked = true;
  }
});

// toast
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