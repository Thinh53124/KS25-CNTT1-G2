let bookReturns;
do {
    bookReturns = +prompt("Hôm nay có bao nhiêu lượt trả sách?");
    if (bookReturns < 1 || isNaN(bookReturns)) {
      alert("Số ngày không hợp lệ, vui lòng nhập lại!");
    }
  } while (bookReturns < 1 || isNaN(bookReturns));
let count = 0;
let warningCount = 0;

for (let i = 0; i < bookReturns; i++) {
  let returner = prompt("Nhập tên người trả");
  let bookName = prompt("Nhập tên sách");

  let borrowDays;

  do {
    borrowDays = +prompt("Nhập số ngày mượn (>= 1)");
    if (borrowDays < 1 || isNaN(borrowDays)) {
      alert("Số ngày không hợp lệ, vui lòng nhập lại!");
    }
  } while (borrowDays < 1 || isNaN(borrowDays));

  console.log("Người trả: ", returner);
  console.log("Tên sách: ", bookName);

  if (borrowDays <= 14) {
    console.log("Trả đúng hạn");
  } else if (borrowDays >= 15 && borrowDays <= 21) {
    console.log("Trả muộn nhẹ - Phạt nhắc nhở");
    warningCount++;
  } else {
    console.log("Quá hạn nghiêm trọng - Cần ghi biên bản phạt");
    warningCount++;
  }

  count++;
}

console.log("===== THỐNG KÊ TRONG NGÀY =====");
console.log("Tổng số lượt trả:", count);
console.log("Số lượt trả muộn (>= 15 ngày):", warningCount);
