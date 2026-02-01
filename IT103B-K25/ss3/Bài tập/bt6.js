let continueInput;
let command;
let readerName, readerId, feedbackType;
let severityLevel;

let totalFeedbacks = 0;
let lowSeverityCount = 0;
let midSeverityCount = 0;
let highSeverityCount = 0;
let suggestionCount = 0;
let goodCount = 0;

do {
    do {
        continueInput = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? \n (có/không)");
    } while (continueInput === null || continueInput === "");

    command = continueInput.toLowerCase();

    if (command === "có") {
        totalFeedbacks++;

        do {
            readerName = prompt("Tên bạn đọc:");
        } while (readerName === null || readerName === "");

        do {
            readerId = prompt("Mã thẻ bạn đọc:");
        } while (readerId === null || readerId === "");

        do {
            feedbackType = Number(prompt("Loại phản hồi:  1 = Phàn nàn / Khiếu nại  2 = Đề xuất cải thiện  3 = Khen ngợi"));
        } while (feedbackType !== 1 && feedbackType !== 2 && feedbackType !== 3);

        if (feedbackType === 1) {
            do {
                severityLevel = Number(prompt("Mức độ nghiêm trọng: \n 1 = Nhẹ \n 2 = Trung bình \n 3 = Nghiêm trọng"));
            } while (severityLevel !== 1 && severityLevel !== 2 && severityLevel !== 3);

            if (severityLevel === 3) {
                highSeverityCount++;
            } else if (severityLevel === 2) {
                midSeverityCount++;
            } else {
                lowSeverityCount++;
            }
        } else if (feedbackType === 2) {
            suggestionCount++;
        } else if (feedbackType === 3) {
            goodCount++;
        }

    } else {
        console.log("--- BÁO CÁO HỆ THỐNG PHẢN HỒI ---");
        console.log("Tổng số phản hồi đã xử lý: " + totalFeedbacks);
        console.log("Số khiếu nại NGHIÊM TRỌNG (Mức 3): " + highSeverityCount);
        console.log("Số khiếu nại trung bình (Mức 2): " + midSeverityCount);
        console.log("Số khiếu nại nhẹ (Mức 1): " + lowSeverityCount);
        console.log("Số đề xuất cải thiện: " + suggestionCount);
        console.log("Số phản hồi tích cực: " + goodCount);
        break;
    }
} while (command === "có");