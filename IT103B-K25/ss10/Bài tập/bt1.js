const player = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
};

function showPlayerInfo() {
    console.log(`Tên: ${player.name}
Vị trí: ${player.position}
Tuổi: ${player.age}
Bàn thắng mùa này: ${player.goals}
Kiến tạo mùa này: ${player.assists}
Tổng đóng góp: ${player.goals + player.assists}`);
}

showPlayerInfo();