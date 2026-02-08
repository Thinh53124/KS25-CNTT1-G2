/* 

Các loại function và cách khai báo
Tham số và đối số trong hàm: GIÚP HÀM CÓ THỂ TÁI SỬ DỤNG
    +, parameter(tham số) : được khai báo trực tiếp trong hàm
    +, argument(đối số) : khi gọi hàm truyền giá trị
Giá trị trả về của hàm return
*/

//1. FUnction declaration:
function sayHello(params) {
    console.log("Xin chào!!", params)
}
sayHello(1);


function login() {
    console.log("Nhập mail");
    console.log("Nhập mật khẩu")
}
//2. Function Expression
const sum = function () {
    let a = 5;
    let b = 6;
    console.log(`tổng ${a} + ${b} = ${a + b}`);

}
//sum();

//3. Arrow Function
const addToCart = () => {

}

//KHAI BÁO MẢNG CHỨA ĐIỂM THI CUỐI MÔN HỌC JS BẤT KỲ
//TÍNH TỔNG TẤT CẢ CỦA CÁC ĐIỂM THI CUỐI MÔN

let score1 = [4, 7, 5, 9];
let score2 = [6, 7, 8, 9];
function totalScore(param1, param2) {
    let sum = 0;
    for (let i = 0; i < param1.length; i++) {
        sum += score1[i];
    }
    console.log(`Kết quả : ${sum}`);    //25
}
totalScore(score1);
totalScore(score2);



let students = ["hoa", "thu", "lan", "ngọc", "minh"];
let result = [];
//viết hàm hiển thị danh sách sinh viên

function studentsList(arr){
    for(let  i = 0; i < students.length; i++){
        document.write(`${students[i]} <br>`)
    }
}

studentsList();


// dùng prompt cho người dùng nhập từ khóa tìm kiếm sinh viên sau đó hiển thị sinh viên

let studentName = prompt("Mời nhập từ khóa tìm kiếm");
console.log("studentName", studentName);
for (let j = 0; j < students.length; j++) {
    if (students[j].includes(studentName)) {
        result.push(students[j]);
    }
}
document.write("************** <br>")
console.log("result", result);
studentsList(result);

/* 

    Cho người dùng nhập vào email đăng kí
    Kiểm tra nếu có kí tự @ thì email hợp lệ
    Không có thì email hợp lệ.
*/

function checkEmail(param) {
    if(param.includes("@")){
        return true;
    }
    return false

}
let email = prompt("mời nhập email");
if(checkEmail(email)){
    console.log("Email hợp lệ!");
}else{
    console.log("Email không hợp lệ!");
}


/* 

+, kiểm tra email nếu hợp lệ thì trả về true
+, nếu không hợp lệ thì trả về false
*/