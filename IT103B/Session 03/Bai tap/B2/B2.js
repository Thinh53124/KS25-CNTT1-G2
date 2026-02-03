let ask = Number(prompt("HÔM NAY CÓ BAO NHIÊU LƯỢT TRẢ SÁCH: "));
count = 1;
let user,namebook,borrowday;
let late = 0;
do {
    user = prompt("Tên người trả: ");
    namebook = prompt("Tên sách: ");
    borrowday = Number(prompt("Số ngày đã mượn thực tế: "));
    count++;
    console.log("--------------------------");
    
    console.log("tên người trả: " +user);
    console.log("Tên sách: "+namebook);
    while (borrowday < 1) {
    borrowday = Number(prompt("Số ngày đã mượn thực tế: "));
    }
    if(borrowday <= 14 ){
        console.log("Trả đúng hạn");
    }else if(borrowday >=15 && borrowday <= 21){
        console.log("Trả muộn nhẹ " + " Phạt nhắc nhở");
    }else {
        console.log("Quá hạn nghiêm trọng " + " Cần ghi biên bản phạt");
    }
} while (count <= ask);
console.log("Tổng số lượt trả: " +ask);