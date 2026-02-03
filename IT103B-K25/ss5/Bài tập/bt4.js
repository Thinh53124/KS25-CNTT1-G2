let booksId = [];
let booksName = [];
let bookStatus = [];
let deletedBooks = 0;
let updated = 0;

let amount;
do {
    amount = Number(prompt("Số cuốn sách cần kiểm tra"));
    if (isNaN(amount) || amount < 1) alert(`Chỉ được nhập số nguyên dương`);
    else break;
} while (true);

for (let i = 0; i < amount; i++) {
    booksId.push(prompt(`Nhập mã sách`));
    booksName.push(prompt(`Nhập tên sách`));

    let status;
    do {
        status = Number(
            prompt(` 
        1. Hỏng nhẹ
        2. Hỏng nặng
        3. Cần sửa gấp
       `),
        );

        if (isNaN(status) || status < 1 || status > 3) {
            alert("Chỉ được nhập trong khoảng từ 1 đến 3");
        } else {
            bookStatus.push(status);
            break;
        }
    } while (true);
}

console.log(`Danh sách hiện tại`);
let currentStatus;
for (let i = 0; i < amount; i++) {
    currentStatus = ``;
    if (bookStatus[i] === 1) {
        currentStatus = `Hỏng nhẹ`;
    } else if (bookStatus[i] === 2) {
        currentStatus = ` Hỏng nặng`;
    }
    else if (bookStatus[i] === 3) {
        currentStatus = `Cần sửa gấp`;
    }

    console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${currentStatus} `);
}
let choice;
do {
    choice = Number(
        prompt(`
        1. Sửa tình trạng sách
        2. Loại bỏ một cuốn sách khỏi danh sách
        0. Thoát khỏi chương trình
        `),
    );

    switch (choice) {
        case 1:
            let editID = prompt(`Nhập mã sách cần sửa`);
            let deptrai = booksId.indexOf(editID);
            if (deptrai === -1) alert(`Khê`);
            else {
                let newStatus;
                do {
                    newStatus = Number(
                        prompt(`
            Chọn tình trạng mới:
            1. Hỏng nhẹ
            2. Hỏng nặng
            3. Cần sửa gấp
            4. Đã sửa xong
            5. Loại
            `),
                    );
                    if (isNaN(newStatus) || newStatus < 1 || newStatus > 5)
                        alert(`Chỉ được chọn từ 1 đến 5 thôi cậu bé`);
                    else {
                        bookStatus[deptrai] = newStatus;
                        if (bookStatus[deptrai] === 4) {
                            updated++;
                        }
                        break;
                    }
                } while (true);
                break;
            }
        case 2:
            let deleteID = prompt(`Nhập mã sách cần xóa`);
            let dangcap = booksId.indexOf(deleteID);

            if (dangcap === -1) alert(`Khê`);
            else {
                booksId.splice(dangcap, 1);
                booksName.splice(dangcap, 1);
                bookStatus.splice(dangcap, 1);
                deletedBooks++;

                alert(`Xóa thành công`);
            }
            break;
        case 0:
            alert(`
         Tổng số sách còn lại: ${booksId.length}
         Số sách đã sửa xong: ${updated}
         Số sách đã khê: ${deletedBooks}
            `);
            if (booksId.length === 0) console.log(`Không còn sách nào `);
            else {
                for (let i = 0; i < amount; i++) {
                    let statusDeptrai = ``;
                    if (bookStatus[i] === 1) {
                        statusDeptrai = "Hỏng nhẹ";
                    }
                    else if (bookStatus[i] === 2) {
                        statusDeptrai = "Hỏng nặng";
                    }
                    else if (bookStatus[i] === 3) {
                        statusDeptrai = "Cần sửa gấp";
                    }
                    else if (bookStatus[i] === 4) {
                        statusDeptrai = "Đã sửa xong";
                    }
                    else if (bookStatus[i] === 5) {
                        statusDeptrai = "Bị loại";
                    }
                    console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${statusDeptrai} `);
                }
            }
            break;
        default:
            alert(`Lựa chọn không đúng`);
            break;
    }
} while (choice !== 0);
