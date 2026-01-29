let bookName = prompt("Nhập tên sách:");
let userName = prompt("Nhập tên người mượn:");
let fav = Number(prompt("Nhập mức độ yêu thích (1 đến 5):"));

if (fav === 5 || fav === 4) {
    document.writeln("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (fav === 3) {
    document.writeln("Sách này khá ổn, có thể mượn");
} else if (fav === 2 || fav === 1) {
    document.writeln("Sách này bạn có thể cân nhắc mượn lại sau");
} else {
    document.writeln("Mức độ yêu thích không hợp lệ!");
}
