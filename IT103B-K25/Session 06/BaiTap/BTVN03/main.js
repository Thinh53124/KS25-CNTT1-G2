let arrnumber = [];
let numberInside;
let sizeOfArray = 0;
let pass = true; 
sizeOfArray = +prompt("Vui lòng nhập số phàn tử mà bạn muốn thêm vào !");
while(isNaN(sizeOfArray)){
    alert("Số phần tử bạn nhập phải là số nguyên !");
    sizeOfArray = +prompt("Vui lòng nhập số phàn tử mà bạn muốn thêm vào !");
}
if(sizeOfArray === 0){
    console.log("Mảng không có phần tử");
    pass = false;
}
if(sizeOfArray < 0 ){
    console.log("Số lượng phần tử không hợp lệ");
    pass = false;
}
if(pass){
    let countMinus = 0;
    for(let i = 0; i< sizeOfArray; i++){
        numberInside = +prompt(`Vui lòng nhập phần tử thứ ${i +1 }: `);
        while(isNaN(numberInside)){
            alert("Số bạn nhập không phải là số nguyên");
            numberInside = +prompt(`Vui lòng NHẬP LẠI phần tử thứ ${i +1 }: `);
        }
        if(numberInside < 0){
            countMinus++;
        }
        arrnumber.push(numberInside);
    }
    console.log(arrnumber);
    console.log(`Số lượng số âm bên trong mảng : ${countMinus}`);
}