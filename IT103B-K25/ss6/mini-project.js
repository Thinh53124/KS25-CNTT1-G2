let isAuth = false;

for (let logAttempt = 1; logAttempt <= 3; logAttempt++) {
    let account = prompt("Nhập tên tài khoản");
    let password = prompt("Nhập mật khẩu");

    if (account === "admin" && password === "12345") {
        alert("Đăng nhập tài khoản thành công");
        isAuth = true;
        break;
    } else {
        let remaining = 3 - logAttempt;
        if (remaining > 0) {
            if (account !== "admin" && password !== "12345") {
                alert(`Sai cả tài khoản và mật khẩu!!! Còn ${remaining} lần thử`);
            } else if (account !== "admin") {
                alert(`Sai tài khoản còn ${remaining} lần thử`);
            } else {
                alert(`Sai mật khẩu còn ${remaining} lần thử`);
            }
        }
    }
}

if (!isAuth) {
    alert("Tài khoản đã bị khóa do nhập sai quá 3 lần");
}

let libraries = ["Toán", "Văn", "Anh"];

if (isAuth) {
    let choice = 0;
    do {
        let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n";
        menu += "1. Nhập thêm lô sách mới\n";
        menu += "2. Hiển thị danh sách sách\n";
        menu += "3. Tìm kiếm sách \n";
        menu += "4. Cập nhật tên sách\n";
        menu += "5. Đảo ngược thứ tự kệ sách\n";
        menu += "6. Nhập kho từ nguồn khác\n";
        menu += "7. Thoát chương trình\n";

        choice = Number(prompt(menu));

        switch (choice) {
            case 1:
                let BookInput = prompt("Nhập thêm lô sách mới (phân cách bằng dấu phẩy)");
                if (BookInput) {
                    let newBooks = BookInput.split(",");
                    let count = 0;
                    for (let i = 0; i < newBooks.length; i++) {
                        let nameBook = newBooks[i].trim();
                        if (nameBook !== "") {
                            libraries.push(nameBook);
                            count++;
                        }
                    }
                    alert(`Đã thêm thành công ${count} sách mới`);
                }
                break;
            case 2:
                console.log("--- Danh sách sách hiện có ---");
                for (let i = 0; i < libraries.length; i++) {
                    console.log(`${i + 1}. ${libraries[i]}`);
                }
                alert("Đã in ra màn hình console")
                break;
            case 3:
                let bookSearch = prompt("Nhập tên cuốn sách cần tìm:");
                let check = libraries.includes(bookSearch);
                if (check !== -1) {
                    let index = libraries.indexOf(bookSearch);
                    alert(
                        `Sách "${bookSearch}" được tìm thấy tại vị trí số ${index} trong mảng.`,
                    );
                } else {
                    alert(`Không tìm thấy sách "${bookSearch}" trong kho.`);
                }
                break;
            case 4:
                let fixedBook = prompt("Nhập tên sách cần sửa");
                let foundIndex = libraries.indexOf(fixedBook);
                let newBookName;
                if (foundIndex !== -1) {
                    newBookName = prompt(`Đã tìm thấy sách ${fixedBook}. Vui lòng nhập tên mới`);
                    if (newBookName) {
                        libraries[foundIndex] = newBookName;
                        alert(`Cập nhật thành công`);
                    } else {
                        alert(`Sách không tồn tại để sửa`);
                    }
                }
                break;
            case 5:
                libraries.reverse();
                console.log("----Kệ sách sau khi bị reverse----");
                for (let newIndex in libraries) {
                    console.log(`Vị trí index [${newIndex}]: ${libraries[newIndex]}`);
                }
                alert("Thay đổi thành công!!!. Kiểm tra console.");
                break;
            case 6:
                let otherLib = ["Sách kỹ năng","Truyện tranh"];
                libraries = libraries.concat(otherLib);
                let newCount = 1;
                alert("Gộp sách thành công");
                for(let newLib of libraries){
                    console.log(`${newCount}. ${newLib}`);
                    newCount++;
                }
                break;
            case 7:
                alert("Cảm ơn bạn đã sử dụng hệ thống!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice !== 7);
} else {
    console.log("Bạn chưa đăng nhập thành công");
}