let bookName = prompt("Nhập tên sách: ")
let bookAuthor = prompt("Nhập tên tác giả: ")
let bookYear = prompt("Nhập năm xuất bản: ")

let d = new Date();
console.log(d.toUTCString());

let year = d.getFullYear();

if (bookYear == year){
    document.writeln("Sách mới!!")
} else if (bookYear >= year - 5){
    document.writeln("Sách khá mới")
} else {
    document.writeln("Sách cũ")
}