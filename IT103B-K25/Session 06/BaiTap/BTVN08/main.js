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
    console.log("Không phải dãy số fibonacci");
    pass = false;
}
if (sizeOfArray < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
    pass = false;
}
if (sizeOfArray < 3) {
    console.log("Không đủ phần tử để kiểm tra Fibonacci");
    pass = false;
}
if (pass) {

    for (let i = 0; i < sizeOfArray; i++) {
        numberInside = +prompt(`Vui lòng nhập phần tử thứ ${i + 1}: `);
        while (isNaN(numberInside)) {
            alert("Số bạn nhập phải là số !");
            numberInside = +prompt(`Vui lòng nhập phần tử thứ ${i + 1}: `);
        }
        arrnumber.push(numberInside);
    }

    let isFibo = true;
    for (let i = 0; i < sizeOfArray - 2; i++) {
        if (arrnumber[i + 2] !== arrnumber[i + 1] + arrnumber[i]) {
            isFibo = false;
            break;
        }
    }
    if (isFibo) {
        console.log("Là dãy số fibonacci");
    } else {
        console.log("Không phải dãy số fibonacci");
    }

}