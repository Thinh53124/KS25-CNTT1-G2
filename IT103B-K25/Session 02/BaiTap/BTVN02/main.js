let bookQuantity = Number(prompt("Nhập số lượng sách"))

if(bookQuantity < 10){
    document.write("Thư viện có ít sách")
} else if(bookQuantity < 20){
    document.write("Thư viện có số lượng sách vừa đủ")
} else {
    document.write("Thư viện có nhiều sách")
}