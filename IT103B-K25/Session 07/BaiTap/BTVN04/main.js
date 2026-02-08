let player = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền Vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Thị F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
]
printTeamRoster();
countPlayerByPostion(player);
let result = hasGoalkeeper();
console.log(result);


function printTeamRoster(){
    console.log("Danh sách cầu thủ");
    console.log(` STT |  MÃ  |      Tên     |  Vị trí  |`);
    for(let i = 0 ; i  < player.length; i++){
        let part = player[i].split("-");
   console.log(`  ${i+1}  | ${part[0]} | ${part[1]}   |  ${part[2]} `);
    }
}
function countPlayerByPostion(players){
    let strikerCount = 0;
    let defenderCount = 0;
    let goalkeeperCount = 0;
    for(let ele of players){
        if(ele.split("-")[2] === "Tiền đạo"){
            strikerCount++;
        }else if(ele.split("-")[2] === "Hậu vệ"){
            defenderCount++;
        }else{
            goalkeeperCount++;
        }
    }
    console.log(`Tổng cầu thủ: Tiền Đạo: ${strikerCount}, Hậu vệ: ${defenderCount}, Thủ môn: ${goalkeeperCount}`);
}
function hasGoalkeeper(){
    let goalkeeperCount2 = 0;
    for(let ele of player){
        if(ele.split("-")[2] === "Thủ môn"){
            goalkeeperCount2++;
        }
    }
    if(goalkeeperCount2 < 1){
        return false;
    }else{
        return true;
    }
}