let account = prompt("Mời bạn nhập tài khoản ").trim().toLowerCase();
let password = prompt("Mời bạn nhập mật khẩu").trim().toLowerCase();
let pass = true;
let libraries = ["Toán", "Văn", "Anh"];
let count = 3;
let choose;
let lineSome;

while (true) {
    if (password === "12345" && account === "admin") {
        alert("Đăng nhập thành công");
        pass = true;
        break;
    }
    if (count === 0) {
        alert("Tài khoản của bạn đã bị khóa do đăng nhập sai tận 3 lần !");
        pass = false;
        break;
    }
    if (account !== "admin" && password === "12345") {
        alert(`Sai tài khoản ! Bạn còn ${count} lần thử`);
        count--;
    } else if (password !== "12345" && account === "admin") {
        alert(`Sai mật khẩu ! bạn còn ${count} lần thử`);
        count--;
    } else {
        alert(`Sai cả tài khoản lẫn mật khẩu ! bạn còn ${count} lần thử`);
        count--;
    }
    account = prompt("Mời bạn nhập tài khoản ").trim().toLowerCase();
    password = prompt("Mời bạn nhập mật khẩu").trim().toLowerCase();
}

if (pass) {
    do {
        choose = +prompt(`  ------- HỆ THỐNG QUẢN LÝ THƯ VIỆN 4.0-----------
    1. Nhập thêm lô sách mới
    2. Hiển thị danh sách sách
    3. Tìm kiếm sách
    4. Cập nhật tên sách
    5. Đảo ngược thứ tự kệ sách
    6. Nhập kho từ nguồn khác
    7. Thoát khỏi chương trình
    Vui lòng nhập lựa chọn của bạn (1-5):`);
        switch (choose) {
            case 1:
                let books;
                let booksCount = 0;
                while (true) {
                    books = prompt("Vui lòng nhập các sách mới (Tên các sách được cách nhau bởi dấu phẩy)").trim();
                    if (books === "") {
                        alert("Mảng sách thêm mới của bạn không được để trống !");
                        continue;
                    }
                    break;
                }
                let newBooks = books.split(",");
                for (let i = 0; i < newBooks.length; i++) {
                    let bookInside = newBooks[i].trim();
                    if (libraries.includes(bookInside)) {
                        continue;
                    }
                    if (bookInside !== "") {
                        libraries.push(bookInside);
                        booksCount++;
                    }
                }
                alert("Đã thêm " + booksCount + " sách vào kho \n" +
                    "Danh sách hiện tại: " + libraries.join(", "));
                break;
            case 2:
                console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");
                for (let i = 0; i < libraries.length; i++) {
                    console.log(`${i + 1}. ${libraries[i]}`);
                }
                alert("Danh sách đã được in ra console (F12).");
                break;
            case 3:
                let bookWannaFind;
                while (true) {
                    bookWannaFind = prompt("Vui lòng nhập tên sách mà bạn muốn tìm !");
                    if (bookWannaFind.trim() === "") {
                        alert("Tên sách bạn tìm không được để trống !");
                        continue;
                    }
                    break;
                }
                if (libraries.includes(bookWannaFind)) {
                    alert("Sách " + `"${bookWannaFind}"` + " được tìm thấy tại vị trí " + libraries.indexOf(bookWannaFind));
                } else {
                    alert("Không tìm thấy sách bạn yêu cầu !");
                }
                break;
            case 4:
                let bookwannaChange;
                let newBook;
                while (true) {
                    bookwannaChange = prompt("Vui lòng nhập tên mà bạn muốn cập nhập !");
                    if (bookwannaChange === "") {
                        alert("Sách bạn không được để trống !");
                        continue;
                    }
                    break;
                }
                if (libraries.includes(bookwannaChange)) {
                    while (true) {
                        newBook = prompt("Vui lòng nhập tên sách mà bạn muốn cập nhật");
                        if (newBook === "") {
                            alert("Sách bạn nhập không được để trống !");
                            continue;
                        }
                        break;
                    }
                    libraries[libraries.indexOf(bookwannaChange)] = newBook;
                    alert("Cập nhập thành công sách !");
                } else {
                    alert("Sách bạn tìm không tồn tại !");
                }
                break;
            case 5:
                let newArray = libraries.reverse();
                console.log("--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC");
                for(let i = 0; i < newArray.length; i++){
                    console.log("Vụi trí index " + `[${i}] ` +  newArray[i]);
                }
                break;
            case 6:
                let anotherArray = ["Sách kỹ năng", "Truyện Tranh"];
                libraries = libraries.concat(anotherArray);
                alert("Đã gộp kho sách từ chi nhánh khác thành công.")
                break;
            case 7: 
                alert("Hẹn gặp lại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (choose !== 7);
} else {
    alert("Trang này để trống !");
}
document.write("<h1>Mini project (Thực hành JavaScript) </h1>");