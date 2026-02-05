let arrnumber = [];
let numberInside;
let sizeOfArray = 0;
let pass = true;
sizeOfArray = +prompt("Vui lòng nhập số phàn tử mà bạn muốn thêm vào !");
while (isNaN(sizeOfArray)) {
    alert("Số phần tử bạn nhập phải là số nguyên !");
    sizeOfArray = +prompt("Vui lòng nhập số phàn tử mà bạn muốn thêm vào !");
}
if (sizeOfArray === 0) {
    console.log("Mảng không có phần tử");
    pass = false;
}
if (sizeOfArray < 0) {
    console.log("Số lượng phần tử không được âm");
    pass = false;
}
if (pass) {
    let countNumber = 0;
    for (let i = 0; i < sizeOfArray; i++) {
        numberInside = prompt(`Vui lòng nhập phần tử thứ ${i + 1}: `);
        if (!isNaN(Number(numberInside))) {
            countNumber += +numberInside;
        }
        arrnumber.push(numberInside);
    }
    console.log(arrnumber);
    if (countNumber === 0) {
        console.log(`Không có phần tử nào là số`);
    }else{
        console.log(`Tổng các số là ký tự số trong mảng là : ${countNumber}`);
    }

}