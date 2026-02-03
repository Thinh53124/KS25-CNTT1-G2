let username;
let password;
let loginCount = 0;
let isLogin = false;

while (loginCount < 3) {
  username = prompt("Nhập username:");

  if (username !== "admin") {
    loginCount++;
    alert("Sai tên tài khoản");
  } else {
    password = prompt("Nhập password:");
    if (password !== "12345") {
      loginCount++;
      alert("Sai mật khẩu");
    } else {
      alert("Đăng nhập thành công!");
      isLogin = true;
      break;
    }
  }
}

if (!isLogin) {
  alert("Tài khoản đã bị khóa");
}

if (!isLogin) {
  alert("Bạn đã nhập sai quá 3 lần. Chương trình kết thúc!");
} else {
  let choice;
  do {
    choice = Number(
      prompt(
        "===== MENU =====\n" +
          "1. Phân loại mã số sách\n" +
          "2. Thiết kế sơ đồ kho\n" +
          "3. Dự toán phí bảo trì\n" +
          "4. Tìm mã số may mắn\n" +
          "5. Thoát\n" +
          "Nhập lựa chọn:",
      ),
    );

    if (isNaN(choice)) {
      alert("Vui lòng nhập số!");
      continue;
    }

    switch (choice) {
      case 1:
        let bookCode;
        let totalBooks = 0;
        let scienceBooks = 0;
        let artBooks = 0;

        while (true) {
          bookCode = Number(prompt("Nhập mã số sách (nhập 0 để kết thúc):"));

          if (isNaN(bookCode)) {
            alert("Vui lòng nhập số nguyên!");
            continue;
          }

          if (bookCode === 0) {
            break;
          }

          totalBooks++;

          if (bookCode % 2 === 0) {
            scienceBooks++;
          } else {
            artBooks++;
          }
        }

        alert(
          "Tổng số mã sách đã nhập: " +
            totalBooks +
            "\nSố sách khoa học: " +
            scienceBooks +
            "\nSố sách nghệ thuật: " +
            artBooks,
        );
        break;

      case 2:
        let rows = Number(prompt("Nhập số hàng:"));
        let cols = Number(prompt("Nhập số cột:"));

        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
          alert("Dữ liệu không hợp lệ!");
        } else {
          for (let i = 1; i <= rows; i++) {
            let line = "";
            for (let j = 1; j <= cols; j++) {
              if (i === j) {
                line += "[" + i + "-" + j + "](Kệ ưu tiên) ";
              } else {
                line += "[" + i + "-" + j + "] ";
              }
            }
            document.writeln(line + <br>) ;
          }
        }
        break;

      case 3:
        let quantity = Number(prompt("Nhập số lượng sách hiện tại:"));
        let cost = Number(prompt("Nhập phí bảo trì gốc cho 1 cuốn:"));
        let years = Number(prompt("Nhập số năm dự toán:"));

        if (
          isNaN(quantity) ||
          isNaN(cost) ||
          isNaN(years) ||
          quantity <= 0 ||
          cost <= 0 ||
          years <= 0
        ) {
          alert("Dữ liệu không hợp lệ!");
        } else {
          document.writeln("BẢNG DỰ TOÁN PHÍ BẢO TRÌ" + "<br>");

          for (let i = 1; i <= years; i++) {
            let totalCost = quantity * cost;
            document.writeln("Năm " + i + ": " + totalCost + " VNĐ" + "<br>");
            cost = cost * 1.1;
          }
        }
        break;

      case 4:
        let n = Number(prompt("Nhập số giới hạn N:"));

        if (isNaN(n) || n <= 0) {
          alert("Dữ liệu không hợp lệ!");
        } else {
          let count = 0;

          document.writeln("DANH SÁCH MÃ SỐ SÁCH MAY MẮN: " + "<br>");
          for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 !== 0) {
              document.writeln(i);
              count++;
            }
          }

          document.writeln("<br>" + "Tổng số mã may mắn: " + count + "<br>");
        }
        break;

      case 5:
        alert("Thoát chương trình!");
        break;

      default:
        alert("Lựa chọn không hợp lệ!");
    }
  } while (choice !== 5);
}
