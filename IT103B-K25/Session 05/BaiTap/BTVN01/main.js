let returnedBooks = [];

let numberOfBooks = Number(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));

for (let i = 0; i < numberOfBooks; i++) {
  let bookName = prompt("Nhập tên cuốn sách thứ " + (i + 1) + ":");
  returnedBooks.push(bookName);
}

console.log("Tổng số sách đã được trả: " + returnedBooks.length);
console.log("Danh sách sách đã trả:");

for (let i = 0; i < returnedBooks.length; i++) {
  console.log((i + 1) + ". " + returnedBooks[i]);
}
