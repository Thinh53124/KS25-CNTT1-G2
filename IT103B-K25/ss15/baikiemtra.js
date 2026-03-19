let formElement = document.getElementById("formReg"); 

function userInfo() {
    let info = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        rePassword: document.getElementById("rePassword").value
    };

    console.log("Dữ liệu người dùng:", info);

    console.table(info);
}

userInfo();