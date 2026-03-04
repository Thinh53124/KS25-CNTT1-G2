const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};
function showplayer(){
    console.log(`Ten:${player.name}\n Vi tri:${player.position}\n Tuoi:${player.age}\n Ghi ban:${player.goals} \n Ho tro:${player.assists} \n Tong dong gop:${((player.goals+player.assists)/player.matchesPlayed).toFixed(2)}\n IsKeyPlayed:${((player.goals+player.assists)/player.matchesPlayed).toFixed(2) > 1 ? "Yes":"No"}`);
};
showplayer();