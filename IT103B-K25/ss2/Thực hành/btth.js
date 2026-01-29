//Hệ thống kiểm tra người dùng có đủ điều kiện để mượn sách và tính tiền phạt
//Nếu trả sách muộn

// 1. Sử dụng lệnh prompt để nhập thông tin

let userName = prompt("Nhập tên người dùng");
let role = prompt("Nhập vai trò(student, admin, guest)");
let account_balance = Number(prompt("Nhập số dư tài khoản thẻ"));
let card_status = prompt("Nhập trạng thái thẻ thư viện(true/false)");
let date = +prompt("Nhập số ngày quá hạn trả sách");


switch (role.toLowerCase()) {
    case "admin":
        console.log("Chào Admin, bạn có toàn quyền hệ thống");
        break;
    case "student":
        console.log("Chào sinh viên, bạn có thể mượn sách");
        break;
    case "guest":
        console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
        break;
    default:
        console.log("Lỗi: Vai trò không hợp lệ!");
        break;
}

//kiểm tra điều kiện

let checked = userName != null && (role == "admin" || role == "student") && account_balance > 0 && card_status == "true";
if(checked){
    console.log("đủ điều kiện mượn sách");
}else{
    console.log("không đủ điều kiện mượn sách");
}

console.log("Kết quả mượn: "+ checked);


//tính phí phạt trả sách dựa vào sô ngày muộn

// - Nếu số ngày <= 0: Không phạt. In ra "Cảm ơn bạn đã trả đúng hạn".
// - Nếu số ngày từ 1 đến 5 ngày: Phạt 5.000đ/ngày.
// - Nếu số ngày từ 6 đến 10 ngày: Phạt 10.000đ/ngày.
// - Nếu số ngày > 10 ngày: Phạt 200.000đ (cố định) và in thêm cảnh báo "TÀI KHOẢN BỊ KHÓA".

let fee = Number();
let result = Number();

if(date<=0){
    console.log("cảm ơn bạn đã đúng hạn");
    fee = date * 0;
}else if(1 <= date && date <=5 ){
    console.log("số tiền phạt: 5000");
    fee = date * 5000;
}else if(date>=6 && date <=10 ){
    console.log("số tiền phạt: 10.000/ngày");
    fee = date * 10000;
}else if(date > 10){
    console.log("số tiền phạt: 200.000");
    console.log("TÀI KHOẢN BỊ KHÓA!!!");
    fee = 200000;
}

let overdueBook = "Quá hạn " + date + " ngày";


console.log(`---HỆ THỐNG MƯỢN TRẢ---
Người dùng: ${userName}
Quyền hạn: ${role.toLowerCase()}
Kết quả mượn: ${checked}
Tình trạng trả sách: ${overdueBook}
Tiền phạt: ${fee} VNĐ`)