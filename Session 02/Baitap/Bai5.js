let bookname = prompt("Tên sách mượn");
let statebook = prompt("trạng thái sách:");
let year = prompt("Năm xuất bản:");
let statebooklower = statebook.toLowerCase();
let numyear = Number(year);
let result = 2026 - numyear;
document.write("Tên sách: " + bookname +"<br>");
document.write("Trạng thái sách: " + statebook+"<br>");
document.write("Năm xuất bản: "+year+"<br>");
document.write("Trạng thái sách: ");
switch(statebooklower){
    case "có sẵn":
        if(result <= 5){
            document.write("Sách này mới và có sẵn để mượn")
        }else {
            document.write("Sách này có sẵn nhưng đã lâu năm")
        }
        break;
    case "đã mượn":
        if(result <=10){
            document.write("Sách này đã mượn nhưng khá mới, có thể mượn lại sau")
        }else {
            document.write("Sách này đã mượn và khá cũ");
        }
        break;
    default:
        break;
}