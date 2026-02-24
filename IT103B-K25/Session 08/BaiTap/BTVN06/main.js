const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37",
];
let result1 = reportByPosition(players, 3);
console.log(result1);
let sum = Object.values(result1).reduce((acc, cur) => {
    return acc + cur.totalGoals;
}, 0);
console.log("Tổng bàn toàn đội: "+ sum);

function reportByPosition(arr, minGoals) {
    console.log("BÁO CÁO HIỆU SUẬT THEO VỊ TRÍ");
    const result = arr.map(p => {
        const [name, position, goals, assists, matches] = p.split(" - ");
        return {
            name, 
            position,
            goals: Number(goals),
            assists: Number(assists),
            matches: Number(matches),
        };
    })
    .filter(p => p.goals >= minGoals)
    .reduce((acc, player) => {
        if(!acc[player.position]){
            acc[player.position] = {
                count: 0,
                totalGoals: 0,
                totalAssists: 0,
                totalMatches: 0
            };
        }

        acc[player.position].count++;
        acc[player.position].totalGoals += player.goals;
        acc[player.position].totalAssists += player.assists;
        acc[player.position].totalMatches += player.matches;

        return acc;
    }, {});
    Object.keys(result).forEach(position => {
        const group = result[position];
        const avgPerformance = (
            (group.totalGoals + group.totalAssists) / group.totalMatches
        ).toFixed(2);

        console.log(`=== ${position} ===`);
        console.log(`Số cầu thủ: ${group.count}`);
        console.log(`Tổng bàn thắng: ${group.totalGoals}`);
        console.log(`Tổng kiến tạo: ${group.totalAssists}`);
        console.log(`Tổng số trận: ${group.totalMatches}`);
        console.log(`Trung bình hiệu suất mỗi trận: ${avgPerformance}`);
        console.log("---------------------------");
    });
    return result;
}