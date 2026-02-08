let player = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền Vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Thị F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
getAllPositions();
findPlayersWithLongestName();
let letterPlayer;
while(true){
    letterPlayer =  prompt("Vui lòng nhập chữ cái để tìm cầu thủ :").toLowerCase();
    if(letterPlayer === ""){
        alert("Cầu thủ không được để trống !");
        continue;
    }
    break;
}
countPlayersStartingWithLetter(letterPlayer);

function getAllPositions(){
    let positionArray = [];
    let line = "";
    for(let ele of player){
        if(!positionArray.includes(ele.split("-")[2])){
            positionArray.push(ele.split("-")[2]);
        }
    }
    for(let ele of positionArray){
        line += `"${ele}" `
    }
    console.log(`${line}`);
}
function findPlayersWithLongestName(){
    let max = 0;
    let maxName = "";
    for(let ele of player){
        if(ele.split("-")[1].length > max){
            max = ele.split("-")[1].length;
            maxName  = ele.split("-")[1];
        }
    }
    console.log(`Tên cầu thủ dài nhất (Với ${max} Ký tự): ${maxName}`);
}
function countPlayersStartingWithLetter(letter){
    let line = "";
    let count = 0;
    for(let ele of player){
        if(ele.split("-")[1].toLowerCase().includes(letter)){
            count++;
            line += ` ${ele.split("-")[1] } `;
        }
    }
    console.log(`Vậy số lượng cầu thủ được liệt kê là: ${count} Bao Gồm:` ); 
    console.log(`${line}`);
}