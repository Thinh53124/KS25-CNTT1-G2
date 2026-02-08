let player = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền Vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Thị F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
getShortestPlayerName();
countPlayersWithPositionLengthGreaterThan(player.length)


function getShortestPlayerName(){
    let min = Infinity;
    let minName;
    for (let ele of player){
        if(ele.split("-")[1].length < min){
            min = ele.split("-")[1].length;
            minName = ele.split("-")[1];
        }
    }
    console.log(`Tên cầu thủ ngắn nhất (${min} Ký tự): ${minName}`);
}
function countPlayersWithPositionLengthGreaterThan(length){
    let count = 0;
    for(let ele of player){
        if(ele.split("-")[2].length > length){
            count++;
        }
    }
    console.log(`Số Lượng cầu thủ có tên vị trí dài hơn độ dài mảng: ${count}`);
}