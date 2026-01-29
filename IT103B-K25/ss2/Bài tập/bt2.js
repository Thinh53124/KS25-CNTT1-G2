let quantityBook = prompt("Vui lòng nhập số lượng sách");

if(quantityBook < 10){
    console.log("Thư viện ít sách");
}else if(10 <= quantityBook <= 20 ){
    console.log("Thư viện có số lượng sách vừa đủ");
}else{
    console.log("Thư viện có nhiều sách");
}