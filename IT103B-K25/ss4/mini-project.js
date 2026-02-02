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
                alert(`Sai toàn khoản còn ${remaining} lần thử`);
            } else {
                alert(`Sai mật khẩu còn ${remaining} lần thử`);
            }
        }
    }
}

if (!isAuth) {
    alert("Tài khoản đã bị khóa do nhập sai quá 3 lần");
}

if (isAuth) {
    let choice = 0;
    do {
        let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n";
        menu += "1. Phân loại mã số sách (Chẵn/Lẻ)\n";
        menu += "2. Thiết kế sơ đồ kho sách\n";
        menu += "3. Dự toán phí bảo trì sách\n";
        menu += "4. Tìm mã số sách may mắn\n";
        menu += "5. Thoát\n";

        choice = Number(prompt(menu));

        switch (choice) {
            case 1:
                let totalBook = 0;
                let oddBook = 0;
                let evenBook = 0;
                let bookId;

                do {
                    bookId = Number(prompt("Yêu cầu người dùng nhập mã sách(nhập 0 để dừng chức năng)"));

                    if (isNaN(bookId)) {
                        alert("Vui lòng nhập số nguyên hợp lệ")
                    }

                    if (bookId === 0) {
                        break;
                    }
                    totalBook++
                    if (bookId % 2 == 0) {
                        evenBook++;
                    } else {
                        oddBook++;
                    }
                } while (true)

                console.log(`Tổng số mã sách đã nhập : ${totalBook}`);
                console.log(`Số sách khoa học(số chẵn): ${evenBook}`);
                console.log(`Số sách nghệ thuật(số lẻ): ${oddBook}`);
                break;
            case 2:
                let row;
                let col;
                while (true) {
                    row = +prompt("Nhập số hàng");
                    col = +prompt("Nhập số cột");

                    if (isNaN(row) || isNaN(col) || row < 0 || col < 0) {
                        alert("Số hàng và cột phải là số nguyên dương");
                    }
                    break;
                }
                console.log(`---Bản đồ kho sách(${row}-${col})---`);
                for (let i = 1; i <= row; i++) {
                    let layout = ""
                    for (let j = 1; j <= col; j++) {
                        let pos = `[${i}-${j}]`
                        if (i === j) {
                            pos += "(Kệ ưu tiên)";
                        }
                        layout += pos + " "
                    }
                    console.log(layout);
                }
                alert("In sơ đồ kệ sách thành công");
                break;
            case 3:
                let bookQuantity;
                let price;
                let yearPredict;
                while (true) {
                    bookQuantity = Number(prompt("Mời nhập số lượng sách"));
                    price = Number(prompt("Nhập giá mỗi quyển sách"));
                    yearPredict = Number(prompt("Nhấp số năm dự toán"));

                    if (isNaN(bookQuantity) || isNaN(price) || isNaN(yearPredict)) {
                        alert("Dữ liệu nhập phải là số");
                    }
                    break;
                }
                let totalPrice;
                for (let z = 1; z <= yearPredict; z++) {
                    totalPrice = bookQuantity * price;
                    console.log("Năm" + yearPredict + ":" + totalPrice + "VNĐ");
                    price = price * 1.1;
                }
                alert("Dùng F12 để xem chi tiết phí bảo trì")
                break;
            case 4:
                let luckyNumber = prompt("Vui lòng nhập 1 số bất kì");

                if (isNaN(luckyNumber) || luckyNumber <= 0) {
                    alert("Dữ liệu không hợp lệ")
                } else {
                    let countList = "";
                    let count = 0;
                    for (let i = 1; i <= luckyNumber; i++) {
                        if (i % 3 == 0 && i % 5 !== 0) {
                            countList += i + " "
                            count++;
                        }
                    }
                    console.log(countList || "Không có mã nào thỏa mãn.");
                    console.log(`=> Tổng cộng có ${count} mã may mắn.`);
                    alert(`Tìm thấy ${count} mã may mắn. Xem chi tiết tại Console.`);
                }

                break;
            case 5:
                alert("Hệ thống đang đăng xuất...");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 5)
} else {
    console.log("Bạn chưa đăng nhập thành công");
}


