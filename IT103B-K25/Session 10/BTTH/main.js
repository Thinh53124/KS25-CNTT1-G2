let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },

  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },

  { id: 3, name: "Le Van C", goals: 0, position: "DF" },

  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },

  { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];

let choice;

do {
  choice = +prompt(`--- FOOTBALL MANAGER PRO ---

1. Xem đội hình

2. Thêm cầu thủ

3. Tìm kiếm (theo ID)

4. Cập nhật bàn thắng

5. Xóa cầu thủ (Chuyển nhượng)

0. Thoát`);
  switch (choice) {
    case 0:
      break;
    case 1:
      displayPlayers();
      break;
    case 2:
      addPlayers();
      break;
    case 3:
      findPlayer();
      break;
    case 4:
      updatePlayer();
      break;
    case 5:
      deletePlayer();
      break;
    default:
      alert("Lựa chọn không hợp lệ!!!");
      break;
  }
} while (choice != 0);

function displayPlayers() {
  for (let i = 0; i < squad.length; i++) {
    console.log(
      `Mã: ${squad[i].id} - ${squad[i].name} (${squad[i].position}): ${squad[i].goals} bàn`,
    );
  }
}

function addPlayers() {
  let name = prompt("Nhập tên cầu thủ");
  let position = prompt("Nhập vị trí của cầu thủ");
  let goal = +prompt("Nhập số bàn thắng của cầu thủ");
  let id = Math.floor(Math.random() * 9999999) + Date.now();
  let new_player = {
    id: id,
    name: name,
    position: position,
    goals: goal,
  };
  squad.push(new_player);
  alert("Thêm cầu thủ thành công");
}

function findPlayer() {
  let id = prompt("Nhập id cầu thủ cần tìm kiếm");
  let result = squad.find((value) => value.id == id);
  if (result) {
    alert(`Có tìm thấy cầu thủ có id: ${id}`);
  } else {
    alert(`Không tìm thấy cầu thủ có id: ${id}`);
  }
}

let updatePlayer = () => {
  let wannaUpdate = +prompt("Vui lòng nhập ID mà Cầu thủ vừa ghi bàn !");
  let result1 = squad.findIndex((value) => value.id === wannaUpdate);

  if (result1 !== -1) {
    squad[result1].goals++;
    alert(
      `Đã cập nhập bàn thắng cho cầu thủ ${squad[result1].name} thành ${squad[result1].goals}`,
    );
  } else {
    alert("Không tìm thấy cầu thủ!");
  }
};

let deletePlayer = () => {
  let wannaDeletePlayer = +prompt(
    "Vui lòng nhập ID mà Cầu thủ muốn chuyển nhượng !",
  );
  let result2 = squad.findIndex((value) => value.id === wannaDeletePlayer);

  if (result2 !== -1) {
    squad.splice(result2, 1);
    alert("Đã chuyển nhượng thành công !");
  } else {
    alert("Không tìm thấy cầu thủ!");
  }
};
