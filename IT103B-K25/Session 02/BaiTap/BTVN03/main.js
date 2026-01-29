let tenSach = prompt("Nhập tên sách:");
let theLoai = prompt("Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện):");
let tinhTrang = prompt("Nhập tình trạng sách (có sẵn / đã mượn):");

theLoai = theLoai.toLowerCase();
tinhTrang = tinhTrang.toLowerCase();

if (theLoai === "khoa học" || theLoai === "lịch sử") {
    if (tinhTrang === "có sẵn") {
        document.write("Sách này có sẵn trong thư viện");
    } else {
        document.write("Sách đã được mượn");
    }
} else if (theLoai === "văn học" || theLoai === "truyện") {
    document.write("Sách này có thể đọc giải trí");
} else {
    document.write("Thể loại sách không được hỗ trợ");
}
