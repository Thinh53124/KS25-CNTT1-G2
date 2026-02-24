const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37",
];

function reportByPosition(players) {
    const positions = ["Forward", "Midfielder", "Defender", "Goalkeeper"];
    const count = [0, 0, 0, 0];
    const totalGoals = [0, 0, 0, 0];
    const totalAssists = [0, 0, 0, 0];
    const totalMatches = [0, 0, 0, 0];
    
    let grandTotalGoals = 0;

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ");

    players.forEach(function(playerStr) {
        const info = playerStr.split(" - ");
        
        const posName = info[1];
        const goals = parseInt(info[2]);
        const assists = parseInt(info[3]);
        const matches = parseInt(info[4]);

        const index = positions.indexOf(posName);

        if (index !== -1) {
            count[index] += 1;
            totalGoals[index] += goals;
            totalAssists[index] += assists;
            totalMatches[index] += matches;
            grandTotalGoals += goals;
        }
    });

    positions.forEach(function(pos, i) {
        if (count[i] > 0) {
            const efficiency = (totalGoals[i] + totalAssists[i]) / totalMatches[i];

            console.log(pos + ":");
            console.log("- Số cầu thủ: " + count[i]);
            console.log("- Tổng bàn thắng: " + totalGoals[i]);
            console.log("- Tổng kiến tạo: " + totalAssists[i]);
            console.log("- Tổng số trận: " + totalMatches[i]);
            console.log("- Trung bình hiệu suất/trận: " + efficiency.toFixed(2));
            console.log(""); 
        }
    });

    console.log("--------------------------");
    console.log("Tổng bàn thắng toàn đội : " + grandTotalGoals);
}

reportByPosition(players);