let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let favoriteLevel = Number(prompt("Nhập mức độ yêu thích (1 đến 5):"));

if (favoriteLevel === 5 || favoriteLevel === 4) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (favoriteLevel === 3) {
    console.log("Sách này khá ổn, có thể mượn");
} else if (favoriteLevel === 2 || favoriteLevel === 1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
}
