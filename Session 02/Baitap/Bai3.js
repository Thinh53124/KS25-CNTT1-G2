let bookname = prompt("Nhập tên sách: ");
let typeofbook = prompt("Thể loại sách: ");
let bookstate = prompt("tình trạng sách: ");
let typeofbooklower =  typeofbook.toLowerCase();
let bookstatelower = bookstate.toLowerCase();
document.write("Thông tin sách"+"<br>");
document.write("Tên sách: " + bookname+"<br>");
document.write("Thể loại sách: "+typeofbook+"<br>");
document.write("Tình trạng sách: ")
switch (typeofbooklower) {
    case "khoa học":
        if(bookstatelower === "có sẵn"){
            document.write("Sách có sẵn trong thư viện")
        }else {
            document.write("Sách đã được mượn")
        }
        break;
    case "lịch sử":
        if(bookstatelower === "có sẵn"){
            document.write("Sách có sẵn trong thư viện")
        }else {
            document.write("Sách đã được mượn")
        }
        break;
    case "văn học":
        document.write("Sách này có thể đọc giải trí");
        break;
    case "truyện":
        document.write("Sách này có thể đọc giải trí");
        break;
    default:
        break;
}