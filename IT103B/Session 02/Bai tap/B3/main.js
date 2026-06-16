let bookName = prompt("Nhập tên sách:");
let category = prompt("Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện):");
let status = prompt("Nhập tình trạng sách (có sẵn / đã mượn):");

if (category === "Khoa học" || category === "Lịch sử") {
    if (status === "có sẵn") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (category === "Văn học" || category === "Truyện") {
    console.log("Sách này có thể đọc giải trí");
}
