let bookName = prompt("Mời nhập tên sách: ").trim().toUpperCase();//tên sách
let bookAuthor = prompt("Mời nhập tên tác giả: ").trim().toUpperCase();//tên tác giả
let yearPublic = Number(prompt("Nhập năm xuất bản: "));//năm
let price = parseFloat(prompt("Nhập giá sách: "));//giá tiền
let bookQuantity = +prompt("Nhập số lượng sách: ");// số lượng
let yearNow = new Date().getFullYear;


let bookId=bookAuthor.slice(0,3) + yearPublic +"-"+ Math.floor(Math.random()*1000+1);
let bookOld = yearNow - yearPublic;
let money = price * bookQuantity;

console.log("--PHIẾU NHẬP KHO--");
console.log("Mã sách: " + bookId);
console.log("Tên sách: " + bookName);
console.log("Tác giả: " + bookAuthor);
console.log("Năm xuất bản: " + yearPublic);
console.log("Tuổi sách: " + bookOld);
console.log("Tổng giá trị: " + money + " VNĐ");
console.log("Ngăn kệ gợi ý: Kệ số " + Math.floor(Math.random()*10));

