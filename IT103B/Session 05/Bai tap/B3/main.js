let booksId = [];
let booksName = [];
let inventoryQuantity = [];
let count = 0;
let outOfStock = [];

let question = Number(
  prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"),
);

while (isNaN(question) || question <= 0) {
  question = Number(prompt("Vui lòng nhập số nguyên dương!"));
}

for (let i = 0; i < question; i++) {
  let code = "";
  while (code.trim() === "") {
    code = prompt("Nhập mã sách thứ " + (i + 1) + ":");
  }
  booksId.push(code.trim());

  let name = "";
  while (name.trim() === "") {
    name = prompt("Nhập tên sách thứ " + (i + 1) + ":");
  }
  booksName.push(name.trim());

  let quantity = Number(prompt("Nhập số lượng tồn kho:"));
  while (isNaN(quantity) || quantity < 0) {
    quantity = Number(prompt("Số lượng phải là số >= 0. Nhập lại:"));
  }
  inventoryQuantity.push(quantity);

  if (quantity <= 5) {
    count++;
  }
}

document.writeln("Danh sách cần xem xét bổ sung:", question, "loại");

for (let i = 0; i < question; i++) {
  document.writeln(
    i +
      1 +
      ". Mã: " +
      booksId[i] +
      " - Tên: " +
      booksName[i] +
      " - Còn: " +
      inventoryQuantity[i] +
      " bản",
  );
}

document.writeln("Số sách tồn kho <= 5 bản:", count);

for (let i = 0; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] === 0) {
    outOfStock.push(booksId[i]);
  }
}

if (outOfStock.length > 0) {
  document.writeln("Các mã sách hết hàng là:", outOfStock.join(", "));
} else {
  document.writeln("Không có sách nào hết hàng.");
}
