let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];
let n;

while (true) {
  n = Number(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));

  if (isNaN(n) || n <= 0) {
    alert("Vui lòng nhập số nguyên dương!");
  } else {
    break;
  }
}

for (let i = 0; i < n; i++) {
  let id = "";
  let idRegex = /^[A-Z0-9]+$/;

  while (true) {
    id = prompt("Nhập mã sách thứ " + (i + 1) + ":").trim();

    if (id === "") {
      alert("Mã sách không được để trống!");
    } else if (!idRegex.test(id)) {
      alert("Mã sách chỉ được chứa chữ IN HOA và số, không có ký tự đặc biệt!");
    } else if (booksId.includes(id)) {
      alert("Mã sách đã tồn tại, nhập lại!");
    } else {
      break;
    }
  }

  booksId.push(id);

  let name = "";
  while (name === "") {
    name = prompt("Nhập tên sách thứ " + (i + 1) + ":").trim();
    if (name === "") {
      alert("Tên sách không được để trống!");
    }
  }
  booksName.push(name);

  let category = "";
  while (category === "") {
    category = prompt(
      "Nhập các thể loại của sách thứ " +
        (i + 1) +
        " (cách nhau bởi dấu phẩy):",
    ).trim();
    if (category === "") {
      alert("Thể loại không được để trống!");
    }
  }
  booksCategory.push(category);

  let qty;
  while (true) {
    qty = Number(prompt("Nhập số lượng tồn kho của sách thứ " + (i + 1) + ":"));
    if (!isNaN(qty) && qty >= 0) {
      break;
    }
    alert("Số lượng tồn kho phải là số nguyên >= 0!");
  }
  inventoryQuantity.push(qty);
}

console.log("--- KẾT QUẢ PHÂN TÍCH DỮ LIỆU ---");

let programmingCount = 0;
for (let i = 0; i < booksCategory.length; i++) {
  if (booksCategory[i].toLowerCase().includes("lập trình")) {
    programmingCount++;
  }
}
console.log("Tổng số sách thuộc thể loại 'Lập trình': " + programmingCount);

console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");

let found = false;
for (let i = 0; i < booksCategory.length; i++) {
  let cat = booksCategory[i].toLowerCase();
  if (cat.includes("javascript") && cat.includes("web")) {
    console.log(booksId[i]);
    found = true;
  }
}
if (!found) {
  console.log("Không có");
}

let minIndex = 0;
for (let i = 1; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
    minIndex = i;
  }
}

console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(
  "Mã sách: " +
    booksId[minIndex] +
    ", Tên sách: " +
    booksName[minIndex] +
    ", Tồn kho: " +
    inventoryQuantity[minIndex],
);
