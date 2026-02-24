const squad = [
    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];
let choose;
let sum =0;
function squadlist (){
    squad.forEach((value,index,arr)=>{
        console.log(`Tên:${value[0]} (${value[2]}) :${value[1]} Bàn Thắng`);
        
    })
}
function findplayer() {
        let namefind = prompt("Tên cầu thủ muốn tìm:");
    let result = squad.find((value)=>{
        return value[0].toUpperCase() == namefind.toUpperCase();
    })
    if(result){
        console.log("Thông tin cầu thủ\n" +result);
    }else{
        console.log(` Không tìm thấy cầu thủ`);
        
    }
}
function positionplayer(){
    let position = prompt("Nhập vị trí cần lọc (FW, MF, DF, GK)");
    let positionupper = position.toUpperCase();
    let resultfilter = squad.filter((value)=>{
        return value[2] == positionupper;
    });
    console.log("Những cầu thủ ở vị trí đó\n"+resultfilter);
    
}
function sumgoal(){
    let resultsum = squad.reduce((cur,value)=>{
        return value[1] + cur;
    },0)
    console.log("tổng số bàn thắng của cả đội:" + resultsum);
}
function qualitycheck (){
    let somecheck = squad.some(value =>value[1] ==0)
    console.log("có cầu thủ chưa ghi bàn");
    let everycheck = squad.every(value => value[1] >= 0);
    console.log("tất cả cầu thủ đã ghi bàn");
}
do {
   choose= +prompt(`
--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát   `)
switch (choose) {
    case 1:
        squadlist();
        break;
    case 0:
        break;
    case 2:
        findplayer();
        break;
    case 3:
        positionplayer();
        break;
    case 4: 
        sumgoal();
        break;
    case 5:
        qualitycheck();
        break;
    default:
        break;
}
} while (choose !== 0);