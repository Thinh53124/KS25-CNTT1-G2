let list = [];
let count = 0;

let question = Number(prompt("Hôm nay có bao nhiêu sách bị trả muộn?"));

while (isNaN(question) || question <= 0) {
  question = Number(prompt("Vui lòng nhập số nguyên dương!"));
}

for (let i = 0; i < question; i++) {
  let name = "";
  while (name.trim() === "") {
    name = prompt("Nhập tên sách bị trả muộn thứ " + (i + 1) + ":");
  }
  list.push(name.trim());
}

document.writeln("Tổng số sách bị trả muộn là: " + question + "<br>");
document.writeln("Danh sách các sách bị trả muộn:<br>");

for (let i = 0; i < question; i++) {
  document.writeln(i + 1 + ". " + list[i] + "<br>");
}

for (let i = 0; i < question; i++) {
  if (list[i].length > 20) {
    count++;
  }
}

document.writeln("Số lượng sách có tên dài hơn 20 ký tự là: " + count);
