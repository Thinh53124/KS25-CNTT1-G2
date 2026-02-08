let playerIds = [];
let playerPositions = [];
let playerWannaplay;
while(true){
    playerWannaplay = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");
    if(playerWannaplay < 1){
        alert("Số cầu thử cần nhập phải lớn hơn 0 !!");
        continue;
    }
    break;
}
let thePlayerCode;
let thePlayerPosittion;
let pass =  true;
for (let i = 0 ;i < playerWannaplay; i++){
    while(true){
        pass = true;
        thePlayerCode  = prompt("Vui lòng nhập mã cầu thủ thứ " + `${i+1}`);
        if(thePlayerCode === ""){
            alert("Mã cầu thủ bạn nhập không được để trống !");
            continue;
        }
        for(let ele  of playerIds){
            if(ele === thePlayerCode){
                pass = false;
                break;
            }
        }
        if(pass){
            playerIds.push(thePlayerCode);
            break;
        }else{
            alert("Mã cầu thủ của bạn không được để trùng nhau !");
        }
    }
    
    while(true){
        thePlayerPosittion = +prompt(`Vui lòng nhập vị của cầu thủ
    1 - Thủ môn
    2 - Hậu vệ
    3 - Tiền vệ
    4 - Tiền đạo`);
        if(thePlayerPosittion < 1 || thePlayerPosittion > 4){
            alert("Vị trí bạn chọn không hợp lý !");
            continue;
        }
        if(isNaN(thePlayerPosittion)){
            alert("Số vị trí bạn nhập không phải là số !");
            continue;
        }
        break;
    }
    switch(thePlayerPosittion){
        case 1:
            playerPositions.push("Thủ môn");
            break;
        case 2:
            playerPositions.push("Hậu vệ");
            break;
        case 3:
            playerPositions.push("Tiền vệ");
            break;
        case 4:
            playerPositions.push("Tiền đạo");
            break;
    }
}

printTeamRoster();

let positionWannaFind;
while(true){
    positionWannaFind = +prompt("Vui lòng nhập vị trí cầu thủ mà bạn muốn đếm số lượng (1: Thủ môn , 2: Hậu vệ ,3: Tiền vệ, 4: Tiền đạo)");
    if(isNaN(positionWannaFind) || (positionWannaFind < 1 || positionWannaFind > 3)){
        alert("Vị trí cầu thủ bạn nhập không hợp lệ !");
        continue;
    }
    break;
}
switch(positionWannaFind){
    case 1:
        findPlayersByPosition("Thủ môn");
        break;
    case 2:
        findPlayersByPosition("Hậu vệ");
        break;
    case  3:
        findPlayersByPosition("Tiền vệ");
        break;
    case 4 :
        findPlayersByPosition("Tiền đạo");
        break;
}

// hàm  
function printTeamRoster(){ 
    console.log(`Đội bóng hiện tại ${playerWannaplay}`);
    for(let i = 0; i < playerWannaplay; i++){
        console.log(`${i+1}. ${playerIds[i]} - ${playerPositions[i]}`);
    }
}
function findPlayersByPosition(position){
    let lineIndex = "";
    let countPosittion = 0;
    for(let i  = 0; i < playerWannaplay; i++){
        if(playerPositions[i] === position){
            countPosittion++;
            lineIndex += `${i} `;
        }
    }
    console.log(`Số cầu thủ ở vị trí ${position}: ${countPosittion}`);
    console.log(`Các chỉ số cầu thủ ở vị trí ${position}: ${lineIndex}`);
}