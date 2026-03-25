const form = document.getElementById("form");

form.addEventListener("submit", handleRegister);

// Toggle password visibility
const togglePasswords = document.querySelectorAll('.toggle-password');
togglePasswords.forEach(toggle => {
  toggle.addEventListener('click', function() {
    const targetId = this.dataset.target;
    const input = document.getElementById(targetId);
    
    if (input.type === 'password') {
      input.type = 'text';
      this.classList.remove('fa-eye');
      this.classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      this.classList.remove('fa-eye-slash');
      this.classList.add('fa-eye');
    }
  });
});

// Password strength checker
const passwordInput = document.getElementById('password');
const strengthBar = document.querySelector('.strength-bar');

passwordInput.addEventListener('input', function() {
  const password = this.value;
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;

  strengthBar.className = 'strength-bar';
  if (strength === 1) {
    strengthBar.classList.add('weak');
  } else if (strength === 2 || strength === 3) {
    strengthBar.classList.add('medium');
  } else if (strength === 4) {
    strengthBar.classList.add('strong');
  }
});

// Main register handler
function handleRegister(e) {
  e.preventDefault();

  const username = getValue("username");
  const email = getValue("email");
  const password = getValue("password");
  const confirmPassword = getValue("confirm-password");

  const isValid =
    validateUsername(username) &
    validateEmailField(email) &
    validatePassword(password) &
    validateConfirm(password, confirmPassword);

  if (!isValid) return;

  const users = getUsers();

  if (users.some((user) => user.email === email)) {
    showError("error-email-exist", "Email đã tồn tại");
    return;
  }

  hideError("error-email-exist");

  const newUser = {
    id: Date.now(),
    username,
    email,
    password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Success notification
  showSuccessMessage("Đăng ký thành công!");
  form.reset();
  strengthBar.className = 'strength-bar';
  
  // Redirect sau 1.5 giây
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

// Helper functions
function getValue(id) {
  return document.getElementById(id).value.trim();
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function validateUsername(username) {
  if (!username) return showError("error-name", "Không được để trống");
  if (username.length < 3) return showError("error-name", "Ít nhất 3 ký tự");
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return showError("error-name", "Chỉ chứa chữ, số và dấu gạch dưới");
  }
  return hideError("error-name");
}

function validateEmailField(email) {
  if (!email) return showError("error-email", "Không được để trống");
  if (!validateEmail(email)) return showError("error-email", "Sai định dạng email");
  return hideError("error-email");
}

function validatePassword(password) {
  if (!password) return showError("error-password", "Không được để trống");
  if (password.length < 8) return showError("error-password", "Ít nhất 8 ký tự");
  return hideError("error-password");
}

function validateConfirm(password, confirmPassword) {
  if (!confirmPassword) return showError("error-confirm", "Không được để trống");
  if (password !== confirmPassword) return showError("error-confirm", "Mật khẩu không khớp");
  return hideError("error-confirm");
}

function showError(id, message) {
  const el = document.getElementById(id);
  el.classList.add('show');
  el.textContent = message;
  return false;
}

function hideError(id) {
  const el = document.getElementById(id);
  el.classList.remove('show');
  el.textContent = "";
  return true;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}

// Success notification
function showSuccessMessage(message) {
  // Tạo notification element
  const notification = document.createElement('div');
  notification.className = 'success-notification';
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(notification);

  // Xóa sau 2 giây
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 300);
  }, 1500);
}