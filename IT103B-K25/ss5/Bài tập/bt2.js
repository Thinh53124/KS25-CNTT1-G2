let question = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn");
let bookLate=[];
let count = 0;
let listCount = 0;
let countChar = bookLate.length


for(let i = 0; i <= question; i++){
    count++;
    let bookName = prompt(`Nhập tên cuốn sách bị trả muộn thứ ${count}: `+bookLate[i]);
    bookLate.push(bookLate);
}
console.log("Tổng số sách trả muộn: " + count);

console.log("Danh sách sách bị trả muộn");
for(let j = 0; j<bookLate.length;j++){
    listCount++;
    console.log(`${listCount}. ` + bookLate[j])
}

if(countChar>20){
    console("Số lượng sách ")
}

