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
    console.log("Mảng không có phần tử nào");
    pass = false;
}
if (sizeOfArray < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
    pass = false;
}
if (pass) {

    for (let i = 0; i < sizeOfArray; i++) {
        numberInside = +prompt(`Vui lòng nhập phần tử thứ ${i + 1}: `);
        arrnumber.push(numberInside);
    }
    if (arrnumber.length < 2) {
        console.log("Không đủ phần tử để tìm ra số thứu 2");
    } else {
        console.log(arrnumber);
        let max = -Infinity;
        let max2 = -1;
        for (let nums of arrnumber) {
            if (nums > max) {
                max2 = max;
                max = nums;
            } else if (nums > max2 && max2 < max) {
                max2 = nums;
            }
        }
        console.log(`Số lớn thứ 2 là :${max2}`);
    }


}