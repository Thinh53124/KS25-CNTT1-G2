let ask = Number(prompt("Hôm nay có bao nhiêu lượt mượn sách: "));
let count = 1;
let user;
let bookname;
let borrowday;
do {
    user = prompt("Tên người mượn:");
    bookname = prompt("Tên sách: ");
    borrowday = prompt("Số ngày mượn:");
    count++;
    console.log("=========");
    console.log("tên người mượn:" + user);
    console.log("Tên sách: " + bookname);
     if(borrowday > 14 ){
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");   
    }else {
        console.log("Mượn thành công");
        
    }
} while (count <= ask);
console.log("TỔNG SỐ LƯỢT MƯỢN: "+ ask);

