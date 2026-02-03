let returnedLateBooks = [];
let numberOfBooks;

do {
  numberOfBooks = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?");
  if (numberOfBooks < 1 || isNaN(numberOfBooks)) {
    alert("Số cuốn sách không hợp lệ, vui lòng nhập lại!!!");
  }
} while (numberOfBooks < 1 || isNaN(numberOfBooks));

for (let i = 0; i < numberOfBooks; i++) {
  let bookName = prompt("Nhập tên cuốn sách bị trả muộn thứ " + (i + 1) + ":");
  returnedLateBooks.push(bookName);
}

console.log("Tổng số sách bị trả muộn: " + returnedLateBooks.length);
console.log("Danh sách sách bị trả muộn:");

for (let i = 0; i < returnedLateBooks.length; i++) {
  console.log(i + 1 + ". " + returnedLateBooks[i]);
}
let count = 0;
for (let i = 0; i < numberOfBooks; i++) {
  if (returnedLateBooks[i].length > 20) {
    count++;
  }
}
console.log("Số lượng sách có tên dài hơn 20 ký tự là: " + count);
