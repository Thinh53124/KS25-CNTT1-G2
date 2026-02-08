// Tạo 2 mảng
// mảng 1 chứa danh sách cầu thủ
// mảng 2 chứa bàn thắng tương ứng với các câu thủ

let playerList = [];
let goalList = [];

function addPlayer() {

}

let choose;

do {
    choose = +prompt("mời nhập lựa chọn");
    switch (choose) {
        case 0:
            alert(`Thoát chương trình`);
            break;
        case 1:
            let name = prompt("Mời nhập tên cầu thủ");
            let goal = +prompt("Nhập số bàn thắng");
            addPlayer(name, goal)
            alert(`Đã thêm câu thủ`)
            break;
        case 2:
            // console.log("Xem danh sách đội hình");
            showSquad();
            break;
        case 3:
            getTotalGoals()
            // console.log("Xem thành tích của toàn đội");
            console.log("Tổng số bàn thắng ghi được là: ", getTotalGoals());

            break;
        case 4:
            // console.log("Tìm vua phá lưới")
            for (let i = 0; i < goalList.length;i++) {
                if(goalList[i]==findMostGoals(goalList)){
                    console.log(`cầu thủ ${playerList} ghi được: ${goalList} bàn.`)
                }
            }
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choose != 0);
/* 
VIết hàm thực hiện chức năng
*/

//Hàm câu thủ
function addPlayer(name, goal) {
    playerList.push(name);
    goalList.push(goal);
}

//Hàm show đội hình
function showSquad() {
    for (let i = 0; i < playerList.length; i++) {
        console.log(`${i + 1}. ${playerList[i]} - ${goalList[i]}`);
    }
}

//Hàm tính thành tích toàn đội
function getTotalGoals() {
    let sum = 0;
    for (let i = 0; i < goalList.length; i++) {
        sum += goalList[i];
    }
    return sum;
}


//Hàm tìm vua phá lưới
function findMostGoals(goalsArray) {
    let max = goalsArray[0];
    for(let  i = 1 ; i < goalsArray.length; i++){
        if(goalsArray[i]>max){
            max = goalsArray[i];
        }
    }
    return max;
}