const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');

const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');

const togglePassword = document.querySelector('.toggle-password');

// Load saved email nếu có
window.addEventListener('load', () => {
  const savedEmail = localStorage.getItem('rememberedEmail');
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberCheckbox.checked = true;
  }
});

// Toggle password visibility
togglePassword.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    this.classList.remove('fa-eye');
    this.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    this.classList.remove('fa-eye-slash');
    this.classList.add('fa-eye');
  }
});

// Form submit handler
form.addEventListener('submit', handleLogin);

function handleLogin(e) {
  e.preventDefault();

  const email = getValue('email');
  const password = getValue('password');

  const isValid = validateEmailField(email) & validatePasswordField(password);

  if (!isValid) return;

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    showError('error-password', 'Email hoặc mật khẩu không chính xác');
    return;
  }

  hideError('error-password');

  // Remember email nếu checkbox được chọn
  if (rememberCheckbox.checked) {
    localStorage.setItem('rememberedEmail', email);
  } else {
    localStorage.removeItem('rememberedEmail');
  }

  // Save login info
  localStorage.setItem('currentUser', JSON.stringify(user));

  showSuccessMessage('Đăng nhập thành công!');
  
  setTimeout(() => {
    window.location.href = 'index.html'; // Chuyển hướng tới trang chính
  }, 1500);
}

function getValue(id) {
  return document.getElementById(id).value.trim();
}

function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function validateEmailField(email) {
  if (!email) return showError('error-email', 'Không được để trống');
  if (!validateEmail(email)) return showError('error-email', 'Sai định dạng email');
  return hideError('error-email');
}

function validatePasswordField(password) {
  if (!password) return showError('error-password', 'Không được để trống');
  if (password.length < 8) return showError('error-password', 'Mật khẩu không chính xác');
  return hideError('error-password');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
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
  el.textContent = '';
  return true;
}

function showSuccessMessage(message) {
  const notification = document.createElement('div');
  notification.className = 'success-notification';
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 300);
  }, 1500);
}

// Social login buttons
document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const provider = this.classList.contains('facebook') ? 'Facebook' : 'Google';
    showInfoMessage(`Đăng nhập với ${provider} sẽ được cập nhật sớm!`);
  });
});

function showInfoMessage(message) {
  const notification = document.createElement('div');
  notification.className = 'info-notification';
  notification.innerHTML = `
    <i class="fas fa-info-circle"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}