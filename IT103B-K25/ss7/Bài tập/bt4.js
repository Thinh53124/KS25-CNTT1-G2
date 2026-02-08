let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền Vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Thị F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];

function printTeamRoster() {
    console.log("Danh sách cầu thủ");
    console.log(`   STT    |   MÃ      |    Tên     |    Vị trí  |`);
    for (let i = 0; i < players.length; i++) {
        let part = players[i].split("-");
        console.log(`  ${i + 1}  | ${part[0]} | ${part[1]}   |  ${part[2]} `);
    }
}

function countPlayerByPosition(playersList) {
    let strikerCount = 0;
    let defenderCount = 0;
    let midfielderCount = 0;
    let goalkeeperCount = 0;

    for (let playerStr of playersList) {
        let position = playerStr.split("-")[2];

        if (position === "Tiền đạo") {
            strikerCount++;
        } else if (position === "Hậu vệ") {
            defenderCount++;
        } else if (position === "Tiền vệ") {
            midfielderCount++;
        } else if (position === "Thủ môn") {
            goalkeeperCount++;
        }
    }
    console.log(`Thống kê: Tiền Đạo: ${strikerCount}, Tiền vệ: ${midfielderCount}, Hậu vệ: ${defenderCount}, Thủ môn: ${goalkeeperCount}`);
}

function hasGoalkeeper() {
    let foundGoalkeeper = false;

    for (let playerStr of players) {
        if (playerStr.split("-")[2] === "Thủ môn") {
            foundGoalkeeper = true;
            break;
        }
    }
    return foundGoalkeeper;
}

printTeamRoster();
countPlayerByPosition(players);
console.log("Đội có thủ môn không?:", hasGoalkeeper());