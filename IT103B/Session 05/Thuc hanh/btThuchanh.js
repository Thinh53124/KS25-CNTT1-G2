let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

let choice;

do {
  console.log("--- THƯ VIỆN KHOA HỌC ---");
  console.log("1. Xem danh sách");
  console.log("2. Nhập sách mới");
  console.log("3. Mượn sách (Xóa)");
  console.log("4. Sửa tên sách");
  console.log("5. Sắp xếp kệ");
  console.log("0. Thoát");

  choice = prompt("Bạn chọn:");

  if (choice === "1") {
    console.log("Danh sách hiện tại (" + books.length + " cuốn):");
    for (let i = 0; i < books.length; i++) {
      console.log(i + 1 + ". " + books[i]);
    }
  } else if (choice === "2") {
    let newBook = prompt("Nhập tên sách mới:");
    if (!newBook || newBook.trim() === "") {
      alert("Tên sách không hợp lệ!");
    } else {
      books.push(newBook.trim());
      alert("Đã thêm thành công!");
    }
  } else if (choice === "3") {
    let borrowBook = prompt("Nhập tên sách muốn mượn:");
    let index = books.indexOf(borrowBook);
    if (index === -1) {
      alert("Không tìm thấy sách " + borrowBook + "!");
    } else {
      books.splice(index, 1);
      alert("Đã cho mượn cuốn '" + borrowBook + "'");
    }
  } else if (choice === "4") {
    let oldName = prompt("Nhập tên sách cần sửa:");
    let index = books.indexOf(oldName);
    if (index === -1) {
      alert("Không tìm thấy sách!");
    } else {
      let newName = prompt("Nhập tên sách mới:");
      if (!newName || newName.trim() === "") {
        alert("Tên mới không hợp lệ!");
      } else {
        books[index] = newName.trim();
        alert("Cập nhật thành công!");
      }
    }
  } else if (choice === "5") {
    books.sort();
    console.log("Danh sách sau khi sắp xếp:");
    for (let i = 0; i < books.length; i++) {
      console.log(i + 1 + ". " + books[i]);
    }
  }
} while (choice !== "0");

console.log("Hẹn gặp lại!");
