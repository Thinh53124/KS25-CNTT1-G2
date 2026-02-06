let playerid = [];
let playerposition = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];
let ask;
let soccerid;
let position;
function printTeamRoster() {
    console.log(`Đội bóng hiện tại (${playerid.length} cầu thủ)`);
    for (let i = 0; i < playerid.length; i++) {
        console.log(`${i + 1}.${playerid[i]} - ${playerposition[i]}`);
    }
}
do {
    ask = +prompt(`Có bao nhiêu cầu thủ cần nhập vào đội bóng?(Nhập 0 để thoát)`);
    if (ask === 0) {
        break;
    }
    for (let i = 0; i < ask; i++) {
        do {
            soccerid = prompt(`Nhập mã cầu thủ:`);
            if (playerid.indexOf(soccerid) !== -1) {
                alert("Mã đã tồn tại,yêu cầu nhập lại")
            }
        } while (playerid.indexOf(soccerid) !== -1);
        playerid.push(soccerid);
        position = +prompt(`Nhập vị trí 
        chọn số: 
        1=Thủ môn 
        2=Hậu vệ 
        3=Tiền vệ 
        4=Tiền đạo`)
        playerposition.push(position);
    }
} while (ask != 0);
printTeamRoster();
