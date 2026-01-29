let bookName = prompt("Mời nhập tên sách: ").trim().toUpperCase();
let bookAuthor = prompt("Mời nhập tên tác giả: ");
let year = prompt("Mời nhập năm xuất bản: ");
let bookId =
  bookAuthor.slice(0.3) + year + (Math.floor(Math.random() * 1000) + 1);
console.log("BookId", bookId);
let price = parseFloat(prompt("Nhập giá sách: "));
let quantity = prompt("Nhập số lượng sách: ");
let bookAge = Date.now.year();
let total = price*quantity;