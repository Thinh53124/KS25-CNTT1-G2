let bookBorrows;
do {
    bookBorrows = +prompt("Hôm nay có bao nhiêu lượt trả sách?");
    if (bookBorrows < 1 || isNaN(bookBorrows)) {
      alert("Số ngày không hợp lệ, vui lòng nhập lại!");
    }
  } while (bookBorrows < 1 || isNaN(bookBorrows));
let count = 0;

for (let i = 1; i <= bookBorrows; i++) {
  let borrower = prompt("Nhập tên người mượn");
  let bookName = prompt("Nhập tên sách");
  let borrowDays;

  do {
    borrowDays = +prompt("Nhập số ngày mượn (>= 1)");
    if (borrowDays < 1 || isNaN(borrowDays)) {
      alert("Số ngày không hợp lệ, vui lòng nhập lại!");
    }
  } while (borrowDays < 1 || isNaN(borrowDays));

  console.log("Người mượn: ", borrower);
  console.log("Tên sách: ", bookName);

  if (borrowDays > 14) {
    console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
  } else {
    console.log("Mượn thành công");
  }
  count++;
}

console.log("===== THỐNG KÊ TRONG NGÀY =====");
console.log("Tổng số lượt mượn:", count);
