const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

let choose;

do {
    choose = Number(prompt(`Mời nhập lựa chọn:
        1. Xem danh sách
        2. Tìm kiếm (Find)
        3. Lọc vị trí (Filter)
        4. Tổng bàn thắng (Reduce)
        5. Kiểm tra hiệu suất (Some / Every)
        0. Thoát`));

    switch (choose) {
        case 0:
            console.log("Chương trình kết thúc");
            break;
        case 1:
            displayPlayer();
            break;
        case 2:
            searchForPlayers();
            break;
        case 3:
            filterByPosition(); // Đổi tên cho đúng ý nghĩa
            break;
        case 4:
            calculateTotalGoals();
            break;
        case 5:
            checkPerformance();
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choose !== 0);

// 1. Hiển thị danh sách
function displayPlayer() {
    console.log("--- DANH SÁCH CẦU THỦ ---");
    squad.forEach((value) => {
        console.log(`TÊN: ${value[0]} | VỊ TRÍ: ${value[2]} | BÀN THẮNG: ${value[1]}`);
    });
}

// 2. Tìm kiếm cầu thủ (Find)
function searchForPlayers() {
    let name = prompt("Mời nhập tên cầu thủ cần tìm:");
    let result = squad.find((value) => value[0].toLowerCase() === name.toLowerCase());
    
    if (result) {
        console.log(`Tìm thấy: Tên: ${result[0]}, Vị trí: ${result[2]}, Bàn thắng: ${result[1]}`);
    } else {
        console.log("Không tìm thấy cầu thủ có tên này.");
    }
}

// 3. Lọc cầu thủ theo vị trí (Filter)
function filterByPosition() {
    let pos = prompt("Mời nhập vị trí cần lọc (FW, MF, DF, GK):").toUpperCase();
    let result = squad.filter((value) => value[2] === pos);
    
    if (result.length > 0) {
        console.log(`Kết quả lọc vị trí ${pos}:`, result);
    } else {
        console.log("Không có cầu thủ nào ở vị trí này.");
    }
}

// 4. Tính tổng bàn thắng (Reduce)
function calculateTotalGoals() {
    let total = squad.reduce((sum, player) => sum + player[1], 0);
    console.log(`Tổng số bàn thắng của cả đội: ${total}`);
}

// 5. Kiểm tra hiệu suất (Some / Every)
function checkPerformance() {
    
    let hasStar = squad.some(player => player[1] > 10);
    console.log(hasStar ? "Đội có cầu thủ ghi trên 10 bàn." : "Không ai ghi quá 10 bàn.");

    let everyoneScored = squad.every(player => player[1] > 0);
    console.log(everyoneScored ? "Tất cả cầu thủ đều đã ghi bàn." : "Vẫn có cầu thủ chưa ghi bàn (0 bàn).");
}