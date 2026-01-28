let bookName = prompt("Xin mời nhập tên sách: ");
let yearPublic = Number(prompt("Xin hãy nhập năm xuất bản của sách"));

let ageNow = (new Date()).getFullYear();
let bookAge = ageNow - yearPublic; 

console.log("Sách " + bookName);
console.log("Năm xuất bản " + yearPublic);
console.log("Tuổi của sách: " + bookAge +" năm")
