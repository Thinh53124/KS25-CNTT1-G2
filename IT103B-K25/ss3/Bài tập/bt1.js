let question = Number(prompt("Hôm nay có bao nhiêu lượt mượn sách: "));
let count = 1;
let userBook;
let nameBook;
let borrowDate;



do {
    userBook = prompt("Tên người mượn");
    nameBook = prompt("Tên sách");
    borrowDate = prompt("Số ngày mượn");
    count++;
    console.log("Tên người mượn:" + user);
    console.log("Tên sách: " + bookname);
    if (borrowDate > 14) {
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else {
        console.log("Mượn thành công");
    }
} while (count <= question);
console.log("Tổng số lượt mượn: " + question);