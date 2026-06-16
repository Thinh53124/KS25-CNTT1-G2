let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
  "Nguyễn Văn A",
  "Trần Thị B",
  "Lê Văn C",
  "Phạm Văn D",
  "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

let updateId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

let index = playerIds.indexOf(updateId);

if (index !== -1) {
  let newName = prompt("Nhập tên mới cho cầu thủ:");
  let newNumber = Number(prompt("Nhập số áo mới (1–99):"));

  if (isNaN(newNumber) || newNumber < 1 || newNumber > 99) {
    console.log("Số áo không hợp lệ!");
  } else {
    playerNames[index] = newName;
    playerJerseyNumbers[index] = newNumber;

    console.log("Cập nhật thành công!");
    console.log("Danh sách cầu thủ sau khi cập nhật:");

    for (let i = 0; i < playerIds.length; i++) {
      console.log(
        `${i + 1}. ${playerIds[i]} - ${playerNames[i]} - Số áo: ${playerJerseyNumbers[i]}`,
      );
    }
  }
} else {
  console.log("Không tìm thấy cầu thủ với mã này!");
}
