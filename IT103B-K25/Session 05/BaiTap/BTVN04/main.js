let booksId = [];
let booksName = [];
let bookStatus = [];

let numberOfBooks;

while (true) {
  numberOfBooks = Number(prompt("Nhập số sách ban đầu:"));
  if (
    !isNaN(numberOfBooks) &&
    numberOfBooks > 0 &&
    Number.isInteger(numberOfBooks)
  ) {
    break;
  }
  alert("Vui lòng nhập số nguyên dương!");
}

for (let i = 0; i < numberOfBooks; i++) {
  let id;
  while (true) {
    id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    if (id && id.trim() !== "") break;
    alert("Mã sách không được để trống!");
  }
  booksId.push(id);

  let name;
  while (true) {
    name = prompt(`Nhập tên sách thứ ${i + 1}:`);
    if (name && name.trim() !== "") break;
    alert("Tên sách không được để trống!");
  }
  booksName.push(name);

  let status;
  while (true) {
    status = Number(
      prompt("Nhập tình trạng:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp"),
    );
    if (status === 1 || status === 2 || status === 3) break;
    alert("Chỉ được chọn 1-3!");
  }
  bookStatus.push(status);
}

console.log(`Danh sách ban đầu (${booksId.length} cuốn):`);
for (let i = 0; i < booksId.length; i++) {
  let statusText = "";
  if (bookStatus[i] === 1) statusText = "Hỏng nhẹ";
  else if (bookStatus[i] === 2) statusText = "Hỏng nặng";
  else statusText = "Cần sửa gấp";

  console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${statusText}`);
}

let removedCount = 0;

while (true) {
  let choice = Number(
    prompt(
      "Chọn chức năng:\n1. Sửa tình trạng sách\n2. Loại bỏ sách\n0. Kết thúc",
    )
  );

  if (choice === 0) break;

  if (choice === 1) {
    let editId = prompt("Nhập mã sách cần sửa:");
    let found = false;

    for (let i = 0; i < booksId.length; i++) {
      if (booksId[i] === editId) {
        let newStatus;
        while (true) {
          newStatus = Number(
            prompt(
              "Chọn tình trạng mới:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp\n4. Đã sửa xong\n5. Loại bỏ",
            )
          );
          if (newStatus >= 1 && newStatus <= 5) {
            break;
          }
          alert("Chọn từ 1 đến 5!");
        }

        if (newStatus === 5) {
          booksId.splice(i, 1);
          booksName.splice(i, 1);
          bookStatus.splice(i, 1);
          removedCount++;
        } else {
          bookStatus[i] = newStatus;
        }

        found = true;
        break;
      }
    }

    if (!found) alert("Không tìm thấy mã sách!");

    console.log("Danh sách hiện tại:");
    for (let i = 0; i < booksId.length; i++) {
      let statusText = "";
      if (bookStatus[i] === 1) {
        statusText = "Hỏng nhẹ";
      } else if (bookStatus[i] === 2) {
        statusText = "Hỏng nặng";
      } else if (bookStatus[i] === 3) {
        statusText = "Cần sửa gấp";
      } else {
        statusText = "Đã sửa xong";
      }

      console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${statusText}`);
    }
  }

  if (choice === 2) {
    let deleteId = prompt("Nhập mã sách cần xóa:");
    let found = false;

    for (let i = 0; i < booksId.length; i++) {
      if (booksId[i] === deleteId) {
        booksId.splice(i, 1);
        booksName.splice(i, 1);
        bookStatus.splice(i, 1);
        removedCount++;
        found = true;
        break;
      }
    }

    if (!found) alert("Không tìm thấy mã sách!");

    console.log("Danh sách hiện tại:");
    for (let i = 0; i < booksId.length; i++) {
      let statusText = "";
      if (bookStatus[i] === 1) {
        statusText = "Hỏng nhẹ";
      } else if (bookStatus[i] === 2) {
        statusText = "Hỏng nặng";
      } else if (bookStatus[i] === 3) {
        statusText = "Cần sửa gấp";
      } else {
        statusText = "Đã sửa xong";
      }

      console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${statusText}`);
    }
  }
}

let fixedCount = 0;
for (let i = 0; i < bookStatus.length; i++) {
  if (bookStatus[i] === 4) fixedCount++;
}

console.log("Tổng số sách còn lại:", booksId.length);
console.log("Số sách đã sửa xong:", fixedCount);
console.log("Số sách đã loại bỏ:", removedCount);

if (booksId.length > 0) {
  console.log("Danh sách sách còn lại:");
  for (let i = 0; i < booksId.length; i++) {
    let statusText = "";
    if (bookStatus[i] === 1) {
      statusText = "Hỏng nhẹ";
    } else if (bookStatus[i] === 2) {
      statusText = "Hỏng nặng";
    } else if (bookStatus[i] === 3) {
      statusText = "Cần sửa gấp";
    } else {
      statusText = "Đã sửa xong";
    }

    console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${statusText}`);
  }
} else {
  console.log("Không còn sách nào.");
}