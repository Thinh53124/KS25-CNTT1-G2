let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
  { id: 3, name: "Le Van C", goals: 0, position: "DF" },
  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
  { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];

do {
  let input;

  do {
    input = prompt(`--- FOOTBALL MANAGER PRO ---
    1. Xem đội hình
    2. Thêm cầu thủ
    3. Tìm kiếm (theo ID)
    4. Cập nhật bàn thắng
    5. Xóa cầu thủ (Chuyển nhượng)
    0. Thoát`);

    if (input === null || input.trim() === "" || isNaN(input)) {
      alert("Vui lòng nhập số hợp lệ!");
    }
  } while (input === null || input.trim() === "" || isNaN(input));

  choose = Number(input);

  switch (choose) {
    case 0:
      alert("Đang thoát chương trình");
      break;

    case 1:
      displayPlayers();
      break;

    case 2:
      addPlayer();
      break;

    case 3:
      findById();
      break;

    case 4:
      updateGoals()
      break;

    case 5:
      
      break;

    default:
      alert("Vui lòng nhập số hợp lệ!");
      break;
  }
} while (choose !== 0);

function displayPlayers() {
    for (let i = 0; i < squad.length; i++) {
        console.log(
            `Mã: ${squad[i].id} - ${squad[i].name} (${squad[i].position} - ${squad[i].goals})`
        );
    }
}

function addPlayer() {
    let name = prompt("Nhập tên cầu thủ");
    let position = prompt("Nhập vị trí cầu thủ");
    let goals = prompt("Nhập số bàn thắng cầu thủ");
    let id = Math.floor(Math.random() * 999999) + Date.now();
    //Khởi tạo đối tượng
    let new_player = {
        id: id,
        name: name,
        goals: goals,
        position: position,
    };
    squad.push(new_player);
    alert("Thêm cầu thủ thành công!");
}

function findById() {
    let id = prompt("Nhập id cầu thủ cần tìm");
    let result = squad.find((item)=>item.id==id);
    if(result){
        alert("có",result);
    }else{
        alert(`Không tìm thấy cầu thủ với id: ${id}`);
    }
}

function updateGoals() {
    let id = prompt("Nhập id cầu thủ  vừa ghi bàn");
    
}