let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

function getAllPositions() {
    let uniquePositions = [];
    
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let position = parts[2];
        
        if (!uniquePositions.includes(position)) {
            uniquePositions.push(position);
        }
    }
    return uniquePositions;
}


function findPlayersWithLongestName() {
    let longestName = "";
    
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let currentName = parts[1];
        
        if (currentName.length > longestName.length) {
            longestName = currentName;
        }
    }
    return longestName;
}


function countPlayersStartingWithLetter(letter) {
    let count = 0;
    let searchLetter = letter.toLowerCase();
    
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        let name = parts[1];
        
        if (name.charAt(0).toLowerCase() === searchLetter) {
            count++;
        }
    }
    return count;
}


console.log("a. Danh sách các vị trí duy nhất:");
console.log(getAllPositions()); 

console.log("\nb. Cầu thủ có tên dài nhất:");
console.log(findPlayersWithLongestName());