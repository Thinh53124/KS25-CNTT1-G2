const form = document.getElementById("registerForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const rePasswordInput = document.getElementById("rePassword");

let userList = []

form.addEventListener("submit", function(event){

    event.preventDefault(); 

    const email = emailInput.value;
    const password = passwordInput.value;
    const rePassword = rePasswordInput.value;

    let checkEmail = userList.find(user => user.email === email)
    if(checkEmail){
        alert("email đã tồn tại r cưng")
        return
    }
    
    if(password !== rePassword){
        alert("Mật khẩu phải giống nhau")
        return
    }

    const user = {
        email: email,
        password: password,
        rePassword: rePassword
    };

    userList.push(user)
    console.log(user);
});