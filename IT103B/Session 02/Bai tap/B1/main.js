let bookName = prompt("Nhập tên sách:");
let author = prompt("Nhập tên tác giả:");
let publishYear = Number(prompt("Nhập năm xuất bản của sách:"));

let currentYear = new Date().getFullYear();

console.log("Tên sách: " + bookName);
console.log("Tác giả: " + author);
console.log("Năm xuất bản: " + publishYear);

if (publishYear === currentYear) {
    console.log("Đây là sách mới!");
} else if (currentYear - publishYear <= 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}
