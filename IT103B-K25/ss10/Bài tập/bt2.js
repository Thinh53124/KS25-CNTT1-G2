const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};


function addPerformanceScore() {
    console.log(`name: ${player.name}
position: ${player.position}
goals: ${player.goals}
assist: ${player.assists}
matches played: ${player.matchesPlayed}
performance per match: ${((player.goals+player.assists)/player.matchesPlayed).toFixed(2)}
isKeyPlayer: ${((player.goals+player.assists)/player.matchesPlayed)>=1? "true":"false"}`);
};

addPerformanceScore();