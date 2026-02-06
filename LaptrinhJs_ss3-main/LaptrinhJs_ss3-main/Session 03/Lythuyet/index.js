/* 
Vòng lặp là gì?

công việc hay đoạn logic thực hiện lặp đi lặp lại
1.for
_dùng khi biết trước số lần gặp
_gồm 3 phần: các phần ngăn cách với nhau bằng dấu phẩy
phần 1:giá trị khởi tạo
phần 2:điều kiện
phần 3:bước nhảy
_đầu tiên lấy giá trị khởi tạo đi kiểm tra điều kiện
+Nếu điều kiện sai => dừng vòng lặp
+Nếu điều kiện đúng ==> thực hiện thân for ==> quay về bước nhảy ==> kiểm tra điều kiện\
FOR_LỒNG
2.while
_Dùng khi không biết trước số lần lặp
_cú pháp : while (điều kiện){
}
_kiểm tra điều kiện nếu đúng thì thực thi 
+nếu sai thì dừng
NOTE: Phải có điều kiện dừng không thì vòng lặp sẽ bị vô hạn
3.do-while
+khi nào dùng?
+cú pháp
+luồng hoạt động

*/
// let i;
// for(i=1;i<10;i+=3){

// }
// For lồng
// for (let i = 1; i < 3; i++) {
//     for(let j=1;j<4;j++){

//     }
// }
/*
i =1 :
    j=1,2,3
i=2
    j=1,2,3
i=3:
*/
for(let i=1;i<=10;i++){
        document.write("Bảng cửu chương" + i+"<br>" );
    for(let j=1;j<=10;j++){
        document.write(`${i} x ${j} = ${i*j}` + "<br>");
    }
}