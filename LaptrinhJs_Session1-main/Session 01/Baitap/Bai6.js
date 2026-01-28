let namebook = prompt("Nhập tên của sách: ");
let countbook = prompt("Số thứ của sách trong thư viện: ");
let trimnamebook = namebook.trim();
let trimnamebookupper = trimnamebook.toUpperCase();
let bookafter = "LIB"+ "-" + trimnamebookupper + "-"+ countbook
console.log("tên sách ban đầu :" + namebook);
console.log("Mã sách sau chuẩn hóa:" + bookafter);