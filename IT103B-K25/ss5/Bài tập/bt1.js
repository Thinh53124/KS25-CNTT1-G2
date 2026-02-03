let question = +prompt("Bạn muốn trả bao nhiêu cuốn sách");
let count = 0;
let bookArr = []
let listCount = 0;

for(let i = 1; i<=question;i++){
    count++;
    let bookCount = prompt(`Nhập cuốn sách thứ ${count}`);
    bookArr.push(bookCount);
}
console.log("Tổng số sách được trả: " + count);

console.log("Danh sách đã trả")
for(let j = 0; j<bookArr.length;j++){
    listCount++;
    console.log(`${listCount}. ` + bookArr[j])
}