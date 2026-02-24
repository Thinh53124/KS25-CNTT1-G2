const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 5 - 3",
    "Alisson - Goalkeeper - 0 - 1",
];

let result = reportTopPerformers(30, players);
console.log(result);

let totalPerfomance = TotalPer(result);
console.log(`Tổng hiệu suát: ${totalPerfomance}`);

result = reportTopPerformers(20, players);
console.log(result);
totalPerfomance = TotalPer(result);
console.log(`Tổng hiệu suát: ${totalPerfomance}`);

result = reportTopPerformers(50, players);
console.log(result);
totalPerfomance = TotalPer(result);
console.log(`Tổng hiệu suát: ${totalPerfomance}`);


function reportTopPerformers(minPerformance, playersList) {
    let totalScore = 0;

    const filteredPlayers = playersList
        .map(playerStr => {
            const parts = playerStr.split(" - ");
            const name = parts[0];
            const goals = parseInt(parts[2]);
            const assists = parseInt(parts[3]);
            const performance = goals + assists;

            return { name, performance };
        })
        .filter(player => player.performance >= minPerformance);

    filteredPlayers.forEach(player => {
        console.log(`${player.name}: ${player.performance}`);
    });

    totalScore = filteredPlayers.reduce((sum, player) => sum + player.performance, 0);

    console.log(`Tổng hiệu suất: ${totalScore}`);

    return totalScore;
}