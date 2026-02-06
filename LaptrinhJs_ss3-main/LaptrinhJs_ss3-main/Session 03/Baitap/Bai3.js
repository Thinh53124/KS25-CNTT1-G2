let ask;
let asklower;
let user, namebook, borrowday, borrowdaymore;
do {
    ask = prompt("Có yêu cầu gia hạn mới không? (có/không)");
    asklower = ask.toLowerCase;
    if (ask === "có") {
        user = prompt("Tên bạn đọc: ");
        namebook = prompt("Tên sách: ");
        borrowday = Number(prompt("Số ngày đã mượn hiện tại: "));
        borrowdaymore = Number(prompt("Số ngày muốn gia hạn thêm: "));
        console.log("Tên bạn đọc: " + user);
        console.log("Tên sách: " + namebook);
        console.log("Số ngày đã mượn hiện tại: " + borrowday);
        console.log("Số ngày muốn gia hạn thêm: " + borrowdaymore);
        if (borrowday + borrowdaymore > 60) {
            console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        } else if (borrowday > 45) {
            console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        } else {
            console.log("Gia hạn thành công");

        }
    } else {
        break;
    }
} while (ask === "có");




