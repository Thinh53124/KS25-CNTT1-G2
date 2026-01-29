let bookName = prompt("Nhập tên sách:");
let bookType = prompt("Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện):");
let bookStatus = prompt("Nhập tình trạng sách (có sẵn / đã mượn):");

bookType = bookType.toLowerCase().trim();
bookStatus = bookStatus.toLowerCase().trim();

if (bookType === "khoa học" || bookType === "lịch sử") {
    if (bookStatus === "có sẵn") {
        document.write("Sách này có sẵn trong thư viện");
    } else {
        document.write("Sách đã được mượn");
    }
} else if (bookType === "văn học" || bookType === "truyện") {
    document.write("Sách này có thể đọc giải trí");
} else {
    document.write("Thể loại sách không được hỗ trợ");
}
