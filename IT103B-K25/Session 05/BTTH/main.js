let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choose;

do {
  choose = +prompt(
    `--- THƯ VIỆN KHOA HỌC ---
1. Xem danh sách
2. Nhập sách mới
3. Mượn sách (Xóa)
4. Sửa tên sách
5. Sắp xếp kệ
0. Thoát

Bạn chọn:`,
  );

  switch (choose) {
    case 1:
      console.log(`=> Danh sách hiện tại (${books.length} cuốn):`);
      for (let i = 0; i < books.length; i++) {
        console.log(`${i + 1}. ${books[i]}`);
      }
      break;

    case 2: {
      let newBookName = prompt("Nhập tên cuốn sách mới:");
      if (newBookName && newBookName.trim() !== "") {
        books.push(newBookName);
        console.log(`=> Đã thêm sách '${newBookName}'.`);
      } else {
        console.log("=> Tên sách không hợp lệ!");
      }
      break;
    }

    case 3: {
      let borrowBookName = prompt("Nhập tên sách muốn mượn:");
      let index = books.indexOf(borrowBookName);

      if (index === -1) {
        console.log(`=> Lỗi: Không tìm thấy sách ${borrowBookName}!`);
      } else {
        books.splice(index, 1);
        console.log(`=> Đã cho mượn cuốn '${borrowBookName}'.`);
      }
      break;
    }

    case 4: {
      let oldName = prompt("Nhập tên sách cần sửa:");
      let index = books.indexOf(oldName);

      if (index === -1) {
        console.log(`=> Không tìm thấy sách '${oldName}'.`);
      } else {
        let newName = prompt("Nhập tên sách mới:");
        if (newName && newName.trim() !== "") {
          books[index] = newName;
          console.log(`=> Đã cập nhật sách thành '${newName}'.`);
        } else {
          console.log("=> Tên sách mới không hợp lệ!");
        }
      }
      break;
    }

    case 5:
      books.sort();
      console.log("=> Danh sách sau khi sắp xếp:");
      for (let i = 0; i < books.length; i++) {
        console.log(`${i + 1}. ${books[i]}`);
      }
      break;

    case 0:
      console.log("=> Thoát chương trình. Hẹn gặp lại!");
      break;

    default:
      console.log("=> Lựa chọn không hợp lệ!");
      break;
  }
} while (choose !== 0);