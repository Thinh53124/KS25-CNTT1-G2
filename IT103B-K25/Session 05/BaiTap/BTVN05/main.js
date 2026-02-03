let cardIds = [];
let names = [];
let bookCodes = [];
let daysOverdue = [];

let numReaders;

do {
  numReaders = Number(
    prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"),
  );
  if (isNaN(numReaders) || numReaders <= 0 || !Number.isInteger(numReaders)) {
    alert("Vui lòng nhập số nguyên dương hợp lệ!");
  }
} while (isNaN(numReaders) || numReaders <= 0 || !Number.isInteger(numReaders));

for (let i = 0; i < numReaders; i++) {
  let cardId;
  do {
    cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);
    if (cardId === null || cardId.trim() === "") {
      alert("Mã thẻ không được để trống!");
      continue;
    }
    if (cardIds.includes(cardId)) {
      alert("Mã thẻ đã tồn tại, vui lòng nhập mã khác!");
      continue;
    }
    break;
  } while (true);
  cardIds.push(cardId);

  let name;
  do {
    name = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`);
    if (name !== null && name.trim() !== "") {
      break;
    }
    alert("Tên bạn đọc không được để trống!");
  } while (true);
  names.push(name);

  let codes;
  do {
    codes = prompt(`Nhập các mã sách đang mượn (cách nhau bằng dấu phẩy):`);
    if (codes !== null && codes.trim() !== "") {
      break;
    }
    alert("Danh sách mã sách không được để trống!");
  } while (true);
  bookCodes.push(codes);

  let days;
  do {
    days = Number(prompt("Nhập số ngày quá hạn:"));
    if (!isNaN(days) && days >= 0 && Number.isInteger(days)) {
      break;
    }
    alert("Số ngày quá hạn phải là số nguyên ≥ 0!");
  } while (true);
  daysOverdue.push(days);
}

console.log(`\nDanh sách bạn đọc quá hạn (${numReaders} người):`);

for (let i = 0; i < numReaders; i++) {
  console.log(
    `${i + 1}. Mã thẻ: ${cardIds[i]} | Tên: ${names[i]} | ` +
      `Sách đang mượn: ${bookCodes[i]} | Quá hạn: ${daysOverdue[i]} ngày`,
  );
}

let countOver10 = 0;
for (let i = 0; i < daysOverdue.length; i++) {
  if (daysOverdue[i] >= 10) {
    countOver10++;
  }
}
console.log(`\nTổng số bạn đọc quá hạn ≥ 10 ngày: ${countOver10} người`);

let bothJSandPYT = "";
for (let i = 0; i < bookCodes.length; i++) {
  let hasJS = false;
  let hasPYT = false;
  let books = bookCodes[i].split(",");

  for (let j = 0; j < books.length; j++) {
    if (books[j].trim().startsWith("JS")) {
      hasJS = true;
    }
    if (books[j].trim().startsWith("PYT")) {
      hasPYT = true;
    }
  }

  if (hasJS && hasPYT) {
    bothJSandPYT += cardIds[i] + ", ";
  }
}

if (bothJSandPYT !== "") {
  console.log(
    `\nCác bạn đọc đang mượn cả sách JS* và PYT*: ${bothJSandPYT.slice(0, -2)}`,
  );
} else {
  console.log("\nKhông có bạn đọc nào mượn cả sách JS* và PYT*");
}

let maxOverdue = daysOverdue[0];
let maxIndex = 0;

for (let i = 1; i < daysOverdue.length; i++) {
  if (daysOverdue[i] > maxOverdue) {
    maxOverdue = daysOverdue[i];
    maxIndex = i;
  }
}

console.log(
  `\nBạn đọc có số ngày quá hạn cao nhất: ${names[maxIndex]} (${maxOverdue} ngày)`,
);

let countOver7 = 0;
for (let i = 0; i < daysOverdue.length; i++) {
  if (daysOverdue[i] >= 7) {
    countOver7++;
  }
}

console.log("");

if (countOver7 === 0) {
  console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (countOver7 >= 1 && countOver7 <= 4) {
  console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
  console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}