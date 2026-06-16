let players = [];

let n = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

if (isNaN(n) || n <= 0) {
  console.log("Số lượng cầu thủ không hợp lệ!");
} else {
  for (let i = 0; i < n; i++) {
    let id;
    do {
      id = prompt(`Nhập mã cầu thủ ${i + 1}:`);
      let exists = false;
      for (let j = 0; j < players.length; j++) {
        if (players[j].split("-")[0] === id) {
          exists = true;
          break;
        }
      }
      if (exists) alert("Mã cầu thủ đã tồn tại!");
    } while (!id || players.some((p) => p.split("-")[0] === id));

    let name;
    do {
      name = prompt("Nhập tên cầu thủ:");
    } while (!name);

    let posNumber;
    let position = "";
    do {
      posNumber = Number(
        prompt("Vị trí (1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo)"),
      );
      if (posNumber === 1) position = "Thủ môn";
      else if (posNumber === 2) position = "Hậu vệ";
      else if (posNumber === 3) position = "Tiền vệ";
      else if (posNumber === 4) position = "Tiền đạo";
    } while (!position);

    players.push(`${id}-${name}-${position}`);
  }
}

function printTeamRoster() {
  for (let i = 0; i < players.length; i++) {
    let parts = players[i].split("-");
    console.log(`${i + 1}. ${parts[0]} | ${parts[1]} | ${parts[2]}`);
  }
}

function pushPlayer(name, position) {
  let newId = "P" + String(players.length + 1).padStart(3, "0");
  players.push(`${newId}-${name}-${position}`);
}

printTeamRoster();
pushPlayer("Nguyễn Văn X", "Tiền đạo");
printTeamRoster();
