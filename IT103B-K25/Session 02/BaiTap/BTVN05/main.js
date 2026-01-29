let bookName = prompt("Nhập tên sách: ");
let bookStatus = prompt("Nhập trạng thái sách (có sẵn, đã mượn): ");
let bookPublishYear = +prompt("Nhập năm xuất bản sách: ");
let currentYear = new Date().getFullYear();

bookStatus = bookStatus.toLowerCase().trim()

if(currentYear - bookPublishYear <= 5 && bookPublishYear < currentYear && bookStatus === "có sẵn"){
    document.write("Sách này mới và có sẵn để mượn");
}
else if(currentYear - bookPublishYear <= 10 && bookPublishYear < currentYear && bookStatus === "đã mượn"){
    document.write("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
}
else if(currentYear - bookPublishYear > 10 && bookPublishYear < currentYear && bookStatus === "đã mượn"){
    document.write("Sách này đã mượn và khá cũ");
}
else if(currentYear - bookPublishYear > 5 && bookPublishYear < currentYear && bookStatus === "có sẵn"){
    document.write("Sách này có sẵn nhưng đã lâu năm");
}
else{
    document.write("Sách không hợp lệ");
}