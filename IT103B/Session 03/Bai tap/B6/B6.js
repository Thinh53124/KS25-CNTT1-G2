let ask;
let lowerask;
let user, iduser, feedback;
let ratefeedback;
let allfeedback = 0;
let feedbacklow = 0;
let feedbackmid = 0;
let feedbacktop = 0;
let rcmdimprove = 0;
let goodfeedback = 0;
do {
    do {
        ask = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? \n (có/không)");
    } while (ask === null || ask === "");
    lowerask = ask.toLowerCase();
    if (lowerask === "có") {
        allfeedback++;
        do {
            user = prompt("Tên bạn đọc");
        } while (user === null || user === "");
        do {
            iduser = prompt("Mã thẻ bạn đọc ");
        } while (iduser === null || iduser === "");
        do {
            feedback = Number(prompt("Loại phản hồi: \n 1 = Phàn nàn / Khiếu nại  \n 2 = Đề xuất cải thiện \n 3 = Phản hồi tích cực / Khen ngợi"));
        } while (feedback !== 1 && feedback !== 2 && feedback !== 3);
        if (feedback === 1) {
            ratefeedback = Number(prompt("Mức độ nghiệm trọng \n 1 = Nhẹ (có thể xử lý nhanh) \n 2 = Trung bình \n 3 = Nghiêm trọng (cần báo cáo lãnh đạo)"))
            if (ratefeedback === 3) {
                feedbacktop++;
            } else if (ratefeedback === 2) {
                feedbackmid++;
            } else if (ratefeedback === 1) {
                feedbacklow++;
            }
        } else if (feedback === 2) {
            rcmdimprove++;
        } else if (feedback === 3) {
            goodfeedback++;
        }
    } else {
        console.log("Tổng số phản hồi/khiếu nại đã xử lý : " + allfeedback);
        console.log("Số khiếu nại nghiêm trọng (mức 3): " + feedbacktop);
        console.log("Số khiếu nại trung bình (mức 2): " + feedbackmid);
        console.log("Số khiếu nại nhẹ (mức 1): " + feedbacklow);
        console.log("Số đề xuất cải thiện: " + rcmdimprove);
        console.log("Số phản hồi tích cực: " + goodfeedback);
        break;
    }
} while (lowerask === "có");




