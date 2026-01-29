let quantityofbook = prompt("Hãy ghi số lượng sách trong thư viện:");
let numquantityofbook = Number(quantityofbook);
document.write("thông tin số lượng sách trong thư viện" +"<br>");
document.write("Số lượng sách: " + quantityofbook +"<br>");
document.write("trạng thái thư viện:" + "<br>")
if (numquantityofbook<10){
    document.write("Thư viện có ít sách");
}else if ( numquantityofbook> 10 && numquantityofbook < 20){
    document.write("thư viện có số lượng sách vừa đủ")
}else {
    document.write("Thư viện có nhiều sách")
}