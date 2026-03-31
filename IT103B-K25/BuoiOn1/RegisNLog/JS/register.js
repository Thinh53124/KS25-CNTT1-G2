let users = JSON.parse(localStorage.getItem("users")) || [];

function register(e) {
  e.preventDefault();
  
  let username = document.getElementById("username").value.trim();
  console.log("username", username);
  
  if (username.length == 0) {
    showErrorName("Tên không được để trống!", "block");
    return;
  }
  if (username.length < 3) {
    showErrorName("Tên phải nhiều hơn 2 ký tự", "block");
    return;
  }
  showErrorName("", "none");

  let email = document.getElementById("email").value.trim();

  if (email.length == 0) {
    showErrorEmail("Email không được để trống!", "block");
    return;
  }

  if (!validateEmail(email)) {
    showErrorEmail("Email không đúng định dạng", "block");
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      showErrorEmail("Email đã tồn tại!", "block");
      return;
    }
  }
  showErrorEmail("", "none");

  let password = document.getElementById("password").value.trim();
  
  if (password.length == 0) {
    document.querySelector(".error-password").style.display = "block";
    document.querySelector(".error-password").textContent = "Mật khẩu không được để trống!";
    return;
  }

  if (!validatePassword(password)) {
    document.querySelector(".error-password").style.display = "block";
    document.querySelector(".error-password").textContent = "Mật khẩu tối thiểu 8 ký tự và có ít nhất một ký tự đặc biệt";
    return;
  } else {
    document.querySelector(".error-password").style.display = "none";
  }

  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  
  if (confirmPassword.length == 0) {
    document.querySelector(".error-confirm-password").style.display = "block";
    document.querySelector(".error-confirm-password").textContent = "Xác nhận mật khẩu không được để trống!";
    return;
  }

  if (password !== confirmPassword) {
    document.querySelector(".error-confirm-password").style.display = "block";
    document.querySelector(".error-confirm-password").textContent = "Mật khẩu không trùng khớp";
    return;
  } else {
    document.querySelector(".error-confirm-password").style.display = "none";
  }

  if (!document.getElementById("terms").checked) {
    createToast("warning", "⚠ Cảnh báo", "Bạn phải đồng ý với điều khoản sử dụng!");
    return;
  }

  let user = {
    id: Math.floor(Math.random() * 99999) + new Date().getMilliseconds(),
    name: username,
    email: email,
    password: password,
  };
  
  console.log("user", user);
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  
  createToast("success", "✓ Đăng ký thành công", "Vui lòng đăng nhập để tiếp tục.");
  
  setTimeout(() => {
    document.location.href = "./login.html";
  }, 2000);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  return re.test(password);
}

function showErrorName(errorName, display) {
  document.querySelector(".error-name").textContent = errorName;
  document.querySelector(".error-name").style.display = display;
}

function showErrorEmail(errorEmail, display) {
  document.querySelector(".error-email").textContent = errorEmail;
  document.querySelector(".error-email").style.display = display;
}