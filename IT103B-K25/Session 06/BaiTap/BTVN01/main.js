alert("Vui lòng nhập 1 mảng gồm 10 phần tử");
let line = "";
let countHaveMoreThan10 = 0;
let arrayNumebr = [];
let number = 0;
for(let i = 0;i < 10; i++){
    number = +prompt(`Vui lòng nhập số thứ ${i+ 1}`);
    while(isNaN(number)){
        alert("số bạn nhập không phải là số !");
        number = +prompt(`Vui lòng NHẬP LẠI số thứ ${i+ 1}`);
    }
    arrayNumebr.push(number);
}
for(let ele of arrayNumebr){
    if(ele > 10){
        line += `${ele} `;
        countHaveMoreThan10++;
    }
}
if(countHaveMoreThan10 === 0){
    console.log(`Không có số nào lớn hơn 10`)
}else{
    console.log(line);
}