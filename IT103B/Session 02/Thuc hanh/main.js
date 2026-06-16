let userName = prompt("Nhập tên người dùng: ").trim();
let role = prompt("Nhập một trong các role: admin, student, guest:").trim();
let balance = prompt("Nhập số dư tài khoản: ").trim();
let cardStatus = prompt("Nhập trạng thái thẻ: ").trim();
let overdueDay = prompt("Nhập số ngày quá hạn trả sách: ").trim();

switch (role) {
  case "admin":
    console.log("Chào Admin, bạn có toàn quyền hệ thống");
    break;
  case "student":
    console.log("Chào sinh viên, bạn có thể mượn sách");
    break;
  case "guest":
    console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
    break;
  default:
    console.log("Lỗi: Vai trò không hợp lệ!");
    break;
}

let check =
  userName != null &&
  (role == "admin" || role == "student") &&
  balance > 0 &&
  cardStatus == "true";
if (check) {
  console.log("Được phép mượn sách");
} else {
  console.log("YÊU CẦU BỊ TỪ CHỐI");
}

if (overdueDay == "0") {
  console.log("Cảm ơn bạn đã trả đúng hạn");
} else if (overdueDay >= 1 && overdueDay <= 5) {
  console.log(balance - overdueDay * 5000);
} else if (overdueDay >= 6 && overdueDay <= 10) {
  console.log(balance - overdueDay * 10000);
} else {
  console.log(balance - 200000 + "TÀI KHOẢN BỊ KHÓA");
}

let borrowBook = prompt("Bạn có muốn mượn sách không? ").trim().toLowerCase;
if (borrowBook == "có") {
  document.write("--- HỆ THỐNG MƯỢN TRẢ ---" + "<br>");

  let check =
    userName &&
    userName.trim() !== "" &&
    (role == "admin" || role == "student") &&
    balance > 0 &&
    cardStatus == "true";
  if (check) {
    console.log("Được phép mượn sách" + "<br>");
    document.write("Người dùng: " + userName + "<br>");
    if (role == "admin") {
      document.write(
        "Quyền hạn: " + "Chào admin, bạn có thể mượn sách" + "<br>",
      );
    } else if (role == "student") {
      document.write(
        "Quyền hạn: " + "Chào sinh viên, bạn có thể mượn sách" + "<br>",
      );
    } else if (role == "guest") {
      document.write(
        "Quyền hạn: " + "Chào guest, bạn chỉ được phép đọc tại chỗ" + "<br>",
      );
    } else {
      document.write("Lỗi: Vai trò không hợp lệ!" + "<br>");
    }

    if (role == "admin" || role == "student") {
      document.write("Kết quả mượn: ĐƯỢC PHÉP MƯỢN SÁCH" + "<br>");
    } else if (role == "guest") {
      document.write("Kết quả mượn: KHÔNG PHÉP MƯỢN SÁCH" + "<br>");
    } else {
      document.write("Lỗi: Vai trò không thể mượn sách!" + "<br>");
    }

    if (overdueDay == "0") {
      document.write("Tình trạng trả sách: " + overdueDay + "<br>");
    } else {
      document.write("Tình trạng trả sách: " + "Quá hạn" + overdueDay + "<br>");
    }

    if (overdueDay == "0") {
      document.write("Tiền phạt: " + "0VNĐ" + "<br>");
    } else if (overdueDay >= 1 && overdueDay <= 5) {
      document.write("Tiền phạt: " + overdueDay * 5000 + "VNĐ" + "<br>");
    } else if (overdueDay >= 6 && overdueDay <= 10) {
      document.write("Tiền phạt: " + overdueDay * 10000 + "VNĐ" + "<br>");
    } else {
      document.write("Tiền phạt: 200000VNĐ" + "<br>");
    }
  } else {
    document.write("YÊU CẦU BỊ TỪ CHỐI");
  }
} else {
  document.write("Bạn đã chọn không mượn sách!");
}
