let playerList = [];
let goalList = [];

let choice;
do {
  choice = prompt(`
    --- QUẢN LÝ ĐỘI BÓNG ---
    1. Nhập cầu thủ mới
    2. Xem danh sách đội hình
    3. Xem thành tích toàn đội
    4. Tìm Vua phá lưới
    0. Thoát
    Mời nhập lựa chọn`);
  switch (choice) {
    case 0:
      console.log("Thoát chương trình");
      break;
    case 1:
      let name = prompt("Nhập cầu thủ mới");
      let goal = prompt("Nhập số bàn thắng");
      addPlayer(name, goal);
      break;
    case 2:
      showSquad();
      break;
    case 3:
      console.log(`Tổng số bàn thắng đội ghi được là: `);

      break;
    case 4:
        for (let i = 0; i < goalList.length; i++) {
            if(goalList[i]===findMostGoals(goalList)){
                console.log(`Cầu thủ ${playerList[i]} ghi được ${goalList[i]}`);
            }            
        }
      break;
    default:
      console.log("Lựa chọn không hợp lệ!");
      break;
  }
} while (choice != 0);

function addPlayer(name, goal) {
  playerList.push(name);
  goalList.push(goal);
}

function showSquad() {
  for (let i = 0; i < playerList.length; i++) {
    console.log(`${i + 1}.${playerList[i]}-${goalList[i]} bàn!`);
  }
}

function getTotalGoals() {
  let sum = 0;
  for (let i = 0; i < goalList.length; i++) {
    sum += goalList[i];
  }
  return sum;
}

function findMostGoals(goalArray) {
  let max = goalArray[0];
  for (let i = 1; i < goalArray.length; i++) {
    if (goalArray[i] > max) {
      max = goalArray[i];
    }
  }
  return max;
}
