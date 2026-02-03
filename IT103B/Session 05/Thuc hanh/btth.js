let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice = "";

while (choice !== "0") {
  choice = prompt(
    "--- THƯ VIỆN KHOA HỌC ---\n" +
      "1. Xem danh sách\n" +
      "2. Nhập sách mới\n" +
      "3. Mượn sách (Xóa)\n" +
      "4. Sửa tên sách\n" +
      "5. Sắp xếp kệ\n" +
      "0. Thoát\n\n" +
      "Bạn chọn:",
  );

  switch (choice) {
    case "1":
      console.log(`=> Danh sách hiện tại (${books.length} cuốn):`);
      for (let i = 0; i < books.length; i++) {
        console.log(`${i + 1}. ${books[i]}`);
      }
      break;

    case "2":
      let newBook = "";
      while (!newBook || newBook.trim() === "") {
        newBook = prompt("Nhập tên cuốn sách mới:");
      }
      books.push(newBook);
      console.log("=> Đã thêm thành công!");
      break;

    case "3":
      let borrowName = prompt("Nhập tên cuốn sách muốn mượn:");
      let borrowIndex = books.indexOf(borrowName);
      if (borrowIndex !== -1) {
        books.splice(borrowIndex, 1);
        console.log(`=> Đã cho mượn cuốn '${borrowName}'.`);
      } else {
        console.log(`=> Lỗi: Không tìm thấy sách ${borrowName}!`);
      }
      break;

    case "4":
      let oldName = prompt("Nhập tên sách cũ cần sửa:");
      let updateIndex = books.indexOf(oldName);
      if (updateIndex !== -1) {
        let updatedName = "";
        while (!updatedName || updatedName.trim() === "") {
          updatedName = prompt("Nhập tên mới:");
        }
        books[updateIndex] = updatedName;
        console.log("=> Cập nhật thành công!");
      } else {
        console.log(`=> Lỗi: Không tìm thấy sách ${oldName}!`);
      }
      break;

    case "5":
      books.sort();
      console.log("=> Danh sách sau khi sắp xếp:");
      for (let i = 0; i < books.length; i++) {
        console.log(`${i + 1}. ${books[i]}`);
      }
      break;

    case "0":
      console.log("=> Cảm ơn bạn đã sử dụng hệ thống!");
      break;

    default:
      alert("Lựa chọn không hợp lệ, vui lòng chọn lại (0-5).");
      break;
  }
}
