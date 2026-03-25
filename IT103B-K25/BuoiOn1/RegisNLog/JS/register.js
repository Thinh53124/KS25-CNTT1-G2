let users = [];

function register(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  const errorNameEl = document.querySelector(".error-name");
  const errorEmailEl = document.querySelector(".error-email");
  const errorEmailExistEl = document.querySelector(".errorEmail");

  const isUsernameValid = validateUsername(username, errorNameEl);
  const isEmailValid = validateEmailField(email, errorEmailEl);

  if (!isUsernameValid || !isEmailValid) return;

  if (users.some(user => user.email === email)) {
    toggleError(errorEmailExistEl, "Email đã tồn tại", true);
    return;
  }

  toggleError(errorEmailExistEl, "", false);

  users.push({ username, email });

  console.log("Submit thành công");

  let password = document.getElementById("password").value.trim()
  if(password.length<8){
    document.querySelector(".error-password").style.display="block"
  }else{
    document.querySelector(".error-password").style.display="none"

  }
}

function validateUsername(username, element) {
  if (!username) return toggleError(element, "Tên không được để trống!", true);
  if (username.length < 3) return toggleError(element, "Tên phải nhiều hơn 2 kí tự!", true);
  return toggleError(element, "", false);
}

function validateEmailField(email, element) {
  if (!email) return toggleError(element, "Email không để trống!", true);
  if (!validateEmail(email)) return toggleError(element, "Email sai định dạng!", true);
  return toggleError(element, "", false);
}

function toggleError(element, message, show) {
  element.style.display = show ? "block" : "none";
  element.textContent = message;
  return !show;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}