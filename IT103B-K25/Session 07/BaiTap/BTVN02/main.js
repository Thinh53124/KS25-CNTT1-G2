let playerIds = ["P001", "P002", "P003", "P004", "P005",];
let playerNames = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];
let playerCodeWannaUpdate;
printTeamRoster();
while (true) {
    playerCodeWannaUpdate = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");
    if (playerCodeWannaUpdate === "") {
        alert("Mã cập nhật bạn nhập không được để trống !");
        continue;
    }
    break;
}
let newPlayerName;

while (true) {
    newPlayerName = prompt("Vui lòng nhập tên mới cần cập nhập");
    if (newPlayerName === "") {
        alert("Tên cầu thủ bạn đặt không được để trống");
        continue;
    }
    break;
}

let newNumberPlayer;
while (true) {
    newNumberPlayer = +prompt("Vui lòng Nhập số áo mới cho cầu thủ đó !");
    if(isNaN(newNumberPlayer)){
        alert("Số áo cầu thủ bạn nhập không phải là số !");
        continue;
    }
    if(newNumberPlayer < 1 || newNumberPlayer > 99){
        alert("Số bạn chọn chỉ từ  1 -> 99 !!");
        continue;
    }
    break;
}
updatePlayerNameAndJersey(playerCodeWannaUpdate,newPlayerName,newNumberPlayer);
printTeamRoster();


// Hàm thực thi
function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    if (playerIds.includes(playerId)) {
        playerNames.splice(playerIds.indexOf(playerId),  1, newName);
        playerJerseyNumbers.splice(playerIds.indexOf(playerId),  1, newJerseyNumber);
        alert("Cập nhập cầu thủ thành công !");
    } else {
        alert("Không tìm thấy cầu thủ với mã này!");
    }
}
function printTeamRoster(){
    console.log(`Danh sách các cầu thủ:`);
    for(let i = 0; i  < playerIds.length; i++){
        console.log(`${i+1}. ${playerIds[i]} - ${playerNames[i]} - ${playerJerseyNumbers[i]}`);
    }
}