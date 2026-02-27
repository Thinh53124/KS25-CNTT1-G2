const player = {
name: "De Bruyne",
position: "Midfielder",
goals: 8,
assists: 25,
matchesPlayed: 35,
};

function addPerformanceScore (player) {
    let performancePerMatch = (player.goals + player.assists) / player.matchesPlayed;
    
    console.log(performancePerMatch);
    
}

addPerformanceScore(player);