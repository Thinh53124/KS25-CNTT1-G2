let bookName = prompt("Nhập tên sách");
let bookStatus = prompt("Nhập trạng thái sách(có sẵn hay mượn)");
let yearPublish = +prompt("Nhập năm xuất bản");

let yearNow = new Date().getFullYear();

let yearGap = yearNow - yearPublish;



console.log("Tên sách: "+ bookName);
if(bookStatus=="có sẵn" && yearGap <= "5" ){
    console.log("Sách này mới và có sẵn để mượn");
}else if(bookStatus=="đã mượn"&& yearGap <= "10"){
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
}else if(bookStatus=="đã mượn"&&yearGap >10){
    console.log("Sách này đã mượn và khá cũ");
}else if(bookStatus=="có sẵn"&&yearGap > 5){
    console.log("Sách này có sẵn nhưng đã lâu năm");
}else{
    console.log("Trạng thái sách không có sẵn hoặc không tồn tại");
}

console.log("Năm xuất bản: " + yearPublish)
