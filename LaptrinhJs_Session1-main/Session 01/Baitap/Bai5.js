let namebook = prompt("Nhập tên sách:");
let yearbook = prompt("Nhập năm xuất bản:");
let thisyear = prompt("Nhập năm hiện tại:")
let numbook = Number(yearbook);
let numthisyear = Number(thisyear);
let ageofbook = numthisyear - numbook;
console.log("Tên của cuốn sách: " + namebook);
console.log("Năm xuất bản: " + yearbook);
console.log("Tuổi của sách: "+ageofbook);
