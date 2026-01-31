/* 

Khi nào dùng:
+khi cần lặp ít nhất 1 lần
+thường sử dụng trong các bài toán menu
-cú pháp
do{
}while()
-luồng thực thi:chạy khi điều kiện trong while đúng
_CHẠY ÍT NHẤT 1 Lần
*/
// bài toán dạng menu,yêu cầu chọn case 1 đến 6,case 7 thì thoát
let choose;
do {
    let choose = Number(prompt("Mời bạn nhập lựa chọn"));
    switch (choose) {
        case 1:
            console.log("P");
            
            break;
        case 2:
            console.log("A");
            
            break;
        case 3:
            console.log("B");
            
            break;
            
        default:
            break;
    }
} while (choose!=7);