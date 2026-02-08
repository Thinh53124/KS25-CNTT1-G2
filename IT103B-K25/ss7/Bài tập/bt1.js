let playerIds = [];
let playerPositions = [];

let question = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng");


for (let i = 0; i < question; i++) {
    let id;
    while (true) {
        id = prompt(`Nhập mã cầu thủ thứ ${i + 1}:`);
        if (playerIds.includes(id)) {
            alert("Mã này đã tồn tại! Vui lòng nhập mã khác.");
        } else {
            playerIds.push(id);
            break;
        }
    }

    let posChoice;
    let positionName = "";

    while (positionName === "") {
        posChoice = prompt("Chọn vị trí: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo");

        switch (posChoice) {
            case "1":
                positionName = "Thủ môn";
                break;
            case "2":
                positionName = "Hậu vệ";
                break;
            case "3":
                positionName = "Tiền vệ";
                break;
            case "4":
                positionName = "Tiền đạo";
                break;
            default:
                alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 4.");
                break;
        }
    }
    playerPositions.push(positionName);
}


function printTeamRoster() {
    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". ID: " + playerIds[i] + " - Vị trí: " + playerPositions[i]);
    }
}

function findPlayersByPosition(position) {
    let indexPos = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indexPos.push(i);
        }
    }
    return indexPos;
}

printTeamRoster();

let searchPos = "Hậu vệ";
let ketQua = findPlayersByPosition(searchPos);
console.log("\nCác chỉ số của vị trí " + searchPos + " là: " + ketQua);