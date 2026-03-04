/* 

Các loại function và các loại khai báo
Tham số và đối số trong hàm:GIÚP HÀM CÓ THỂ TÁI SỬ DỤNG
+parameter (tham số ) được khai báo trực tiếp trong hàm
+argument(đối số ) khi gọi hàm truyền giá trị
*/
// 1.Function declaration
function sayHello(){
    console.log(`Xin chào!`);
}
sayHello();
// 2.Function expression
const sum = function() {
    let a=5;
    let b=6;
    console.log(` tổng ${a} + ${b} = ${a+b}`);
}
sum();

// 3.arrow function
const addToCart = ()=>{

}
// Khai báo mảng chứa điểm số môn học JS Bất kì
// Tính tổng tất cả của các điểm thi
let scores1 = [4,7,5,9];
let scores2 = [6,7,8,3];
function totalScore(param1,param2) {
    let sum = 0;
    for (let i =0;i<scores1.length;i++){
        sum += scores1[i];
    }
    console.log(` kết quả: ${sum}`);
    
}
totalScore(scores1);
totalScore(scores2);
// viết hàm hiển thị danh sách sinh viên
let Students = ["hoa","thu","lan","ngọc"]
let result = [];
function ListStudents() {
    for(let i=0;i<Students.length;i++){
    document.write(`sinh viên ${Students[i]}<br><br>`)
    }
}
ListStudents();
// dùng prompt cho người dùng nhập từ khóa tìm kiếm sinh viên sau đó hiển thị sinh viên
function searchstudent() {
    let find = prompt("Nhập tên sinh viên cần tìm");
    Students.includes(find)
    for(let i =0;i<Students.length;i++){
        if(Students[i].includes(find)){
            result.push(Students[i]);
        }
    }
document.write("********************** <br>");
}
console.log("result",result);
searchstudent(result);
/* 
Cho người dùng nhập vào email đăng ký 
kiểm tra nếu có ký tự @ thì hiển thị email hợp lệ
Không có thì không hợp lệ
*/
function CheckEmail() {
    let email = prompt("Nhập email");
    for(let i =0;i<email.length;i++){
        if(email.includes("@")){
            console.log("hợp lệ");
            return true;
        }else {
            console.log("Không hợp lệ");
            return false;
        }
    }
}
CheckEmail();


