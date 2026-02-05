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
    console.log("Không có ký tự số");
    pass = false;
}
if (sizeOfArray < 0) {
    console.log("Số lượng phần tử không hợp lệ");
    pass = false;
}
if (pass) {
    let line = "";
    for (let i = 0; i < sizeOfArray; i++) {
        numberInside = prompt(`Vui lòng nhập phần tử thứ ${i + 1}: `);
        if (!isNaN(Number(numberInside))) {
            line += `${numberInside} `
        }
        arrnumber.push(numberInside);
    }
    console.log(arrnumber);
    if (line === "") {
        console.log(`Không có ký tự số`);
    }else{
        console.log(`Số lượng số trong mảng : ${line}`);
    }

}