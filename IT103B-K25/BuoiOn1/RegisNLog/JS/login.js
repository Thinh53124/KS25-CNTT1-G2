// hàm đăng nhập
let users = JSON.parse(localStorage.getItem("users"))||[];
function login(e){
    e.preventDefault();
    let email= document.getElementById("email").value.trim();
    let password= document.getElementById("password").value.trim();

    let result=  users.filter((item)=>item.email==email&&item.password==password);
    if(result.length==0){
        document.querySelector(".error-login").style.display="block";
    }else{
        document.querySelector(".error-login").style.display="none";
        alert("đăng nhập thành công!")
    }
}