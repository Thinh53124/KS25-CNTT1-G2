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



function TotalPer(player) {
    return player.map(c => Number(c.split(" - ")[1]))
        .reduce((player, cur) => player + cur, 0);
}

function reportTopPerformers(minPerformance, player) {
    return player.map(player => {
        let parts = player.split(" - ");
        let name = parts[0];

        let performance = parts
            .slice(-2)
            .map(Number)
            .reduce((acc, cur) => acc + cur, 0);
        return `${name} - ${performance}`;
    })
        .filter(player => {
            let total = Number(player.split(" - ")[1]);
            return total >= minPerformance;
        });
}