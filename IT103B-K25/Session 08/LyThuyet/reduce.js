/*
    tính toán
    1. đầu vào
        nhận vào 2 tham số
        1. hàm
        2. giá trị khởi tạo
    2. đầu ra





*/

let number = [4, 7, 8, 9, 11, 3];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}

let result = number.reduce((acc, curentValue) => {
  return acc + curentValue;
}, 0);
console.log(result);
