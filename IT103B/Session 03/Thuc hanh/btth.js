let password = "admin123";
password = prompt("Nhập password: ");
let choose;
let count=3;
let newbook,mindmapbook,out;
while (password != "admin123") {
    if(count== 1){
        break;
    }
    password = prompt(`Nhập lại password (còn ${count-1} để nhập lại) `);
    count--;
    while (password == "admin123"){
    console.log("đăng nhập thành công");
    continue;
}
}
do {
    newbook = Number(prompt("1-Nhập lô sách mới"));
    mindmapbook = Number(prompt("2-Vẽ sơ đồ kệ sách"));
    out = Number(prompt("3-Thoát"))
} while (choose!=3);