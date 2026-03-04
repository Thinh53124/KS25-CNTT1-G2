const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 5",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1",
];
function reportTopPerformers(minPerformance, players) {
    const total = players
        .map(function(player) {
            const parts = player.split(" - ");
            const name = parts[0].trim();
            const goals = parseInt(parts[2]);
            const assists = parseInt(parts[3]);
            const performance = goals + assists;

            return {
                name: name,
                performance: performance
            };
        })
        .filter(function(player) {
            return player.performance >= minPerformance;
        })
        .map(function(player) {
            const reportLine = player.name + ": " + player.performance;
            console.log(reportLine);
            return player.performance;
        })
        .reduce(function(total, performance) {
            return total + performance;
        }, 0);

    console.log("Tổng hiệu suất: " + total);
    return total;
}