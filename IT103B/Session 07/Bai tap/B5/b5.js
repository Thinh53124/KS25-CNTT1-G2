let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];

function getAllPositions() {
  let positions = [];

  for (let i = 0; i < players.length; i++) {
    let position = players[i].split("-")[2];
    if (!positions.includes(position)) {
      positions.push(position);
    }
  }

  return positions;
}

function findPlayersWithLongestName() {
  let longestName = "";
  let maxLength = 0;

  for (let i = 0; i < players.length; i++) {
    let name = players[i].split("-")[1];
    if (name.length > maxLength) {
      maxLength = name.length;
      longestName = name;
    }
  }

  return longestName;
}

function countPlayersStartingWithLetter(letter) {
  let count = 0;
  let target = letter.toLowerCase();

  for (let i = 0; i < players.length; i++) {
    let name = players[i].split("-")[1];
    if (name.toLowerCase().startsWith(target)) {
      count++;
    }
  }

  return count;
}

console.log("Các vị trí trong đội:", getAllPositions());
console.log("Cầu thủ có tên dài nhất:", findPlayersWithLongestName());
console.log(
  "Số cầu thủ có tên bắt đầu bằng chữ H:",
  countPlayersStartingWithLetter("H"),
);
