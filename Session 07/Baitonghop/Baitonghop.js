let PlayerName = [];
let PlayerGoal = [];
let choose;
let name;
let goal;
let sum = 0;
let max = 0;
function AddPlayer(name,goal) {
    name = prompt("Nhập tên cầu thủ");
    PlayerName.push(name);    
    goal = +prompt("Nhập số bàn thắng");
    PlayerGoal.push(goal);
    console.log(`Đã thêm cầu thủ ${name} thành công`);
}
function ShowSquad() {
    for(let i=0;i<PlayerName.length;i++){
    console.log(`${i+1}.${PlayerName[i]}-${PlayerGoal[i]} Bàn`);
    }
};
const getTotalGoal = function(){
    for(let i=0;i<PlayerGoal.length;i++){
         sum += PlayerGoal[i];
    }
    console.log(` Số Bàn Thắng của toàn đội: ${sum}`);
    return sum = 0;
};
function findMostGoal() {
    for(let i =0; i<PlayerGoal.length;i++){
        if(PlayerGoal[i]>max){
            max = PlayerGoal[i]
        }
    }
    console.log(` Bàn thắng Cao nhất là ${max}`);
}
do {
    choose = +prompt(`--Quản lý Đội bóng--
        1. Nhập cầu thủ mới
        2. Xem danh sách đội hình
        3. Xem thành tích toàn đội
        4. Tìm Vua phá lưới
        0. Thoát`);
        switch (choose) {
            case 1:
                AddPlayer();
                break;
            case 2:
                ShowSquad();
                break;
            case 3:
                getTotalGoal();
                break;
            case 4:
                findMostGoal();
                break;
            case 0:
                break;
            default:
                alert("Nhập từ 0-4");
                break;
        }
} while (choose !== 0);