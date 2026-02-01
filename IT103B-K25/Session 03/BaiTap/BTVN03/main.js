let successCount = 0;
let failCount = 0;

while (true) {
  let hasRequest = prompt("Có yêu cầu gia hạn mới không? (có/không)");

  if (hasRequest === null) break;

  hasRequest = hasRequest.toLowerCase().trim();

  if (hasRequest === "không") {
    console.log("Thủ thư đã chọn dừng chương trình.");
    break;
  }

  if (hasRequest === "có") {
    let readerName = prompt("Nhập tên bạn đọc");
    let bookName = prompt("Nhập tên sách");

    let borrowedDays;
    do {
      borrowedDays = +prompt("Nhập số ngày đã mượn hiện tại (≥ 1)");
    } while (borrowedDays < 1 || isNaN(borrowedDays));

    let extendDays;
    do {
      extendDays = +prompt("Nhập số ngày muốn gia hạn thêm (≥ 1)");
    } while (extendDays < 1 || isNaN(extendDays));

    let totalDays = borrowedDays + extendDays;

    console.log("----- YÊU CẦU GIA HẠN -----");
    console.log("Bạn đọc:", readerName);
    console.log("Sách:", bookName);
    console.log("Đã mượn:", borrowedDays, "ngày");
    console.log("Gia hạn thêm:", extendDays, "ngày");
    console.log("Tổng thời gian:", totalDays, "ngày");

    if (totalDays > 60) {
      alert("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
      console.log("Kết quả: KHÔNG ĐƯỢC GIA HẠN (vượt quá 60 ngày)");
      failCount++;
    } else if (borrowedDays > 45) {
      alert("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
      console.log("Kết quả: KHÔNG ĐƯỢC GIA HẠN (mượn quá 45 ngày)");
      failCount++;
    } else {
      alert("Gia hạn thành công");
      console.log("Kết quả: GIA HẠN THÀNH CÔNG");
      successCount++;
    }

    console.log("---------------------------");
  } else {
    alert("Vui lòng nhập 'có' hoặc 'không'");
    console.log("Nhập không hợp lệ:", hasRequest);
  }
}

console.log("===== KẾT THÚC CA LÀM VIỆC =====");
console.log("Số lần gia hạn thành công:", successCount);
console.log("Số lần gia hạn không thành công:", failCount);
console.log("================================");
