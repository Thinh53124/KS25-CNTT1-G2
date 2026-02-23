let playerList=[];
let goalList=[];

let choose;
do{
    choose=prompt("moi nhap lua chon");
    switch (choose) {
        case 0:
            console.log("thoat chuong trinh");
            break;
        case 1:
            let namePlayer=prompt("moi ban nhap ten cau thu");
            let goalSocres=prompt("moi ban nhap so ban thang cua cau thu vua nhap");
            addPlayer(namePlayer,goalSocres);
            break;
        case 2:
            console.log("Xem danh sách đội hình");
            break;
        case 3:
            console.log("Xem thành tích toàn đội");
            break;
        case 4:
            console.log("Tìm Vua phá lưới");
            break;
        default:
            console.log("lua chon ko hop le");
            break;
    }
}while(choose!=0);





function addPlayer(namePlayer,goalScores){
    playerList.push(namePlayer);
    goalList.push(goalScores);
}

function showSquad(){
    for (let i = 0; i < playerList.length; i++) {
        console.log(`${i+1}. ${playerList[i]} - ${goalList[i]} ban `)
        
    }
}

function getTotalGoals(){
    let sum=0;
    for (let i = 0; i < goalList.length; i++) {
        sum+=goalList[i];
        
    }
    return sum;
}
function findMaxGoal(){
    let max =goalArray[];
    for (let i = 0; i < goalList.length; i++) {
        if(goalArray>max){
            max=goalArray[i];
        }
        
    }
    return max;
}