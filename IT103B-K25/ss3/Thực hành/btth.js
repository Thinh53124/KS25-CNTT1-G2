/* 

Không biết trước số lần lặp dùng while||do-while
*/

let password = ""
let count = 3;
password = prompt("nhập password");
let newbook,mindmapbook,out;
let flag = true
while (password != "admin123") {
    if (count == 1) {
        flag = false;
        break;
    }
    password = prompt(`mời nhập lại password còn ${count - 1} lần nhập`);
    count--;
}
alert("Hệ thống bị khóa");

if (flag) {
    let choose;
    do {
        newbook = Number(prompt("1-Nhập lô sách mới"));
        mindmapbook = Number(prompt("2-Vẽ sơ đồ kệ sách"));
        out = Number(prompt("3-Thoát"))
    } while (choose != 3);
} else {
    console.log("Bạn chưa đăng nhập đúng")
}