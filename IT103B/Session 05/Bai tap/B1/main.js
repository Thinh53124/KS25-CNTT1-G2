let returnedBooks = [];
let numberOfBooks = Number(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));

if (isNaN(numberOfBooks) || numberOfBooks <= 0) {
  alert("Vui lòng nhập số nguyên dương!!");
} else {
  for (let i = 0; i < numberOfBooks; i++) {
    let bookName = prompt("Nhập tên cuốn sách thứ " + (i + 1) + ":");
    returnedBooks.push(bookName);
  }

  document.writeln(
    "Tổng số sách đã được trả: " + returnedBooks.length + "<br>",
  );
  document.writeln("Danh sách sách đã trả:" + "<br>");

  for (let i = 0; i < returnedBooks.length; i++) {
    document.writeln(i + 1 + ". " + returnedBooks[i] + "<br>");
  }
}
