let username = "admin";
let password = "12345";
let maxAttempts = 3;
let attempts = 0;
let isLoggedIn = false;

while (attempts < maxAttempts) {
    let inputUser = prompt("Tên đăng nhập:");
    let inputPass = prompt("Mật khẩu:");

    if (inputUser === username && inputPass === password) {
        isLoggedIn = true;
        break;
    } else {
        attempts++;
        console.log("Sai tài khoản hoặc mật khẩu");
    }
}

if (!isLoggedIn) {
    console.log("Tài khoản đã bị khóa");
} else {
    let libraries = ["Toán", "Văn", "Anh"];
    let running = true;

    do {
        let choice = +prompt("1. Nhập thêm lô sách mới\n2. Hiển thị danh sách sách\n3. Tìm kiếm sách\n4. Cập nhật tên sách\n5. Đảo ngược thứ tự kệ sách\n6. Nhập kho từ nguồn khác\n7. Thoát chương trình");
        switch (choice) {
            case 1:
                let input = prompt("Nhập tên sách, cách nhau bằng dấu phẩy:");
                let newBooks = input.split(",").map(b => b.trim()).filter(b => b !== "");
                libraries.push(...newBooks);
                console.log("Đã thêm " + newBooks.length + " cuốn sách");
                break;

            case 2:
                libraries.forEach((book, index) => {
                    console.log((index + 1) + ". " + book);
                });
                break;

            case 3:
                let searchName = prompt("Nhập tên sách cần tìm:");
                let foundIndex = libraries.indexOf(searchName);
                if (foundIndex !== -1) {
                    console.log("Tìm thấy sách ở vị trí " + (foundIndex + 1));
                } else {
                    console.log("Không tìm thấy");
                }
                break;

            case 4:
                let oldName = prompt("Nhập tên sách cần cập nhật:");
                let updateIndex = libraries.indexOf(oldName);
                if (updateIndex !== -1) {
                    let newName = prompt("Nhập tên mới:");
                    libraries[updateIndex] = newName;
                    console.log("Cập nhật thành công");
                } else {
                    console.log("Sách không tồn tại");
                }
                break;

            case 5:
                libraries.reverse();
                libraries.forEach((book, index) => {
                    console.log((index + 1) + ": " + book);
                });
                break;

            case 6:
                let otherSource = ["Sách Kỹ Năng", "Truyện Tranh"];
                libraries = libraries.concat(otherSource);
                console.log("Hợp nhất thành công");
                break;

            case 7:
                console.log("Hẹn gặp lại!");
                running = false;
                break;

            default:
                console.log("Lựa chọn không hợp lệ");
        }
    } while (running);
}
