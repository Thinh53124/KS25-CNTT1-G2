let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let numberOfReaders;

while (true) {
  numberOfReaders = Number(
    prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"),
  );

  if (
    !isNaN(numberOfReaders) &&
    numberOfReaders > 0 &&
    Number.isInteger(numberOfReaders)
  ) {
    break;
  } else {
    alert("Vui lòng nhập số nguyên dương hợp lệ!");
  }
}

for (let i = 0; i < numberOfReaders; i++) {
  let cardId;

  while (true) {
    cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);
    let isDuplicate = false;

    if (cardId === null || cardId.trim() === "") {
      alert("Mã thẻ không được để trống!");
    } else {
      for (let j = 0; j < readerCardIds.length; j++) {
        if (readerCardIds[j] === cardId) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        break;
      } else {
        alert("Mã thẻ đã tồn tại, vui lòng nhập mã khác!");
      }
    }
  }

  readerCardIds.push(cardId);

  let readerName;
  while (true) {
    readerName = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`);

    if (readerName !== null && readerName.trim() !== "") {
      break;
    } else {
      alert("Tên bạn đọc không được để trống!");
    }
  }
  readerNames.push(readerName);

  let bookCodes;
  while (true) {
    bookCodes = prompt("Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):");

    if (bookCodes !== null && bookCodes.trim() !== "") {
      break;
    } else {
      alert("Danh sách mã sách không được để trống!");
    }
  }
  borrowedBookCodes.push(bookCodes);

  let days;
  while (true) {
    days = Number(prompt("Nhập số ngày quá hạn:"));

    if (!isNaN(days) && days >= 0 && Number.isInteger(days)) {
      break;
    } else {
      alert("Số ngày quá hạn phải là số nguyên ≥ 0!");
    }
  }
  overdueDays.push(days);
}

console.log(`Danh sách bạn đọc quá hạn (${numberOfReaders} người):`);

for (let i = 0; i < numberOfReaders; i++) {
  console.log(
    `${i + 1}. Mã thẻ: ${readerCardIds[i]} | Tên: ${readerNames[i]} | ` +
      `Sách đang mượn: ${borrowedBookCodes[i]} | Quá hạn: ${overdueDays[i]} ngày`,
  );
}

let countOver10 = 0;
for (let i = 0; i < overdueDays.length; i++) {
  if (overdueDays[i] >= 10) {
    countOver10++;
  }
}
console.log(`\nTổng số bạn đọc quá hạn ≥ 10 ngày: ${countOver10} người`);

let bothJSandPYT = "";

for (let i = 0; i < borrowedBookCodes.length; i++) {
  let hasJS = false;
  let hasPYT = false;
  let books = borrowedBookCodes[i].split(",");

  for (let j = 0; j < books.length; j++) {
    if (books[j].startsWith("JS")) {
      hasJS = true;
    }
    if (books[j].startsWith("PYT")) {
      hasPYT = true;
    }
  }

  if (hasJS && hasPYT) {
    bothJSandPYT += readerCardIds[i] + ", ";
  }
}

if (bothJSandPYT !== "") {
  console.log(
    `\nCác bạn đọc đang mượn cả sách JS* và PYT*: ${bothJSandPYT.slice(0, -2)}`,
  );
} else {
  console.log("\nCác bạn đọc đang mượn cả sách JS* và PYT*: Không có");
}

let maxOverdue = overdueDays[0];
let maxIndex = 0;

for (let i = 1; i < overdueDays.length; i++) {
  if (overdueDays[i] > maxOverdue) {
    maxOverdue = overdueDays[i];
    maxIndex = i;
  }
}

console.log(
  `\nBạn đọc có số ngày quá hạn cao nhất: ${readerNames[maxIndex]} (${maxOverdue} ngày)`,
);

let countOver7 = 0;
for (let i = 0; i < overdueDays.length; i++) {
  if (overdueDays[i] >= 7) {
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