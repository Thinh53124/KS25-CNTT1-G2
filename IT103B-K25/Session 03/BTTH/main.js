
let correctPassword = "admin123";
let loginCount = 0;
let isLoginSuccess = false;

while (loginCount < 3) {
  let password = prompt("Nhập mật khẩu:");

  if (password === correctPassword) {
    console.log("Đăng nhập thành công");
    isLoginSuccess = true;
    break;
  } else {
    loginCount++;
    console.log("Sai mật khẩu! Lần thử:", loginCount);
  }
}

if (!isLoginSuccess) {
  console.log("Hệ thống bị khóa");
} else {


  while (true) {
    let choice = prompt(
      "===== MENU =====\n" +
      "1. Nhập lô sách mới\n" +
      "2. Vẽ sơ đồ kệ sách\n" +
      "3. Thoát\n" +
      "Nhập lựa chọn (1-3):"
    );

    if (choice === "1") {

      let n = +prompt("Bạn muốn nhập bao nhiêu cuốn sách?");
      let totalPrice = 0;

      for (let i = 1; i <= n; i++) {
        let price = +prompt("Nhập giá tiền cuốn sách thứ " + i);

        if (price <= 0 || isNaN(price)) {
          console.log("Giá không hợp lệ, bỏ qua cuốn sách này");
          continue;
        }

        totalPrice += price;
      }

      console.log("Tổng giá trị nhập kho đợt này là:", totalPrice);

    } else if (choice === "2") {

      for (let area = 1; area <= 3; area++) {
        for (let shelf = 1; shelf <= 5; shelf++) {

          if (area === 2 && shelf === 3) {
            console.log("Khu vực 2 - Kệ 3 (Đang sửa chữa)");
            continue;
          }

          console.log("Khu vực " + area + " - Kệ " + shelf);
        }
      }

    } else if (choice === "3") {
      console.log("Hẹn gặp lại!");
      break;

    } else {
      console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
  }
}
