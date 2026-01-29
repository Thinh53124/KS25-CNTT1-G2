let username = prompt("Nhập tên người dùng");
let role = prompt("Nhập vai trò (admin, student, guest)");
let cardBalance = parseFloat(prompt("Nhập số dư tài khoản thẻ"));
let bookPassStatus = prompt("Trạng thái thẻ thư viện (true/false)");
let bookReturnDate = +prompt("Số ngày quá hạn trả sách (Ví dụ: 0 là đúng hạn, 5 là quá hạn 5 ngày)");
let bookResult;
let fine =Number();
let newRole;
let newBookReturnDate;

if(bookReturnDate === null){
    bookReturnDate = 0;
}

if(bookPassStatus === "khác" || bookPassStatus === null){
    bookPassStatus === null;
    role = 0;
    console.log("Thẻ thư viện bị khoá");
}

if(cardBalance === null){
    cardBalance = 0;
}

switch(role.toLowerCase()){
    case "admin":
        newRole = "Admin, bạn có toàn quyền hệ thống";
        console.log("Chào Admin, bạn có toàn quyền hệ thống");
        break;
    case "student":
        newRole = "sinh viên, bạn có thể mượn sách";
        console.log("Chào sinh viên, bạn có thể mượn sách");
        break;
    case "guest":
        newRole = "khách, bạn chỉ có thể đọc tại chỗ";
        console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
        break;
    default:
        console.log("Lỗi: Vai trò không hợp lệ hoặc thẻ thư viện bị khoá!");
}

if(username !== null && role === "admin" || role === "student" && cardBalance > 0 && bookPassStatus === "true"){
    bookResult = "Được phép mượn sách";
    console.log("Được phép mượn sách");
}
else{
    bookResult = "Yêu cầu bị từ chối";
    console.log("Yêu cầu bị từ chối");
}

if(bookReturnDate <= 0){
    newBookReturnDate = "Trả đúng hạn";
    console.log("Cảm ơn bạn đã trả đúng hạn");
}
else if(bookReturnDate >= 1 && bookReturnDate <= 5){
    newBookReturnDate = "Quá hạn " + bookReturnDate + " ngày";
    fine = 5000 * bookReturnDate;
}
else if(bookReturnDate >= 6 && bookReturnDate <= 10){
    newBookReturnDate = "Quá hạn " + bookReturnDate + " ngày"
    fine = 10000 * bookReturnDate;
}
else{
    newBookReturnDate = "Quá hạn " + bookReturnDate + " ngày"
    fine = 200000;
    console.log("Tài khoản bị khoá");
}

console.log(`--- HỆ THỐNG MƯỢN TRẢ ---

                Người dùng: ${username}

                Quyền hạn: Chào ${newRole}

                Kết quả mượn: ${bookResult}

                Tình trạng trả sách: ${newBookReturnDate}

                Tiền phạt: ${fine} VNĐ`)