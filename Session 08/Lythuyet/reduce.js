/*

TÍNH TOÁN GIÁ TRỊ
1.Đầu vào:
    Nhận vào 2 tham số
    1.Hàm
    2.Giá trị khởi tạo
2.Đầu ra

accumulator:biến tích lũy
*/
let number = [10,20,30];
let sum = 0;
let scores = [
    ["đức","C++",5],
    ["bình","C++",4],
    ["linh","C++",6],
];
let result = number.reduce((acc,cur)=>{
    return acc + cur
},0);
console.log(result);
let result1 = scores.reduce((acc1,value)=>{
    return acc1 + value[2];
})
console.log(result1);
