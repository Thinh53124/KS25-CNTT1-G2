let namebook = prompt("Nhập tên sách: ");
let author = prompt("Nhập tên tác giả: ");
let year = prompt("Năm xuất bản: ");
let present = Date.now().getFullYear();
let price = prompt("Giá tiền một cuốn:");
let quantity = prompt("Số lượng nhập kho:");
let numyear = Number(year);
let numquantity = Number(quantity);
let trimnamebook = namebook.trim();
let trimnamebookupper = trimnamebook.toUpperCase();
let authorupper = author.toUpperCase();
let randomid = Math.floor(Math.random() * 1000)+1;
let Bookid = authorupper.slice(0,3) + year + " - " + randomid;
let ageofbook = present - numyear;
let numprice = parseFloat(price);
let qualitystorage = numprice * numquantity;
let rcmdrandom = Math.floor(Math.random() * 10)+1;
console.log("--Phiếu Nhập Kho----");
console.log("Mã sách: " + Bookid);
console.log("tên sách: " + trimnamebookupper);
console.log("Tác giả:" + authorupper);
console.log("Năm xuất bản " + year);
console.log("Tuổi của sách: " + ageofbook);
console.log("Tổng Giá trị:" + qualitystorage + "VND");
console.log("Ngăn kệ gợi ý:" + rcmdrandom);


