let players = [];

let n = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

for (let i = 0; i < n; i++) {
    console.log("--- Nhập cầu thủ thứ " + (i + 1) + " ---");

    let id;
    while (true) {
        id = prompt("Nhập mã cầu thủ:");
        let isDuplicate = false;

        for (let j = 0; j < players.length; j++) {
            let existingId = players[j].split("-")[0];
            if (existingId === id) {
                isDuplicate = true;
                break;
            }
        }

        if (isDuplicate) {
            alert("Mã cầu thủ đã tồn tại!");
        } else if (id.trim() === "") {
            alert("Mã không được để trống!");
        } else {
            break;
        }
    }

    let name;
    while (true) {
        name = prompt("Nhập tên cầu thủ:");
        if (name.trim() !== "") break;
        alert("Tên không được để trống!");
    }

    let posName = "";
    while (posName === "") {
        let posChoice = prompt("Chọn vị trí: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo");
        switch (posChoice) {
            case "1":
                posName = "Thủ môn";
                break;
            case "2":
                posName = "Hậu vệ";
                break;
            case "3":
                posName = "Tiền vệ";
                break;
            case "4":
                posName = "Tiền đạo";
                break;
            default:
                alert("Vui lòng chọn từ 1-4!");
        }
    }

    let playerString = id + "-" + name + "-" + posName;
    players.push(playerString);
}

function printTeamRoster() {
    console.log("\n=== DANH SÁCH ĐỘI BÓNG ===");
    for (let i = 0; i < players.length; i++) {
        let details = players[i].split("-");
        let id = details[0];
        let name = details[1];
        let pos = details[2];

        console.log((i + 1) + ". Mã: " + id + " | Tên: " + name + " | Vị trí: " + pos);
    }
}

function pushPlayer(id, name, position) {
    let newEntry = id + "-" + name + "-" + position;
    players.push(newEntry);
}

printTeamRoster();

pushPlayer("P999", "Siêu Dự Bị", "Tiền đạo");
console.log("Sau khi thêm cầu thủ mới:");
printTeamRoster();