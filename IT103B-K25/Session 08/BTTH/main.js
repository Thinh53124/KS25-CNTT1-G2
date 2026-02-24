const squad = [
  ["Nguyen Van A", 10, "FW"],
  ["Tran Van B", 5, "MF"],
  ["Le Van C", 2, "DF"],
  ["Pham Van D", 12, "FW"],
  ["Hoang Van E", 0, "GK"],
  ["Dang Van F", 7, "MF"],
];
printMenu();

function printMenu() {
  let choose;
  do {
    choose = +prompt(`--- QUẢN LÝ ĐỘI BÓNG ---

1. Xem danh sách

2. Tìm kiếm (Find)

3. Lọc vị trí (Filter)

4. Tổng bàn thắng (Reduce)

5. Kiểm tra hiệu suất (Some/Every)

0. Thoát`);
    switch (choose) {
      case 1:
        let result = displaySquard(squad);
        console.log(result);
        break;
      case 2:
        let nameWannaFind;
        while (true) {
          nameWannaFind = prompt("Vui lòng nhập tên muốn tìm");
          if (validateYourName(nameWannaFind)) {
            findName(squad, nameWannaFind);
            break;
          } else {
            alert("Tên bạn không có trong mảng !");
          }
        }
        break;
      case 3:
        let result1 = filterPlayer(squad);
        console.log(result1);
        break;
      case 4:
        let sum = totalGoals(squad);
        console.log(`Vậy tổng bàn thắng hiện tại của cả đội là : ${sum}`);
        break;
      case 5:
        checkEfficiency(squad);
        break;
      case 0:
        alert("Cảm ơn vì đã sử dụng chương trình !");
        break;
      default:
        alert("Số bạn chọn không hợp lý !");
    }
  } while (choose !== 0);
}

function totalGoals(arr) {
  return arr.reduce((acc, ele) => acc + ele[1], 0);
}

function filterPlayer(arr) {
  let position;
  while (true) {
    position = prompt(
      "Vui lòng nhập vị trí mà bạn cần tìm kiếm (FW, MF, DF, GK): !",
    );
    if (!position) {
      alert("Không được để trống !");
      continue;
    }
    position = position.trim().toUpperCase();
    const filtered = arr.filter((player) => player[2] === position);
    if (filtered.length === 0) {
      alert("Không có vị trí này trong đội !");
    } else {
      return filtered.map((player) => `${player[0]} - ${player[1]} bàn`);
    }
  }
}

function displaySquard(arr) {
  console.log("BẢNG TÊN CÁC CẦU THỦ");
  return arr.forEach((num) => {
    console.log(
      "Tên: " +
        num[0] +
        " - " +
        "Vị trí: " +
        num[2] +
        " - " +
        num[1] +
        " Bàn thắng",
    );
  });
}

function checkEfficiency(arr) {
  while (true) {
    let choice = +prompt(` ==== KIỂM TRA ==== 
        1. Kiểm tra có cầu thủ nào chưa ghi bàn (0 bàn) 
        2. Kiểm tra có phải tất cả cầu thủ đều đã ghi bàn (> 0)`);
    if (choice > 2 || choice < 1) {
      alert("Số bạn chọn không hợp lý !");
    } else {
      switch (choice) {
        case 1:
          if (arr.some((ele) => ele[1] === 0)) {
            alert("Có cầu thủ chưa ghi bàn !");
          }
          break;
        case 2:
          if (arr.every((ele) => ele[1] > 0)) {
            alert("Tất cả cầu thủ đều ghi bàn !");
          } else {
            alert("Có một cầu thủ có số ghi bàn = 0");
          }
          break;
      }
      break;
    }
  }
}

function findName(arr, something) {
  const player = arr.find((u) => u[0] === something);
  console.log(player);
}

function validateYourName(name) {
  if (!name) {
    alert("Tên bạn không được bỏ trống");
    return false;
  }
  name = name.trim();
  if (name.length === 0) {
    alert("Tên không được để trống !");
    return false;
  }
  if (/\d/.test(name)) {
    alert("Tên không được chứa số !");
    return false;
  }
  if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(name)) {
    alert("Tên không được chứa ký tự đặc biệt !");
    return false;
  }

  return true;
}
