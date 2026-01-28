let bookName = prompt("Vui lòng nhập tên sách: ");
let ordBook = Number(prompt("Vui lòng nhập số thứ tự của sách: "));

console.log("Tên sách gốc: " + bookName);
console.log("Mã sách sau khi chuẩn hóa: " + "LIB - " + bookName.trim().toUpperCase() + "- " + ordBook)
