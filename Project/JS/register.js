let users = JSON.parse(localStorage.getItem("users")) || [];

function register(e) {
  e.preventDefault();

  let name = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirm = document.getElementById("confirmPassword").value.trim();
  let terms = document.getElementById("terms").checked;

  if (name === "") {
    showError(".error-name", "Không được để trống!");
    return;
  } else if (name.length < 2) {
    showError(".error-name", "Tên phải lớn hơn 2 kí tự");
    return;
  } else {
    showError(".error-name", "");
  }

  if (email === "") {
    showError(".error-email", "Không được để trống!");
    return;
  }

  if (!validateEmail(email)) {
    showError(".error-email", "Email không đúng định dạng!");
    return;
  }

  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    showError(".error-email", "Email đã tồn tại!");
    return;
  }

  showError(".error-email", "");

  if (password === "") {
    showError(".error-password", "Không được để trống!");
    return;
  }

  if (!validatePassword(password)) {
    showError(".error-password", "Tối thiểu 8 ký tự + ký tự đặc biệt!");
    return;
  }

  showError(".error-password", "");

  if (confirm === "") {
    showError(".error-confirm-password", "Không được để trống!");
    return;
  }

  if (password !== confirm) {
    showError(".error-confirm-password", "Không trùng khớp!");
    return;
  }

  showError(".error-confirm-password", "");

  if (!terms) {
    createToast("error", "Lỗi", "Bạn phải đồng ý điều khoản!");
    return;
  }

  let newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role: "USER",
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  createToast("success", "Thành công", "Đăng ký thành công!");

  setTimeout(() => {
    window.location.href = "./login.html";
  }, 1500);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return /^(?=.*[!@#$%^&*]).{8,}$/.test(password);
}

function showError(selector, message) {
  const el = document.querySelector(selector);
  el.style.display = message ? "block" : "none";
  el.textContent = message;
}

function createToast(type, title, message) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<b>${title}</b><div>${message}</div>`;

  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
