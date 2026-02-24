/*
    Filter: lọc
    1. Đầu vào: hàm


    2. Đầu ra
        + trả về mảng mới


*/

let number = [3, 8, 4, 13, 42];
let scores = [
  ["Đức", "C++", 5],
  ["Bình", "C++", 4],
  ["Minh", "C++", 6],
];

let five = scores.filter((value, b, c) => {
  return value[2] >= 5;
});
console.log(five);

let result = number.filter((value, index, arr) => {
  return value > 11;
});
console.log("result", result);
