let totalRequests = 0;
let successRequests = 0;
let rejectedRequests = 0;
let pendingRequests = 0;

while (true) {
  let hasRequest = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

  if (hasRequest === null) break;

  hasRequest = hasRequest.toLowerCase().trim();

  if (hasRequest === "không") {
    console.log("Thủ thư đã kết thúc ca làm việc.");
    break;
  }

  if (hasRequest === "có") {
    let readerName = prompt("Nhập tên bạn đọc");
    let bookCode = prompt("Nhập mã sách muốn đặt trước");
    let bookName = prompt("Nhập tên sách (tham khảo)");

    let waitDays;
    do {
      waitDays = +prompt("Nhập số ngày dự kiến chờ (≥ 1)");
    } while (waitDays < 1 || isNaN(waitDays));

    let priority;
    do {
      priority = +prompt(
        "Nhập mức ưu tiên:\n1 - Sinh viên bình thường\n2 - Giảng viên/Nghiên cứu sinh\n3 - Nhân viên thư viện / Đặc cách"
      );
    } while (priority !== 1 && priority !== 2 && priority !== 3);

    totalRequests++;

    console.log("----- YÊU CẦU ĐẶT MƯỢN -----");
    console.log("Bạn đọc:", readerName);
    console.log("Mã sách:", bookCode);
    console.log("Tên sách:", bookName);
    console.log("Số ngày chờ:", waitDays);
    console.log("Ưu tiên:", priority);

    if (waitDays > 45) {
      console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
      rejectedRequests++;
    } else if (priority === 3) {
      console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
      successRequests++;
    } else if (priority === 2 && waitDays <= 30) {
      console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
      successRequests++;
    } else if (priority === 1 && waitDays <= 21) {
      console.log("Đặt trước thành công");
      successRequests++;
    } else {
      console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
      pendingRequests++;
    }

    console.log("----------------------------");
  } else {
    alert("Vui lòng nhập 'có' hoặc 'không'");
  }
}

console.log("===== BÁO CÁO XỬ LÝ ĐẶT MƯỢN =====");
console.log("Tổng số yêu cầu đã xử lý:", totalRequests);
console.log("Số yêu cầu đặt trước thành công:", successRequests);
console.log("Số yêu cầu bị từ chối:", rejectedRequests);
console.log("Số yêu cầu chờ xét duyệt:", pendingRequests);
console.log("=================================");
