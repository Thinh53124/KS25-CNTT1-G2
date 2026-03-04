let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
    { id: 3, name: "Le Van C", goals: 0, position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];
let choose;
function showplayer() {
    console.log(`=> Danh sách`);

    for (let i = 0; i < squad.length; i++) {
        console.log(`\n Mã:${squad[i].id} - ${squad[i].name} (${squad[i].position}) :${squad[i].goals} bàn`);
    }
}
function addnewplayer() {
    let newplayer = prompt(`Nhập tên cầu thủ mới:`);
    let newplayergoal = +prompt(`Nhập bàn thắng của cầu thủ mới`);
    let newplayerposition = prompt(`Nhập vị trí của cầu thủ mới(DF,FW,GK):`).toUpperCase();
    let idnewplayer = squad.length + 1;
    // let idnewplayer =Math.floor(Math.random()*2)+ Date.now()
    let NewPlayer = {
        id: idnewplayer,
        name: newplayer,
        goals: newplayergoal,
        position: newplayerposition,
    };
    squad.push(NewPlayer);
    console.log(`Đã cập nhật thêm cầu thủ thành công`);
    
}
function findplayer() {
    let findword = +prompt("Nhập ID cầu thủ muốn tìm:");
    let found = squad.find(value => value.id === findword)
    if(findword > squad.length){
        alert("Không tìm thấy cầu thủ");
        return;
    }
    if (found != -1) {
        console.log(`Cầu thủ đã tìm thấy là:\n ${found.id} - ${found.name} - ${found.goals} - ${found.position}`);
    } else {
        alert(`Không tìm thấy cầu thủ`);

    }

}
function updategoal() {
    let findword = +prompt("Nhập ID cầu thủ vừa ghi bàn:");
    let found = squad.find(value => value.id === findword)
    if(findword > squad.length){
        alert("Không tìm thấy cầu thủ");
        return;
    }
    let goalkeep = +prompt("Nhập số bàn thắng của cầu thủ đã ghi:")
    if (found != -1) {
        console.log(`Đã cập nhật bàn thắng của cầu thủ ${found.name} thành ${found.goals += goalkeep} `);
    } else {
        console.log(`Không tìm thấy cầu thủ`);

    }
}
function deleteplayer() {
    let findword = +prompt("Nhập ID cầu thủ cần xóa khỏi đội:");
    let found = squad.findIndex(value => value.id == findword);
    if (found != -1) {
        squad.splice(found, 1);
        console.log(`Đã xóa cầu thủ có ID là ${findword}`);
    } else {
        alert("Không tìm thấy cầu thủ");
    }

}
do {
    choose = +prompt(`
 --- FOOTBALL MANAGER PRO ---
1. Xem đội hình
2. Thêm cầu thủ
3. Tìm kiếm (theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ (Chuyển nhượng)
0. Thoát`)
    switch (choose) {
        case 1:
            showplayer();
            break;
        case 2:
            addnewplayer();
            break;
        case 3:
            findplayer();
            break;
        case 4:
            updategoal();
            break;
        case 5:
            deleteplayer();
            break;
        case 0:
            break;
        default:
            alert(`Vui long nhap tu 0-5`);
            break;
    }
} while (choose != 0);
