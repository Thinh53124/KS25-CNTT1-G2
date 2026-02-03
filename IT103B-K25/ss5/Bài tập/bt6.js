let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];
let overdueNiggas = 0;

let amount = Number(prompt(`Nhập số lượng người cần duyệt`));

for (let i = 0; i < amount; i++) {
  readerCardIds.push(prompt(`Nổ thẻ`));
  readerNames.push(prompt(`Nổ tên`));
  borrowedBookCodes.push(
    prompt(`Nhập chuỗi các mã sách đang mượn, cách nhau bởi dấu phẩy`),
  );
  overdueDays.push(Number(prompt(`Nhập số ngày quá hạn`)));
}

console.log(`Số bạn đọc quá hạn 10 ngày`);
for (let i = 0; i < amount; i++) {
  if (overdueDays[i] >= 10)
    console.log(
      `${i}. Mã thẻ: ${readerCardIds[i]} | Tên: ${readerNames[i]} | Sách đang mượn: ${borrowedBookCodes[i]} | Quá hạn: ${overdueDays[i]} ngày`,
    );
}

let niggas = [];
for (let i = 0; i < amount; i++) {
  if (
    borrowedBookCodes[i].toLowerCase().includes(`js`) &&
    borrowedBookCodes[i].toLowerCase().includes(`pyt`)
  )
    niggas.push(readerCardIds[i]);
}
console.log(`Những người mượn sách JS và PYT: ${niggas}`);

let max = 0;
for (let i = 0; i < amount; i++) {
  if (overdueDays[i] > overdueDays[max]) max = i;
}
console.log(
  `bạn đọc có số ngày mượn cao nhất: ${readerNames[max]} (${overdueDays[max]} ngày)`,
);

for (const element of overdueDays) {
  if (element >= 7) {
    overdueNiggas++;
  }
}

if (overdueNiggas === 0) console.log(`Tình hình trả sách tốt`);
else if (overdueNiggas <= 4) console.log(`Cần gửi nhắc nhở đến các cháu`);
else console.log(`Tình trạng quá hạn nghiêm trọng`);
