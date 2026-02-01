let userInput;
let action;
let readerName, bookId, bookTitle, waitingDays, priorityLevel;

let totalRequests = 0;
let rejectedRequests = 0;
let approvedRequests = 0;
let pendingRequests = 0;

do {
    userInput = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");
    if (!userInput) break;
    
    action = userInput.toLowerCase();

    if (action === "có") {
        totalRequests++;
        
        readerName = prompt("Tên bạn đọc:");
        bookId = prompt("Mã sách muốn đặt trước:");
        bookTitle = prompt("Tên sách:");
        waitingDays = Number(prompt("Số ngày dự kiến chờ:"));
        priorityLevel = Number(prompt("Mức độ ưu tiên: 1 = Sinh viên 2 = Giảng viên 3 = Đặc cách"));

        if (waitingDays > 45) {
            rejectedRequests++;
        } else if (priorityLevel === 3) {
            approvedRequests++;
        } else if (priorityLevel === 2 && waitingDays <= 30) {
            approvedRequests++;
        } else if (priorityLevel === 1 && waitingDays <= 21) {
            approvedRequests++;
        } else {
            pendingRequests++;
        }
    } else {
        console.log("--- KẾT QUẢ XỬ LÝ ---");
        console.log("Tổng số yêu cầu đã nhận: " + totalRequests);
        console.log("Số yêu cầu thành công: " + approvedRequests);
        console.log("Số yêu cầu bị từ chối: " + rejectedRequests);
        console.log("Số yêu cầu chờ xét duyệt thêm: " + pendingRequests);
        break;
    }
} while (action === "có");