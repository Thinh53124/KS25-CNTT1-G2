let bookName = prompt("Nhập tên sách");
let bookType = prompt("Nhập thể loại sách");
let bookStatus = prompt("Nhập tình trạng sách");

console.log("Tên sách: " + bookName);
console.log("Thể loại sách: " + bookType);


if (bookType == "Khoa học" || bookType == "Lịch sử") {
    if (bookStatus == "còn") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (bookType == "Văn học" || bookType == "Truyện") {
    console.log("Sách này có thể đọc giải trí");
} else {
    console.log("Không tìm thấy thể loại này!!");
}