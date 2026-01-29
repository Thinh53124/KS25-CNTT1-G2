let bookname = prompt("Nhập tên sách:");
let user = prompt("tên người mượn:");
let likerarity = prompt("Nhập mức độ yêu thích từ 1-5(từ thấp đến lớn):");
let numlikerarity = Number(likerarity);
document.write("thông tin mượn sách"+"<br>");
document.write("tên sách:" + bookname +"<br>");
document.write("Người mượn:" + user +"<br>");
document.write("Mức độ yêu thích: ");
if (numlikerarity === 5|| numlikerarity === 4){ 
    document.write("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
}else if (numlikerarity === 3){
    document.write ("Sách này khá ổn, có thể mượn");
}else {
    document.write("Sách này bạn có thể cân nhắc mượn lại sau");
}
console.log(numlikerarity==5);