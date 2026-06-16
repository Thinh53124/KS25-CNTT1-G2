const squad = [
  ["Nguyen Van A", 10, "FW"],
  ["Tran Van B", 5, "MF"],
  ["Le Van C", 2, "DF"],
  ["Pham Van D", 12, "FW"],
  ["Hoang Van E", 0, "GK"],
  ["Dang Van F", 7, "MF"],
];

let choose;

do {
  let input;

  do {
    input = prompt(`Nhập chức năng bạn muốn: 
    1. Xem danh sách
    2. Tìm kiếm (Find)
    3. Lọc vị trí (Filter)
    4. Tổng bàn thắng (Reduce)
    5. Kiểm tra hiệu suất (Some/Every)
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
      displayPlayer();
      break;

    case 2:
      searchForPlayer();
      break;

    case 3:
      filterByIndex();
      break;

    case 4:
      totalGoals();
      break;

    case 5:
      checkPerformance();
      break;

    default:
      alert("Vui lòng chọn đúng chức năng (0-5)!");
      break;
  }
} while (choose !== 0);

function displayPlayer() {
  squad.forEach((value) => {
    console.log(
      `Tên: ${value[0]} | Vị trí: ${value[2]} | Bàn thắng: ${value[1]}`,
    );
  });
}

function searchForPlayer() {
  let name;

  do {
    name = prompt("Nhập tên cầu thủ cần tìm:");
    if (name === null || name.trim() === "") {
      alert("Tên không được để trống!");
    }
  } while (name === null || name.trim() === "");

  let result = squad.find(
    (value) => value[0].toLowerCase() === name.trim().toLowerCase(),
  );

  if (result) {
    console.log("Thông tin cầu thủ:", result);
  } else {
    console.log("Không tìm thấy cầu thủ!");
  }
}

function filterByIndex() {
  let position;

  do {
    position = prompt("Nhập vị trí cần lọc (FW/MF/DF/GK):");

    if (
      position === null ||
      position.trim() === "" ||
      !["FW", "MF", "DF", "GK"].includes(position.toUpperCase())
    ) {
      alert("Chỉ được nhập FW, MF, DF hoặc GK!");
      position = "";
    }
  } while (position === "");

  let result = squad.filter((value) => value[2] === position.toUpperCase());

  console.log("KẾT QUẢ LỌC:");
  result.forEach((player) => {
    console.log(`${player[0]} - ${player[1]} bàn`);
  });
}

function totalGoals() {
  let total = squad.reduce((sum, value) => sum + value[1], 0);
  console.log("Tổng số bàn thắng toàn đội:", total);
}

function checkPerformance() {
  let hasZero = squad.some((value) => value[1] === 0);
  let allScored = squad.every((value) => value[1] > 0);

  if (hasZero) {
    console.log("Có cầu thủ chưa ghi bàn");
  }

  if (allScored) {
    console.log("Tất cả cầu thủ đều đã ghi bàn");
  } else {
    console.log("Chưa phải tất cả cầu thủ đều ghi bàn");
  }
}
