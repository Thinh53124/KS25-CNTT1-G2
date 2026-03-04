/* 

Bài 1:
 1.Biến
 +let,const,var:phân biệt cách dùng

 2.Kiểu dữ liệu
 chia 2 nhóm
 nhóm 1:nguyên thủy,đơn giản,primitive type
 +number
 +string
 +boolean
 +undefined
 +NaN
 +null
 nhóm 2:phức tạp,reference type,tham chiếu
+array
+function
+object
3.Toán tử _ operator
+toán tử số học: +,-,*,/,%,**(số mũ)
+toán tử logic: &&,||
+toán tử so sánh: >,<,<=,>=,!=,!==,==,===
+Toản tử tăng giảm:++a,a++
+toán tử ba ngôi: "?" và ":"
Bài 2:Câu điều kiện & vòng lặp
condition: 
+if....else
+if...else :lồng
+if...else: bậc thang
+switch-case
loop
+for
+while
+do...while
Bài 3:Mảng
    +Cách khai báo:let,const,var tên mảng = [];
    +thao tác với mảng 
    +Curd
    C:Create :Thêm
    _Push():thêm cuối
    _unshift():thêm vào đầu
    _splice():thêm vào vị trí bất kỳ
    R:Read:Đọc,Hiển thị
    for,for - in , for - of,...
    U:Update:Cập nhật
    _arr[index] = giá trị mới
    _splice(index,số lượng phần tử muốn xóa,Giá trị muốn thêm vào):
    D:delete:Xóa
    _pop():Xóa phần tử cuối
    _shift():Xóa đầu
    _splice():xóa phần tử bất kì

    Các phương thức làm việc với mảng
    1.slice():cắt sao chép ra mảng mới
    2.concat():gộp nối mảng
    3.Reverse():đảo ngược mảng
    4.split():chuyển string sang mảng
    5.join(): chuyển mảng sang string
    6.indexOf(): trả về vị trí nếu không có thì trả về -1
    7.include ():trả về true/false
    8.sort():sắp xếp theo bảng ASCII
Bài 4:Function(hàm)
    1.Declaration
    function name (){

    }
    2.Expression function
    const fn = function (){
    }
    3.Arrow function
    ()=>{}
    _THAM Số: Phần định nghĩa trong hàm (PARAMETER)
    _Đối Số:Khi gọi hàm truyền giá trị (ARGUMENT)
    _Phải gọi hàm thì hàm mới được thực thi
Bài 5: Array method (các phương thức làm việc với mảng)
    _map,forEach,filter,reduce,find,findIndex,some,every,....
    _nếu dùng for có thể giải quyết hết tất cả bài toán của mảng
    _HOF(Higher order function)_Hàm Bậc Cao
    _một function bình thường muốn trở thành HOF thì phải thỏa mãn 1 trong 2 điều kiện
    1.Hàm nhận hàm khác làm tham số
    2.Hàm trả về 1 hàm khác
*/
// const sum = (a,b) => {
//     console.log(a+b);
// } 
// sum (5,6);
// function sayHello() {
//     console.log("xin chào");
//     return function fn1(){

//     }
// }
// const fn=(call)=>{
//   call();
// }
// fn(sayHello);
// fn được gọi là HOF 
// lấy ra các phần tử lớn hơn 30
// let number = [5,55,56,45,16]
// let result1 = [];
// for(let i=0;i<number.length;i++){
//     if(number[i]>30){
//         result1.push(number[i])
//     }
// }
// lấy ra các phần tử chẵn
// let result2=[];
// for(let i=0;i<number.length;i++){
//     if(number[i]%2===0){
//         result2.push(number[i])
//     }
// }
//dùng filter
let result3 = number.filter(item=>item%2===0);
let result4 = number.filter(item => item >30 )
function sum (a,b){
    return a +b;
}
console.log(sum(5));
