let bookName = prompt("Nhập tên sách");
let rentName = prompt("Nhập tên người mượn");
let bookStatus = prompt("Nhập tình trạng sách(có sẵn, đã mượn, không có sẵn)");
let bookDate = prompt("Nhập số ngày mượn");

let card_lib;

console.log("Tên sách " + bookName);
console.log("Tên người mượn " + rentName);
console.log("Tình trạng sách "+ bookStatus);
console.log("Số ngày mượn " + bookDate);

if(bookStatus=="có sẵn" && rentName != null){
    console.log("Chúc mừng bạn có thể mượn sách này");
}else if(bookStatus=="đã mượn"&&bookDate < 30){
    if(card_lib =="có"){
        console.log("Sách đang mượn, vui lòng đợi đến khi trả lại");
    }else{
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
}else if(bookStatus="không có sẵn"){
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
}else{
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}