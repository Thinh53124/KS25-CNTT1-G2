let PlayerId = ["P001", "P002", "P003", "P004", "P005"];
let PlayerName = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E",
];
let PlayerJerseyNumber = [10, 7, 8, 9, 11];

function printTeamRoster() {
    console.log("=== DANH SÁCH CẦU THỦ ===");
    for (let i = 0; i < PlayerId.length; i++) {
        console.log(
            `${i + 1}. ${PlayerId[i]} - ${PlayerName[i]} - Áo số ${PlayerJerseyNumber[i]}`
        );
    }
}
function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    let index = PlayerId.indexOf(playerId);
    if (index === -1) {
        return false;
    }
    PlayerName[index] = newName;
    PlayerJerseyNumber[index] = newJerseyNumber;
    return true;
}
printTeamRoster();
let idInput = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");
let indexCheck = PlayerId.indexOf(idInput);
if (indexCheck === -1) {
    alert("Không tìm thấy cầu thủ với mã này!");
} else {
    let newName = prompt("Nhập tên mới cho cầu thủ:");
    let newNumber;
    do {
        newNumber = +prompt("Nhập số áo mới (1–99):");
    } while (newNumber < 1 || newNumber > 99);

    let result = updatePlayerNameAndJersey(idInput, newName, newNumber);

    if (result) {
        alert("Cập nhật thành công!");
        printTeamRoster();
    }
}
