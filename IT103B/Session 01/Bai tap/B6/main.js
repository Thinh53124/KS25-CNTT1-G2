let bookName = prompt("Nhập tên sách:")
let bookOrdinal = Number(prompt("Nhập số thứ tự của sách: "))

let originalName = bookName
let normalizedName = bookName.trim().toUpperCase()

document.write("Tên sách gốc: " + originalName + "<br>")
document.write("Mã sách sau chuẩn hóa: LIB - " + normalizedName + " - " + bookOrdinal)
