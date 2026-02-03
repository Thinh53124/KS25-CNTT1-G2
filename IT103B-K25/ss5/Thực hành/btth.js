let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

let choice;
do {
    choice = +prompt(`mời lựa chọn chức năng
        1. Hiển thị sách
        2. Thêm sách mới
        3. Mượn sách
        4. Cập nhật sách
        5. Sắp xếp
        0. Thoát`);
    switch (choice) {
        case 1:
            console.log("tổng số sách trong kho: " + books.length);
            for (let i = 0; i < books.length; i++) {
                console.log(`Sách thứ ${i + 1}: ` + books[i]);
            }
            break;
        case 2:
            let require = prompt("Nhập tên cuốn sách mới");
            books.push(require);
            console.log(books);
            alert("Đã thêm thành công!");
            break;
        case 3:
            let bookBorrow = prompt("Nhập tên cuốn sách muốn mượn");
            let check = books.indexOf(bookBorrow);
            if (check == -1) {
                alert("Không có sách này trong kho");
            } else {
                console.log(`Đã cho mượn ${bookBorrow[check]}`);
                books.splice(check, 1);
            }
        case 4:
            break;
        case 5:
            let n = books.length;
            for (let a = 0; a < n - 1; i++) {
                let swapped = false;
                for (let b = 0; b < n - i - 1; j++) {
                    if (books[b] > books[b + 1]) {
                        let temp = books[b];
                        books[b] = books[b + 1];
                        books[b + 1] = temp;
                        swapped = true;
                    }
                }
                if (!swapped) break;
            }
            console.log("Danh sách sau khi sắp xếp:", books);
        default:
            break;
    }
} while (choice != 0);