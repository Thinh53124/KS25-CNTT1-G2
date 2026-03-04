let bookname = prompt("Tên sách:");
let user = prompt("tên người mượn:");
let statebook = prompt("Tình trạng sách ");
let dayborrow = prompt("số ngày mượn");
let numdayborrow = Number(dayborrow);
let memberuser =prompt("Bạn có thẻ hội viên không(điền có hoặc không):");
let memberuserlower = memberuser.toLowerCase();
let statebooklower = statebook.toLowerCase();
document.write("thông tin mượn sách");
document.write("tên sách: "+bookname +"<br>");
document.write("tên người mượn: " + user +"<br>");
document.write("Số ngày mượn: " + dayborrow +"<br>");
document.write("tình trạng thẻ hội viên :" + memberuser +"<br>");
switch (statebooklower) {
    case "có sẵn":
        if (memberuserlower == "có"){
            document.write("Chúc mừng, bạn có thể mượn sách này")
        }else {
            document.write("Xin lỗi bạn không thể mượn sách khi chưa có thẻ hội viên")
        }
        break;
    case "đã mượn":
        if (numdayborrow < 30 && memberuserlower == "có"){
            document.write("Sách đang được mượn, vui lòng đợi đến khi trả lại");
        }else if (numdayborrow <30 && memberuserlower == "không"){
            document.write("Bạn không thể mượn sách nếu không có thẻ thư viện")
        }
        break;
    default:
        document.write("Thông tin không hợp lệ, vui lòng nhập lại")
        break;

}