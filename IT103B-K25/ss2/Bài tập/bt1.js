let bookName = prompt("Tên sách");
let bookAuthor = prompt("Tác giả");
let yearPublic = prompt("Năm xuất bản");

let yearNow = new Date().getFullYear()
let yearGap = yearNow - yearPublic;

console.log("Tên sách " + bookName);
console.log("Tác giả " + bookAuthor);
console.log("Năm xuất bản " + yearPublic);
if (yearPublic == yearNow) {
    console.log("Đây là sách mới");
} else if (yearGap <= 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}