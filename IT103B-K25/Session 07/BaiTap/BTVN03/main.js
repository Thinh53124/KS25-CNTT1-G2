let players = [];
let player;
while (true) {
    player = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng");
    if (isNaN(player) || player < 1) {
        alert("Số cầu thủ không hợp lý và phải để dữ liệu là số !");
        continue;
    }
    break;
}
let playerId;
let playerName;
let position;
let pass;
for (let i = 0; i < player; i++) {
    while (true) {
        pass = true;
        playerId = prompt(`Vui lòng nhập tên cầu thủ thứ ${i + 1}`);
        if (playerId === "") {
            alert("Cầu thủ bạn nhập không được để trống !");
            continue;
        }
        for (let j = 0; j < players.length; j++) {
            let id = players[j].split("-")[0];
            if (id === playerId) {
                pass = false;
                break;
            }
        }
        if (pass) {
            break;
        } else {
            alert("mã cầu thủ không được nhập trùng !");
        }
    }
    while (true) {
        playerName = prompt("Vui lòng nhập tên của cầu thủ cần nhập !");
        if (playerName.trim() === "") {
            alert("Tên cầu thủ bạn nhập không được để trống !");
            continue;
        }
        break;
    }
    while (true) {
        position = +prompt(`Vui lòng chọn vị trí cần nhập:
    1 - Thủ môn
    2 - Hậu vệ
    3 - Tiền vệ
    4 - Tiền đạo`);
        if (isNaN(position) || position < 1 || position > 4) {
            alert("Số bạn nhập không hợp lý !");
            continue;
        }
        break;
    }
    line = "";
    switch (position) {
        case 1:
            line = "Thủ môn";
            break;
        case 2:
            line = "Hậu vệ";
            break;
        case 3:
            line = "Tiền vệ";
            break;
        case 4:
            line = "Tiền đạo";
            break;
    }
    players.push(`${playerId}-${playerName}-${line}`);
}


// Cầu thủ mới !!
while (true) {
    pass = true;
    playerId = prompt("Vui lòng nhập mã cầu thủ mới !");
    if (playerId === "") {
        alert("Cầu thủ bạn nhập không được để trống !");
        continue;
    }
    for (let j = 0; j < players.length; j++) {
        let id = players[j].split("-")[0];
        if (id === playerId) {
            pass = false;
            break;
        }
    }
    if (pass) {
        break;
    } else {
        alert("mã cầu thủ không được nhập trùng !");
    }
}
while (true) {
    playerName = prompt("Vui lòng nhập tên của CẦU THỦ MỚI cần nhập !");
    if (playerName.trim() === "") {
        alert("Tên cầu thủ bạn nhập không được để trống !");
        continue;
    }
    break;
}
while (true) {
    position = +prompt(`Vui lòng chọn vị trí cần nhập:
    1 - Thủ môn
    2 - Hậu vệ
    3 - Tiền vệ
    4 - Tiền đạo`);
    if (isNaN(position) || position < 1 || position > 4) {
        alert("Số bạn nhập không hợp lý !");
        continue;
    }
    break;
}
line = "";
switch (position) {
    case 1:
        line = "Thủ môn";
        break;
    case 2:
        line = "Hậu vệ";
        break;
    case 3:
        line = "Tiền vệ";
        break;
    case 4:
        line = "Tiền đạo";
        break;
}
pushPlayer(playerId, playerName, line);
printTeamRoster();

// hàm
function pushPlayer(id, name, positi) {
    players.push(`${id}-${name}-${positi}`);
    alert("Thêm thành công !");
}
function printTeamRoster() {
    for (let i = 0; i < players.length; i++) {
        let part = players[i].split("-");
        console.log(`Cầu thủ thứ ${i + 1}: Mã :${part[0]} | Tên: ${part[1]} | Vị trí: ${part[2]}`);
    }
}