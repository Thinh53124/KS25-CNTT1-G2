let users = JSON.parse(localStorage.getItem("users")) || [];
// if (users == null) {
//     users == [];
// }
function register(e) {
    e.preventDefault();
    let username = document.getElementById("username").value.trim();
    if (username.length == 0) {
        // document.getElementsByClassName("error-name")[0];
        // hoặc: 
        showErrorName("Tên không được để trống!","block");
        return;
    } else if (username.length < 3 && username.length > 0) {
        showErrorName("Tên phải có hơn 2 ký tự","block");
    } else {
        showErrorName("");
    }

    let email = document.getElementById("email").value.trim();
    //REGEX
    if (!validateEmail(email)) {
        showErrorEmail("Email không đúng định dạng!");
    return;
    } else {
        showErrorEmail("");
    }
    //Kiểm tra email tồn tại chưa?
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            showErrorEmail("Email đã tồn tại!");
            return;
        }        
    }
    showErrorEmail("","block")

    let password = document.getElementById("password").value.trim();

    if (password.length < 8) {
        document.querySelector(".error-password").textContent = "Mật khẩu phải trên 8 ký tự!";
        document.querySelector(".error-password").style.display = "block";
        return;
    } else {
        document.querySelector(".error-password").style.display = "none";
    }

    let confirmPassword = document.getElementById("confirm").value.trim();

    if (confirmPassword !== password) {
        document.querySelector(".error-confirm").textContent = "Mật khẩu xác nhận không khớp!";
        document.querySelector(".error-confirm").style.display = "block";
        return;
    } else {
        document.querySelector(".error-confirm").style.display = "none";
    }
    
}

function showErrorName(message) {
    let el = document.querySelector(".error-name");
    if (message) {
        el.textContent = message;
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}

function showErrorEmail(message) {
    let el = document.querySelector(".error-email");
    if (message) {
        el.textContent = message;
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
