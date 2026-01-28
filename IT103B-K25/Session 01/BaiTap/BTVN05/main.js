let d = new Date();
console.log(d.toUTCString());

let year = d.getFullYear();

let bookName = prompt("Nhập tên sách: ");
let bookYear = Number(prompt("Nhập năm xuất bản của sách: "));
let bookOld = year - bookYear;

document.write("Sách: " + bookName + "<br>");
document.write("Năm xuất bản: " + bookYear + "<br>");
document.write("Tuổi của sách: " + bookOld + "<br>");
