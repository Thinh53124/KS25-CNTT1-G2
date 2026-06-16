let booksId = [];
let booksName = [];
let bookStatus = [];

let statusList = [
  "Hỏng nhẹ",
  "Hỏng nặng",
  "Cần sửa gấp",
  "Đã sửa xong",
  "Loại bỏ",
];

let totalBooks = Number(
  prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"),
);

while (isNaN(totalBooks) || totalBooks <= 0) {
  totalBooks = Number(prompt("Vui lòng nhập số nguyên dương!"));
}

for (let i = 0; i < totalBooks; i++) {
  let id = "";
  while (id.trim() === "") {
    id = prompt("Nhập mã sách thứ " + (i + 1) + ":");
  }
  booksId.push(id.trim());

  let name = "";
  while (name.trim() === "") {
    name = prompt("Nhập tên sách thứ " + (i + 1) + ":");
  }
  booksName.push(name.trim());

  let status = "";
  while (!["1", "2", "3"].includes(status)) {
    status = prompt(
      "Chọn tình trạng:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp",
    );
  }
  bookStatus.push(statusList[Number(status) - 1]);
}

document.writeln("--- DANH SÁCH BAN ĐẦU ---");
for (let i = 0; i < booksId.length; i++) {
  document.writeln(
    i + 1 + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i],
  );
}

let action;

do {
  action = prompt(
    "Chọn thao tác:\n1. Sửa tình trạng sách\n2. Loại bỏ sách\n0. Kết thúc",
  );

  if (action === "1") {
    let searchId = prompt("Nhập mã sách cần sửa:");
    let index = -1;

    for (let i = 0; i < booksId.length; i++) {
      if (booksId[i] === searchId) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      let newStatus = "";
      while (!["1", "2", "3", "4", "5"].includes(newStatus)) {
        newStatus = prompt(
          "Chọn tình trạng mới:\n" +
            "1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp\n4. Đã sửa xong\n5. Loại bỏ",
        );
      }
      bookStatus[index] = statusList[Number(newStatus) - 1];
      alert("Cập nhật thành công");
    } else {
      alert("Không tìm thấy mã sách");
    }
  }

  if (action === "2") {
    let searchId = prompt("Nhập mã sách cần xóa:");
    let index = -1;

    for (let i = 0; i < booksId.length; i++) {
      if (booksId[i] === searchId) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      booksId.splice(index, 1);
      booksName.splice(index, 1);
      bookStatus.splice(index, 1);
      alert("Đã xóa sách khỏi danh sách");
    } else {
      alert("Không tìm thấy mã sách");
    }
  }

  if (action !== "0") {
    document.writeln("--- DANH SÁCH HIỆN TẠI ---");
    for (let i = 0; i < booksId.length; i++) {
      document.writeln(
        i +
          1 +
          ". " +
          booksId[i] +
          " - " +
          booksName[i] +
          " - " +
          bookStatus[i],
      );
    }
  }
} while (action !== "0");

let repairedCount = 0;
let removedCount = 0;

for (let i = 0; i < bookStatus.length; i++) {
  if (bookStatus[i] === "Đã sửa xong") repairedCount++;
  if (bookStatus[i] === "Loại bỏ") removedCount++;
}

document.writeln("--- SAU KHI CHỈNH SỬA ---");
document.writeln("Tổng số sách còn lại: " + booksId.length);
document.writeln("Số sách Đã sửa xong: " + repairedCount);
document.writeln("Số sách Loại bỏ: " + removedCount);

if (booksId.length > 0) {
  document.writeln("Danh sách sách còn lại:");
  for (let i = 0; i < booksId.length; i++) {
    document.writeln(
      i + 1 + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i],
    );
  }
} else {
  document.writeln("Không còn sách nào trong danh sách");
}
