let bookCount = Number(prompt("Nhập số lượng sách trong thư viện:"));

if (bookCount < 10) {
    console.log("Thư viện có ít sách");
} else if (bookCount >= 10 && bookCount <= 20) {
    console.log("Thư viện có số lượng sách vừa đủ");
} else {
    console.log("Thư viện có nhiều sách");
}
