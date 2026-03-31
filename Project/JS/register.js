let users = JSON.parse(localStorage.getItem("users")) || [];

function register(e) {
  e.preventDefault();

  let name = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirm = document.getElementById("confirmPassword").value.trim();
  let terms = document.getElementById("terms").checked;

  // NAME
  if (name === "") {
    showError(".error-name", "Không được để trống!");
    return;
  } else {
    showError(".error-name", "");
  }

  // EMAIL
  if (email === "") {
    showError(".error-email", "Không được để trống!");
    return;
  }

  if (!validateEmail(email)) {
    showError(".error-email", "Email không đúng định dạng!");
    return;
  }

  if (users.some((u) => u.email === email)) {
    showError(".error-email", "Email đã tồn tại!");
    return;
  }

  showError(".error-email", "");

  // PASSWORD
  if (password === "") {
    showError(".error-password", "Không được để trống!");
    return;
  }

  if (!validatePassword(password)) {
    showError(".error-password", "Tối thiểu 8 ký tự + ký tự đặc biệt!");
    return;
  }

  showError(".error-password", "");

  // CONFIRM
  if (confirm === "") {
    showError(".error-confirm-password", "Không được để trống!");
    return;
  }

  if (password !== confirm) {
    showError(".error-confirm-password", "Không trùng khớp!");
    return;
  }

  showError(".error-confirm-password", "");

  // TERMS
  if (!terms) {
    createToast("error", "Lỗi", "Bạn phải đồng ý điều khoản!");
    return;
  }

  // TẠO USER
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

// validate
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return /^(?=.*[!@#$%^&*]).{8,}$/.test(password);
}

// show error
function showError(selector, message) {
  const el = document.querySelector(selector);
  el.style.display = message ? "block" : "none";
  el.textContent = message;
}

// toast
function createToast(type, title, message) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<b>${title}</b><div>${message}</div>`;

  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}