let users = JSON.parse(localStorage.getItem("users"))||[];
// if(users==null){
//     users=[];
// }

// tạo hàm đi đăng ký tài khoản
function register(e) {
  e.preventDefault();
  console.log("đã gọi hàm!");
  // lấy giá trị tên người dùng:
  let username = document.getElementById("username").value.trim();
  console.log("username", username);
  if (username.length == 0) {
    showErrorName("tên không được để trống!", "block");
    return;
  }
  if (username.length < 3) {
    showErrorName("tên phải nhiều hơn 2 kí tự", "block");
    return;
  }
  showErrorName("", "none");

  //  showErrorName("tên phải có ký tự đặc biệt")

  let email = document.getElementById("email").value.trim();

  // REGEX
  if (!validateEmail(email)) {
    showErrorEmail("email không đúng định dạng", "block");
    return;
  } else {
    showErrorEmail("", "none");
  }

  // Kiểm tra email đã tồn tại hay chưa?
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      console.log("email đã tồn tại!");
      //   document.querySelector(".error-email").style.display = "none";
      //   document.querySelector(".error-email").innerHTML = "email đã tồn tại!";
      showErrorEmail("email đã tồn tại!", "block");
      return;
    }
  }
  showErrorEmail("", "none");

  // kiểm tra mật khẩu có hợp lệ hay chưa?
  let password = document.getElementById("password").value.trim();
  if (password.length < 8) {
    document.querySelector(".error-password").style.display = "block";
    return;
  } else {
    document.querySelector(".error-password").style.display = "none";
  }

  // kiểm tra mật khẩu có trùng khớp hay không
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  if (password !== confirmPassword) {
    document.querySelector(".error-confirm-password").style.display = "block";
  } else {
    document.querySelector(".error-confirm-password").style.display = "none";
  }

  // khi VALIDATE dữ liệu thành công thì đi tạo đối tượng user
  let user = {
    id: Math.floor(Math.random() * 99999) + new Date().getMilliseconds(),
    name: username,
    email: email,
    password: password,
  };
  console.log("user", user);
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  document.location.href="./login.html";
}
// viết hàm show lỗi khi đăng ký với thuộc tính name
function showErrorName(errorName, display) {
  document.querySelector(".error-name").textContent = errorName;
  document.querySelector(".error-name").style.display = display;
}
// hàm kiểm tra định dạng email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
// viết hàm show lỗi khi đăng ký với thuộc tính email
function showErrorEmail(errorEmail, display) {
  document.querySelector(".error-email").textContent = errorEmail;
  document.querySelector(".error-email").style.display = display;
}