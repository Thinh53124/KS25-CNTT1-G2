let playersId = ["P001", "P002", "P003", "P004", "P005"];

let playerNames = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Văn D", "Hoàng Thị E"];

let playerJerseyNumbers = [10, 7, 8, 9, 11];

let flag;
let inputId = prompt("Nhập mã cầu thủ muốn cập nhật");

let exists = false;
for (let i = 0; i < playersId.length; i++) {
    if (playersId[i] === inputId) {
        exists = true;
        break;
    }
}

if (exists) {
    let newName = prompt("Nhập tên mới cho cầu thủ:");
    let newJersey;

    while (true) {
        newJersey = parseInt(prompt("Nhập số áo mới (từ 1-99):"));
        if (newJersey >= 1 && newJersey <= 99) {
            break;
        } else {
            alert("Số áo không hợp lệ! Vui lòng nhập lại.");
        }
    }

    let success = updatePlayerNameAndJersey(inputId, newName, newJersey);

    if (success) {
        alert("Cập nhật thành công!");
        printTeamRoster();
    }
} else {
    alert("Không tìm thấy cầu thủ với mã này!");
}


function printTeamRoster() {
    console.log("\n=== DANH SÁCH ĐỘI BÓNG HIỆN TẠI ===");
    for (let i = 0; i < playersId.length; i++) {
        console.log(`${i + 1}. ID: ${playersId[i]} - Tên: ${playerNames[i]} - Số áo: ${playerJerseyNumbers[i]}`);
    }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    let foundIndex = -1;

    for (let i = 0; i < playersId.length; i++) {
        if (playersId[i] === playerId) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {
        playerNames[foundIndex] = newName;
        playerJerseyNumbers[foundIndex] = newJerseyNumber;
        return true;
    }

    return false;
}