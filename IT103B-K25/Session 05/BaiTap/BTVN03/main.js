let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let needCheckBooks;

do {
  needCheckBooks = +prompt(
    "Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?",
  );
  if (needCheckBooks < 1 || isNaN(needCheckBooks)) {
    alert("Số loại sách không hợp lệ, vui lòng nhập lại!!!");
  }
} while (needCheckBooks < 1 || isNaN(needCheckBooks));

for (let i = 0; i < needCheckBooks; i++) {
  let bookID;
  do {
    bookID = prompt("Nhập mã sách: ");
    if (!bookID) {
      alert("Mã sách không được để trống!");
    }
  } while (!bookID);
  booksId.push(bookID.toUpperCase().trim());
  let bookName;
  do {
    bookName = prompt("Nhập tên sách:");
    if (!bookName) {
      alert("Tên sách không được để trống!");
    }
  } while (!bookName);
  booksName.push(bookName);
  let quantity;
  let quantityInput;

  do {
    quantityInput = prompt(
      "Nhập số lượng tồn kho của sách thứ " + (i + 1) + ":",
    );

    if (
      quantityInput === "" ||
      isNaN(quantityInput) ||
      Number(quantityInput) < 0
    ) {
      alert("Số lượng tồn kho phải là số nguyên >= 0 và không được để trống!");
    }
  } while (
    quantityInput === "" ||
    isNaN(quantityInput) ||
    Number(quantityInput) < 0
  );

  quantity = Number(quantityInput);
  inventoryQuantity.push(quantity);
}

console.log(
  "Danh sách sách cần xem xét bổ sung " + "(" + booksId.length + " loại:)",
);
for (let i = 0; i < booksName.length; i++) {
  console.log(
    i +
      1 +
      ". " +
      "Mã: " +
      booksId[i] +
      " - " +
      "Tên: " +
      booksName[i] +
      " - " +
      "Còn: " +
      inventoryQuantity[i],
  );
}
let lowStockCount = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] <= 5) {
    lowStockCount++;
  }
}
console.log("Số sách có tồn kho <= 5 bản: " + lowStockCount + " loại");

console.log("Danh sách mã sách đã hết hàng:");
let hasOutOfStock = false;

for (let i = 0; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] === 0) {
    console.log("- " + booksId[i]);
    hasOutOfStock = true;
  }
}

if (!hasOutOfStock) {
  console.log("Không có sách nào hết hàng.");
}
