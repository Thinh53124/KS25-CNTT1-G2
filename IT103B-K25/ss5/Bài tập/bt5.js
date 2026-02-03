let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];
let countLapTrinh = 0;
let countJSWeb = 0;

let amount = Number(prompt(`Nhập số lượng sách`));

for (let i = 0; i < amount; i++) {
  booksId.push(prompt(`Nhập mã sách`));
  booksName.push(prompt(`Nhập tên sách`));
  booksCategory.push(prompt(`Nhập thể loại cách nhau bỏi dấu phẩy `));
  let quantity;
  do {
    quantity = Number(prompt(`Nhập số lượng tồn kho`));
    if (isNaN(quantity) || quantity < 0) alert(`Bắt buộc phải số nguyên`);
    else {
      inventoryQuantity.push(quantity);
      break;
    }
  } while (true);
}

for (let i = 0; i < amount; i++) {
  if (booksCategory[i].toLowerCase().includes(`lập trình`)) countLapTrinh++;
}
console.log(`Tổng số sách thuộc lập trình: ${countLapTrinh} `);

console.log(`Sách thuộc 2 thẻ loại JS và web`);
for (let i = 0; i < amount; i++) {
  if (
    booksCategory[i].toLowerCase().includes(`javascript`) &&
    booksCategory[i].toLowerCase().includes(`web`)
  )
    console.log(booksId[i]);
}

console.log(` Sách tồn kho thấp nhất`);
let min = 0;
for (let i = 0; i < amount; i++) {
  if (inventoryQuantity[i] < inventoryQuantity[min]) min = i;
}
console.log(`${booksId[min]} - ${booksName[min]} - ${inventoryQuantity[min]}`);
