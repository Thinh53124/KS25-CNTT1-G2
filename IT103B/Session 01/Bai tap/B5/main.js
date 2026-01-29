let bookName = prompt("Nhập tên sách: ")
let publishYear = Number(prompt("Nhập năm xuất bản: "))
let currentYear = Number(prompt("Nhập năm hiện tại: "))
let bookAge = currentYear - publishYear
document.write("Sách: " + bookName + "<br>")
document.write("Năm xuất bản: " + publishYear + "<br>")
document.write("Tuổi của sách: " + bookAge + " năm")
