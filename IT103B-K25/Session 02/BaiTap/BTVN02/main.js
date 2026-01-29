let bookQuantity = Number(prompt("Nhập số lượng sách"))

if(bookQuantity < 10){
    document.writeln("Thư viện có ít sách")
} else if(bookQuantity < 20){
    document.writeln("Thư viện có số lượng sách vừa đủ")
} else {
    document.writeln("Thư viện có nhiều sách")
}