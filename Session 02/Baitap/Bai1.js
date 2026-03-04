let namebook = prompt("Nhập tên sách:");
let author = prompt("Nhập tên tác giả:");
let year = prompt("Nhập năm xuất bản:");
let numyear = Number(year);
document.write("thông tin sách" + "<br>");
document.write("Tên sách: " +namebook + "<br>");
document.write("Tên tác giả: "+author+"<br>");
if (numyear === 2026){
    document.write("Đây là sách mới!");
}else if(2026 - numyear <= 5){
    document.write("Đây là sách khá mới!");
}else {
    document.write("Đây là sách cũ!");
}