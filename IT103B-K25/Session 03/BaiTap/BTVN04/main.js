let bookCodes = [];
let codeCount = 0; 

let totalBooks = 0;
let lostBooks = 0;
let outOfStockBooks = 0;
let manyStockBooks = 0;
let normalStockBooks = 0;

while (true) {
  let continueCheck = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");
  if (continueCheck === null) break;

  continueCheck = continueCheck.toLowerCase().trim();

  if (continueCheck === "không") {
    console.log("Thủ thư đã kết thúc phiên kiểm kê.");
    break;
  }

  if (continueCheck === "có") {

    let bookCode;
    let isDuplicate;

    do {
      isDuplicate = false;
      bookCode = prompt("Nhập mã sách (không trống, không trùng)");

      if (!bookCode) {
        alert("Mã sách không được để trống!");
        continue;
      }

      for (let i = 0; i < codeCount; i++) {
        if (bookCodes[i] === bookCode) {
          isDuplicate = true;
          alert("Mã sách đã tồn tại, vui lòng nhập mã khác!");
          break;
        }
      }
    } while (!bookCode || isDuplicate);

    bookCodes[codeCount] = bookCode;
    codeCount++;

    let bookName = prompt("Nhập tên sách");

    let quantity;
    do {
      quantity = +prompt("Nhập số lượng thực tế trong kho (≥ 0)");
    } while (quantity < 0 || isNaN(quantity));

    let status;
    do {
      status = +prompt(
        "Nhập tình trạng sách:\n1 - Bình thường\n2 - Mất"
      );
    } while (status !== 1 && status !== 2);

    totalBooks++;

    console.log("----- KIỂM KÊ SÁCH -----");
    console.log("Mã sách:", bookCode);
    console.log("Tên sách:", bookName);
    console.log("Số lượng:", quantity);
    console.log("Tình trạng:", status === 1 ? "Bình thường" : "Mất");

    if (status === 2) {
      console.log("Phân loại: SÁCH MẤT");
      lostBooks++;
    } else if (quantity === 0) {
      console.log("Phân loại: SÁCH HẾT HÀNG");
      outOfStockBooks++;
    } else if (quantity >= 10) {
      console.log("Phân loại: SÁCH TỒN KHO NHIỀU");
      manyStockBooks++;
    } else {
      console.log("Phân loại: SÁCH TỒN KHO BÌNH THƯỜNG");
      normalStockBooks++;
    }

    console.log("-------------------------");
  } else {
    alert("Vui lòng nhập 'có' hoặc 'không'");
  }
}

console.log("===== BÁO CÁO KIỂM KÊ KHO =====");
console.log("Tổng số sách đã kiểm kê:", totalBooks);
console.log("Số sách mất:", lostBooks);
console.log("Số sách hết hàng:", outOfStockBooks);
console.log("================================");
