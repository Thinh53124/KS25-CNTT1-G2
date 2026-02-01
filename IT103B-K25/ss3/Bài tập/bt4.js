let question;
let totalCheckedBooks = 0;
let bookId, bookTitle, stockQuantity, bookStatus;

let lostCount = 0;
let outOfStockCount = 0;
let highStockCount = 0;
let stableStockCount = 0;

do {
    question = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");
    
    if (question && question.toLowerCase() === "có") {
        bookId = prompt("Mã sách:");
        bookTitle = prompt("Tên sách:");
        stockQuantity = Number(prompt("Số lượng thực tế đang có trong kho:"));
        bookStatus = Number(prompt("Tình trạng sách (1: Bình thường / 2: Bị mất):"));

        totalCheckedBooks++;

        if (bookStatus === 2) {
            lostCount++;
        } else if (bookStatus === 1) {
            if (stockQuantity === 0) {
                outOfStockCount++;
            } else if (stockQuantity >= 10) {
                highStockCount++;
            } else {
                stableStockCount++;
            }
        }
    } else {
        console.log("--- BÁO CÁO KIỂM KÊ ---");
        console.log("Tổng sách đã kiểm kê: " + totalCheckedBooks);
        console.log("Số sách bị mất: " + lostCount);
        console.log("Số sách hết hàng: " + outOfStockCount);
        console.log("Số sách còn nhiều: " + highStockCount);
        console.log("Số sách mức ổn định: " + stableStockCount);
        break;
    }
} while (question && question.toLowerCase() === "có");