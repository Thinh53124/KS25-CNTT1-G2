let bookName = prompt("Nhập tên sách: ");
let bookBorrowPerson = prompt("Nhập tên người mượn: ");
let bookStatus = prompt("Nhập tình trạng sách (có sẵn, đã mượn, không có sẵn): ");
let bookBorrowDay = +prompt("Nhập số ngày mượn: ");
let bookPass = confirm("Bạn có thẻ thư viện chưa?");

bookStatus = bookStatus.toLowerCase().trim()

if(bookStatus === "có sẵn" && bookPass){
    document.writeln("Chúc mừng, bạn có thể mượn sách này");
}
else if(bookStatus === "đã mượn" && bookBorrowDay < 30){
    if(bookPass){
        document.writeln("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    }
    else{
        document.writeln("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
}
else if(bookStatus === "không có sẵn"){
    document.writeln("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
}
else{
    document.writeln("Thông tin không hợp lệ, vui lòng nhập lại");
}