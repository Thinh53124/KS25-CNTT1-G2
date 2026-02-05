alert("Vui lòng nhập 1 mảng gồm 10 phần tử và tìm ra giá trị lớn nhất");
let arrayNumebr = [];
let number = 0;
for (let i = 0; i < 10; i++) {
    number = +prompt(`Vui lòng nhập số thứ ${i + 1}`);
    while (isNaN(number)) {
        alert("số bạn nhập không phải là số !");
        number = +prompt(`Vui lòng NHẬP LẠI số thứ ${i + 1}`);
    }
    arrayNumebr.push(number);
}
let max = arrayNumebr[0];
for (let ele of arrayNumebr) {
    if (ele > max) {
        max = ele;
    }
}

for(let i = 0 ; i < arrayNumebr.length; i ++){
    console.log(arrayNumebr[i]);
}
if (arrayNumebr.length === 0) {
    alert("Không có số lớn nhất")
    console.log("Không có số lớn nhất");
} else {
    console.log(`Số lớn nhất: ${max}`);
    console.log(`Vị trí: ${arrayNumebr.indexOf(max)}`);
}
