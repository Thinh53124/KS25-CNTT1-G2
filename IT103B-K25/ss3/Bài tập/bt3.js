let question;
let questionLowerCase;
let bookUser;
let bookName;
let bookDate;
let dateProlong;


do {
    question = prompt("Có yêu cầu gia hạn mới không? (có/không)");
    questionLowerCase = question.toLowerCase;
    if (ask === "có") {
        bookUser = prompt("Tên bạn đọc: ");
        bookName = prompt("Tên sách: ");
        bookDate = Number(prompt("Số ngày đã mượn hiện tại: "));
        dateProlong = Number(prompt("Số ngày muốn gia hạn thêm: "));
        console.log("Tên bạn đọc: " + bookUser);
        console.log("Tên sách: " + bookName);
        console.log("Số ngày đã mượn hiện tại: " + bookDate);
        console.log("Số ngày muốn gia hạn thêm: " + dateProlong);
        if (bookDate + dateProlong > 60) {
            console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        } else if (borrowday > 45) {
            console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        } else {
            console.log("Gia hạn thành công");

        }
    } else {
        break;
    }
} while (question === "có");