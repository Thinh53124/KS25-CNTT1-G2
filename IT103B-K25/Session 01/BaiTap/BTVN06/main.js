let bookName=prompt("Nhập tên sách: ")
let bookOrdinal = Number(prompt("Nhập số thứ tự của sách: "))
document.write("Tên sách gốc: " + bookName + "<br>")
document.write("Mã sách sau chuẩn hóa: LIB - " + bookName.toUpperCase().trim() + " - " + bookOrdinal)