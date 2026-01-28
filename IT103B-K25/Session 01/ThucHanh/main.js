let bookName = prompt("Mời nhập tên sách: ").trim().toUpperCase()
let bookAuthor = prompt("Mời nhập tên tác giả: ").trim().toUpperCase()
let year = Number(prompt("Nhập năm xuất bản: "))
let price = parseFloat(prompt("Nhập giá sách: "))
let bookQuantity = +prompt("Nhập số lượng sách: ")
let d= new Date()
console.log(d.toUTCString())
let currentYear = d.getFullYear()

let bookId=bookAuthor.slice(0,3) + year +"-"+ Math.floor(Math.random()*1000+1)
let bookOld = currentYear - year
let money = price * bookQuantity

document.write("--PHIẾU NHẬP KHO--" + "<br>")
document.write("Mã sách: " + bookId + "<br>")
document.write("Tên sách: " + bookName + "<br>")
document.write("Tác giả: " + bookAuthor + "<br>")
document.write("Năm xuất bản: " + year + "<br>")
document.write("Tuổi sách: "+ bookOld + "<br>")
document.write("Tổng giá trị: " + money + " VNĐ" + "<br>")
document.write("Ngăn kệ gợi ý: Kệ số " + Math.floor(Math.random()*10))


