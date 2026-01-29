let bookName = prompt("Nhập tên sách");
let rentName = prompt("Nhập tên người mượn");
let favourRate = +prompt("Mức độ yêu thích (vui lòng chỉ nhập từ 1 -5)");


console.log("Tên sách: " + bookName);
console.log("Tên người mượn " + rentName);
if(favourRate == "5" || favourRate == "4"){
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
}else if(favourRate=="3"){
    console.log("Sách này khá ổn, có thể mượn");
}else if(favourRate == "2" || favourRate == "1"){
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
}else{
    console.log("mức độ yêu thích không hợp lệ!!!");
}