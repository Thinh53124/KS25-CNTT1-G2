let totalFeedback = 0;

let seriousComplaints = 0;   
let mediumComplaints = 0;    
let lightComplaints = 0;     
let suggestions = 0;         
let positiveFeedback = 0;    

while (true) {
  let hasFeedback = prompt(
    "Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)"
  );

  if (hasFeedback === null) break;

  hasFeedback = hasFeedback.toLowerCase().trim();

  if (hasFeedback === "không") {
    console.log("Nhân viên đã kết thúc ca làm việc.");
    break;
  }

  if (hasFeedback === "có") {

    let readerName;
    do {
      readerName = prompt("Nhập tên bạn đọc (không được để trống)");
    } while (!readerName);

    let readerCard = prompt("Nhập mã thẻ bạn đọc (có thể để trống)");

    let feedbackType;
    do {
      feedbackType = +prompt(
        "Nhập loại phản hồi:\n" +
        "1 - Phàn nàn / Khiếu nại\n" +
        "2 - Đề xuất cải thiện\n" +
        "3 - Phản hồi tích cực / Khen ngợi"
      );
    } while (feedbackType !== 1 && feedbackType !== 2 && feedbackType !== 3);

    let severity = 0;
    if (feedbackType === 1) {
      do {
        severity = +prompt(
          "Nhập mức độ nghiêm trọng:\n" +
          "1 - Nhẹ\n" +
          "2 - Trung bình\n" +
          "3 - Nghiêm trọng"
        );
      } while (severity !== 1 && severity !== 2 && severity !== 3);
    }

    let content = prompt("Nhập nội dung ngắn gọn (tham khảo)");

    totalFeedback++;

    console.log("----- PHẢN HỒI / KHIẾU NẠI -----");
    console.log("Bạn đọc:", readerName);
    console.log("Mã thẻ:", readerCard || "Không cung cấp");
    console.log("Loại:", feedbackType);
    console.log("Mức độ:", severity || "Không áp dụng");
    console.log("Nội dung:", content);

    if (feedbackType === 1 && severity === 3) {
      console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
      seriousComplaints++;
    } else if (feedbackType === 1 && severity === 2) {
      console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
      mediumComplaints++;
    } else if (feedbackType === 1 && severity === 1) {
      console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
      lightComplaints++;
    } else if (feedbackType === 2) {
      console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
      suggestions++;
    } else if (feedbackType === 3) {
      console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
      positiveFeedback++;
    }

    console.log("--------------------------------");
  } else {
    alert("Vui lòng nhập 'có' hoặc 'không'");
  }
}

console.log("===== BÁO CÁO PHẢN HỒI BẠN ĐỌC =====");
console.log("Tổng số phản hồi/khiếu nại:", totalFeedback);
console.log("Khiếu nại nghiêm trọng (mức 3):", seriousComplaints);
console.log("Khiếu nại trung bình (mức 2):", mediumComplaints);
console.log("Khiếu nại nhẹ (mức 1):", lightComplaints);
console.log("Số đề xuất cải thiện:", suggestions);
console.log("Số phản hồi tích cực:", positiveFeedback);
console.log("===================================");
