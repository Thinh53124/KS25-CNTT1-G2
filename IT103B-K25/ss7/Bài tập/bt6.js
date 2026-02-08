let playersSample = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];

function getShortestPlayerName() {
    let shortestName = playersSample[0].split("-")[1];
    
    for (let i = 1; i < playersSample.length; i++) {
        let currentName = playersSample[i].split("-")[1];
        if (currentName.length < shortestName.length) {
            shortestName = currentName;
        }
    }
    return shortestName;
}

function countPlayersWithPositionLengthGreaterThan(length) {
    let count = 0;
    for (let i = 0; i < playersSample.length; i++) {
        let position = playersSample[i].split("-")[2];
        if (position.length > length) {
            count++;
        }
    }
    return count;
}

console.log("Tên ngắn nhất:", getShortestPlayerName());
console.log("Số cầu thủ có tên vị trí dài hơn 6 ký tự:", countPlayersWithPositionLengthGreaterThan(6));