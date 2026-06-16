let playerIds = [];
let playerPositions = [];

let n = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

if (isNaN(n) || n <= 0) {
  console.log("Số lượng cầu thủ không hợp lệ!");
} else {
  for (let i = 0; i < n; i++) {
    console.log(`Nhập cầu thủ ${i + 1}:`);

    let id;
    do {
      id = prompt("Mã cầu thủ:");
      if (playerIds.indexOf(id) !== -1) {
        alert("Mã cầu thủ đã tồn tại, vui lòng nhập lại!");
      }
    } while (playerIds.indexOf(id) !== -1);

    let posNumber;
    let position;
    do {
      posNumber = Number(
        prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo)"),
      );

      switch (posNumber) {
        case 1:
          position = "Thủ môn";
          break;
        case 2:
          position = "Hậu vệ";
          break;
        case 3:
          position = "Tiền vệ";
          break;
        case 4:
          position = "Tiền đạo";
          break;
        default:
          alert("Vị trí không hợp lệ, nhập lại!");
      }
    } while (!position);

    playerIds.push(id);
    playerPositions.push(position);
  }

  function printTeamRoster() {
    console.log(`\nĐội bóng hiện tại (${playerIds.length} cầu thủ):`);
    for (let i = 0; i < playerIds.length; i++) {
      console.log(`${i + 1}. ${playerIds[i]} - ${playerPositions[i]}`);
    }
  }

  function findPlayersByPosition(position) {
    let indexes = [];
    for (let i = 0; i < playerPositions.length; i++) {
      if (playerPositions[i] === position) {
        indexes.push(i);
      }
    }
    return indexes;
  }

  let searchPosNumber = Number(
    prompt(
      "Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn , 2: Hậu vệ ,3: Tiền vệ, 4: Tiền đạo)",
    ),
  );

  let searchPosition = "";
  switch (searchPosNumber) {
    case 1:
      searchPosition = "Thủ môn";
      break;
    case 2:
      searchPosition = "Hậu vệ";
      break;
    case 3:
      searchPosition = "Tiền vệ";
      break;
    case 4:
      searchPosition = "Tiền đạo";
      break;
  }

  printTeamRoster();

  let result = findPlayersByPosition(searchPosition);
  console.log(`\nSố cầu thủ ở vị trí ${searchPosition}: ${result.length}`);
  console.log(
    `Các chỉ số cầu thủ ở vị trí ${searchPosition}: ${result.join(", ")}`,
  );
}
