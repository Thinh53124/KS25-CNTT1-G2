let readerId = [];
let readerName = [];
let borrowedBooks = [];
let overdueDays = [];

let n;
while (true) {
  n = Number(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));
  if (isNaN(n) || n <= 0) {
    alert("Vui lòng nhập một số nguyên dương!");
  } else {
    break;
  }
}

for (let i = 0; i < n; i++) {
  /* --- Nhập mã thẻ (không trống, không trùng) --- */
  let id;
  while (true) {
    id = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);
    if (!id || id.trim() === "") {
      alert("Mã thẻ không được để trống!");
      continue;
    }

    let duplicate = false;
    for (let j = 0; j < readerId.length; j++) {
      if (readerId[j] === id.trim()) {
        duplicate = true;
        break;
      }
    }

    if (duplicate) {
      alert("Mã thẻ này đã tồn tại!");
    } else {
      id = id.trim();
      break;
    }
  }
  readerId.push(id);

  let name;
  while (true) {
    name = prompt(`Nhập tên bạn đọc cho thẻ ${id}:`);
    if (!name || name.trim() === "") {
      alert("Tên bạn đọc không được để trống!");
    } else {
      name = name.trim();
      break;
    }
  }
  readerName.push(name);

  let books;
  while (true) {
    books = prompt("Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):");
    if (!books || books.trim() === "") {
      alert("Danh sách sách mượn không được để trống!");
    } else {
      books = books.trim();
      break;
    }
  }
  borrowedBooks.push(books);

  let days;
  while (true) {
    days = Number(prompt(`Nhập số ngày quá hạn của ${name}:`));
    if (isNaN(days) || days < 0) {
      alert("Số ngày quá hạn phải là số nguyên ≥ 0!");
    } else {
      break;
    }
  }
  overdueDays.push(days);
}

console.log("--- BÁO CÁO VI PHẠM ---");

let countOverdue10 = 0;
for (let i = 0; i < overdueDays.length; i++) {
  if (overdueDays[i] >= 10) {
    countOverdue10++;
  }
}
console.log("a. Tổng số bạn đọc quá hạn >= 10 ngày: " + countOverdue10);

let jsPytReaders = [];
for (let i = 0; i < borrowedBooks.length; i++) {
  let arr = borrowedBooks[i].split(",");
  let hasJS = false;
  let hasPYT = false;

  for (let j = 0; j < arr.length; j++) {
    let code = arr[j].trim().toUpperCase();
    if (code.startsWith("JS")) hasJS = true;
    if (code.startsWith("PYT")) hasPYT = true;
  }

  if (hasJS && hasPYT) {
    jsPytReaders.push(readerId[i]);
  }
}

console.log(
  "b. Mã thẻ bạn đọc mượn cả sách JS và PYT: " +
    (jsPytReaders.length > 0 ? jsPytReaders.join(", ") : "Không có"),
);

let maxIndex = 0;
for (let i = 1; i < overdueDays.length; i++) {
  if (overdueDays[i] > overdueDays[maxIndex]) {
    maxIndex = i;
  }
}
console.log(
  `c. Bạn đọc quá hạn lâu nhất: ${readerName[maxIndex]} (${overdueDays[maxIndex]} ngày)`,
);

let countOverdue7 = 0;
for (let i = 0; i < overdueDays.length; i++) {
  if (overdueDays[i] >= 7) {
    countOverdue7++;
  }
}

if (countOverdue7 === 0) {
  console.log("d. Cảnh báo: Tình hình trả sách hôm nay khá tốt!");
} else if (countOverdue7 <= 4) {
  console.log("d. Cảnh báo: Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
  console.log(
    "d. Cảnh báo: Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!",
  );
}
