
/**
 * Mini Project: Hệ thống Quản trị Thư viện Nâng cao (Version 4.0)
 * Mục tiêu: Áp dụng Array Methods và các loại Vòng lặp.
 */

function libraryManagementSystem() {
  // --- A. CHỨC NĂNG BẢO MẬT ---
  let attempts = 0;
  let isAuthenticated = false;
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "12345";

  while (attempts < 3) {
    let user = prompt("Tên đăng nhập:");
    let pass = prompt("Mật khẩu:");

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      alert("Đăng nhập thành công!");
      isAuthenticated = true;
      break;
    } else {
      attempts++;
      if (user !== ADMIN_USER) {
        alert(`Sai tài khoản! Còn ${3 - attempts} lần thử.`);
      } else {
        alert(`Sai mật khẩu! Còn ${3 - attempts} lần thử.`);
      }
    }
  }

  if (!isAuthenticated) {
    alert("Tài khoản đã bị khóa!");
    return; // Dừng chương trình
  }

  // --- B. KHỞI TẠO DỮ LIỆU ---
  let libraries = ["Toán", "Văn", "Anh"];
  let choice;

  // --- C. MENU CHỨC NĂNG ---
  do {
    let menu = `--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN 4.0 ---
1. Nhập thêm lô sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược thứ tự kệ sách
6. Nhập kho từ nguồn khác
7. Thoát chương trình
Vui lòng chọn (1-7):`;

    choice = Number(prompt(menu));

    switch (choice) {
      case 1:
        // CHỨC NĂNG 1: Nhập lô sách (Sử dụng split)
        let input = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");
        if (input) {
          let newBooks = input.split(","); // Tách chuỗi thành mảng
          let countAdded = 0;
          for (let i = 0; i < newBooks.length; i++) {
            let bookName = newBooks[i].trim(); // Loại bỏ khoảng trắng thừa
            if (bookName !== "") {
              libraries.push(bookName);
              countAdded++;
            }
          }
          alert(`Đã thêm thành công ${countAdded} cuốn sách mới.`);
        }
        break;

      case 2:
        // CHỨC NĂNG 2: Hiển thị danh sách (Sử dụng for...of)
        console.clear();
        console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");
        if (libraries.length === 0) {
          console.log("Thư viện hiện đang trống.");
        } else {
          let stt = 1;
          for (let book of libraries) {
            console.log(`${stt}. ${book}`);
            stt++;
          }
        }
        alert("Danh sách đã được in ra console (F12).");
        break;

      case 3:
        // CHỨC NĂNG 3: Tìm kiếm (Sử dụng includes và indexOf)
        let searchName = prompt("Nhập tên cuốn sách cần tìm:");
        if (libraries.includes(searchName)) {
          let index = libraries.indexOf(searchName);
          alert(
            `Sách "${searchName}" được tìm thấy tại vị trí số ${index} trong mảng.`,
          );
        } else {
          alert(`Không tìm thấy sách "${searchName}" trong kho.`);
        }
        break;

      case 4:
        // CHỨC NĂNG 4: Cập nhật (Sử dụng indexOf)
        let oldName = prompt("Nhập tên sách cần sửa:");
        let foundIndex = libraries.indexOf(oldName);

        if (foundIndex !== -1) {
          let newName = prompt(`Tìm thấy sách "${oldName}". Nhập tên mới:`);
          if (newName) {
            libraries[foundIndex] = newName;
            alert("Cập nhật thành công!");
          }
        } else {
          alert("Sách không tồn tại để sửa.");
        }
        break;

      case 5:
        // CHỨC NĂNG 5: Đảo ngược (Sử dụng reverse và for...in)
        libraries.reverse();
        console.clear();
        console.log("--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC ---");
        for (let index in libraries) {
          console.log(`Vị trí index [${index}]: ${libraries[index]}`);
        }
        alert("Thứ tự trên kệ đã thay đổi. Kiểm tra console.");
        break;

      case 6:
        // CHỨC NĂNG 6: Nhập kho nguồn khác (Sử dụng concat)
        let externalLibrary = ["Sách Kỹ Năng", "Truyện Tranh"];
        libraries = libraries.concat(externalLibrary);
        alert("Đã gộp kho sách từ chi nhánh khác thành công.");
        break;

      case 7:
        alert("Hẹn gặp lại!");
        break;

      default:
        alert("Lựa chọn không hợp lệ!");
        break;
    }
  } while (choice !== 7);
}

// Chạy chương trình
libraryManagementSystem();
