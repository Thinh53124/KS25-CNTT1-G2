let question = +prompt("Hôm nay có bao nhiêu lượt trả sách");
let count = 1;
let bookUser;
let bookName;
let bookDate;

do {
    bookUser = prompt("Nhập tên người trả sách");
    bookName = prompt("Nhập tên sách");
    bookDate = +prompt("Nhập số ngày đã mượn thực tế");
    count++;
    console.log("Tên người trả sách" + bookUser);
    console.log("Tên sách" + bookName);
    while (bookDate < 1) {
        bookDate = Number(prompt("Số ngày đã mượn thực tế: "+ bookDate));
    }
    if (bookDate <= 14) {
        console.log("Trả đúng hạn");
    } else if (bookDate >= 15 && bookDate <= 21) {
        console.log("Trả muộn nhẹ + " + "Phạt nhắc nhở")
    } else {
        console.log("Quá hạn nghiêm trọng + " + "Cần ghi biên bản phạt")
    }
} while (count <= question);

console.log("Tổng số lượt trả sách: " + question);