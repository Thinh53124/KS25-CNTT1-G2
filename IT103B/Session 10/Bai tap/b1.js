const player = {
name: "Messi",
position: "Forward",
age: 36,
goals: 25,
assists: 15,
};

function showPlayerInfo (player) {
    console.log(`Tên: `,player.name);
    console.log(`Vị trí: `,player.position);
    console.log(`Tuổi: `,player.age);
    console.log(`Bàn thắng mùa này: `,player.goals);
    console.log(`Kiến tạo mùa này: `,player.assists);
    console.log(`Tổng đóng góp: `,player.goals+player.assists);
}
showPlayerInfo(player);