let books = [];
let username;
let password;
let failCount = 0;
let isLogin = false;

while (failCount < 3) {
  username = prompt("Nhập tài khoản:");
  password = prompt("Nhập mật khẩu:");

  if (username === "admin" && password === "12345") {
    alert("Đăng nhập thành công!");
    isLogin = true;
    break;
  } else {
    failCount++;
    alert("Sai tài khoản hoặc mật khẩu");
  }
}

if (!isLogin) {
  alert("Tài khoản đã bị khóa");
} else {
  let choice;

  do {
    choice = prompt(
      "--- MENU ---\n" +
        "1. Nhập thêm lô sách mới\n" +
        "2. Hiển thị danh sách sách\n" +
        "3. Tìm kiếm sách\n" +
        "4. Cập nhật tên sách\n" +
        "5. Đảo ngược thứ tự kệ sách\n" +
        "6. Nhập kho từ nguồn khác\n" +
        "7. Thoát\n" +
        "Nhập lựa chọn:",
    );

    switch (choice) {
      case "1":
        let input = prompt("Nhập các tên sách (cách nhau bởi dấu phẩy):");
        if (input) {
          let arr = input.split(",");
          let count = 0;

          for (let i = 0; i < arr.length; i++) {
            let name = arr[i].trim();
            if (name !== "") {
              books.push(name);
              count++;
            }
          }

          alert("Đã thêm " + count + " cuốn sách vào kho");
        }
        break;

      case "2":
        if (books.length === 0) {
          console.log("Kho sách đang trống");
        } else {
          for (let i = 0; i < books.length; i++) {
            console.log(i + 1 + ". " + books[i]);
          }
        }
        break;

      case "1":
        let quest = prompt("Nhập các tên sách (cách nhau bởi dấu phẩy):");
        if (quest) {
          let arr = quest.split(",");
          let count = 0;

          for (let i = 0; i < arr.length; i++) {
            let name = arr[i].trim();
            if (name !== "") {
              books.push(name);
              count++;
            }
          }

          alert("Đã thêm " + count + " cuốn sách vào kho");
        }
        break;

      case "4":
        let oldName = prompt("Nhập tên sách cần sửa:");
        let indexEdit = books.indexOf(oldName);
        if (indexEdit !== -1) {
          let newName = prompt("Nhập tên sách mới:");
          if (newName && newName.trim() !== "") {
            books[indexEdit] = newName.trim();
            alert("Cập nhật thành công");
          }
        } else {
          alert("Sách không tồn tại");
        }
        break;

      case "5":
        books.reverse();
        for (let i = 0; i < books.length; i++) {
          console.log(i + ". " + books[i]);
        }
        break;

      case "6":
        let branchBooks = ["Sách Kỹ Năng", "Truyện Tranh"];
        for (let i = 0; i < branchBooks.length; i++) {
          books.push(branchBooks[i]);
        }
        alert("Đã gộp kho sách thành công");
        break;

      case "7":
        alert("Hẹn gặp lại!");
        break;

      default:
        alert("Lựa chọn không hợp lệ");
    }
  } while (choice !== "7");
}
