let nameuser = prompt("Tên người dùng: ");
let role = prompt("Nhập vai trò của bạn (Admin,Student,Guest");
let roleupper = role.toUpperCase();
let money = Number(prompt("Số dư tài khoản thẻ: "));
let statemember = prompt("Trạng thái thẻ thư viện (nhập true nếu đang hoạt động): ");
let statememberupper = statemember.toUpperCase();
console.log(statememberupper);

let expiredborrow = Number(prompt("Số ngày quá hạn trả sách :"));
switch (roleupper){
    case "ADMIN":
        document.write("Hệ Thống mượn trả"+"<br>")
        document.write("Người dùng:" + nameuser +"<br>");
        document.write( "Quyền hạn: Chào Admin, bạn có toàn quyền hệ thống"+"<br>");
       if(money > 0 && statememberupper == "TRUE"){
            document.write("ĐƯỢC PHÉP MƯỢN SÁCH"+"<br>")
            if (expiredborrow <= 0){
            document.write("Cảm ơn bạn đã trả đúng hạn"+"<br>")
            document.write("Tiền phạt: 0 đ")
        }else if(expiredborrow>=1&&expiredborrow<=5){
            document.write("quá hạn trả: "+expiredborrow +" ngày" +"<br>")
            document.write("tiền phạt: "+5000 * expiredborrow +" ngày" +"<br>")
        }else if(expiredborrow <=10 && expiredborrow >=6){
            document.write("quá hạn trả " + expiredborrow +" ngày" +"<br>")
            document.write("tiền phạt: "+10000 * expiredborrow+ " ngày" +"<br>");
        }else {
            document.write("quá hạn trả " + expiredborrow +" ngày" +"<br>")
            document.write("Phạt 200.000đ" + "<br>");
            document.write("TÀI KHOẢN ĐÃ BỊ KHÓA")
        }
        }else {
            document.write("YÊU CẦU BỊ TỪ CHỐI" +"<br>" +"Lý do từ chối:Chưa có thẻ hội viên"+"<br>")
        }
    break;
    case "STUDENT":
        document.write("Hệ Thống mượn trả"+"<br>")
        document.write("Người dùng:" + nameuser +"<br>");
        document.write("Quyền hạn: Chào sinh viên, bạn có thể mượn sách"+"<br>");
        if(money > 0 && statememberupper == "TRUE"){
            document.write("ĐƯỢC PHÉP MƯỢN SÁCH"+"<br>")
            if (expiredborrow <= 0){
            document.write("Cảm ơn bạn đã trả đúng hạn"+"<br>")
            document.write("Tiền phạt: 0 đ")
        }else if( expiredborrow >=1&&expiredborrow<=5){
            document.write("quá hạn trả: "+expiredborrow +"<br>")
            document.write("tiền phạt: "+5000 * expiredborrow +"<br>")
        }else if(expiredborrow <= 10 && expiredborrow >=6){
            document.write("quá hạn trả " + expiredborrow +"<br>")
            document.write("tiền phạt: "+10000 * expiredborrow+"<br>");
        }else {
            document.write("quá hạn trả " + expiredborrow +" ngày" +"<br>")
            document.write("Phạt 200.000đ" + "<br>");
            document.write("TÀI KHOẢN ĐÃ BỊ KHÓA")
        }
        }else {
            document.write("YÊU CẦU BỊ TỪ CHỐI" +"<br>" +"Lý do từ chối:Chưa có thẻ hội viên"+"<br>")
        }
    break;
    case "GUEST":
        document.write("Quyền hạn: Chào khách, bạn chỉ có thể đọc tại chỗ");
        document.write("Bạn không thể mượn sách");
        break;
    default:
        document.write("Lỗi: Vai trò không hợp lệ");
    break;
}