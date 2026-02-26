const player = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
};
function showplayer(){
    console.log(`Ten:${player.name}\n Vi tri:${player.position}\n Tuoi:${player.age}\n Ghi ban:${player.goals} \n Ho tro:${player.assists} \n Tong dong gop:${player.goals+player.assists}`);
}
showplayer();