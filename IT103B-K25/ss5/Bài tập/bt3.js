let booksId = []
let booksName = []
let inventoryQuantity = []

let question = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?(số nguyên dương)");

for(let i = 1; i<=question; i++){
    let idRequire = prompt("Nhập ID sách");
    let nameRequire = prompt("Nhập tên sách");
    let remainQuantity = +prompt("Nhập số lượng tồn kho hiện tại");


    booksId.push(idRequire);
    booksName.push(nameRequire);
    inventoryQuantity.push(remainQuantity);
}

console.log(`Danh sách sách cần xem xét bổ sung (${booksId.length} loại)`);
for(let j = 0; j<booksId.length;j++){
    console.log(`${j+1}. Mã: ${booksId[j]} - Tên: ${booksName[j]} - Còn: ${inventoryQuantity[j]} bản`);
}

console.log("--- Các sách cần nhập thêm (tồn kho <= 5 bản) ---");
let hasLowStock = false;
for (let k = 0; k < inventoryQuantity.length; k++) {
    if (inventoryQuantity[k] <= 5) {
        console.log(`Cảnh báo: Sách ${booksName[k]} (ID: ${booksId[k]}) chỉ còn ${inventoryQuantity[k]} bản.`);
        hasLowStock = true;
    }
}
if (!hasLowStock) console.log("Không có sách nào sắp hết.");

console.log("--- Các mã sách đã hết hàng (0 bản) ---");
let outOfStockIds = [];
for (let m = 0; m < inventoryQuantity.length; m++) {
    if (inventoryQuantity[m] === 0) {
        outOfStockIds.push(booksId[m]);
    }
}

if (outOfStockIds.length > 0) {
    console.log("Mã sách hết hàng: " + outOfStockIds.join(", "));
} else {
    console.log("Không có sách nào hết hàng.");
}