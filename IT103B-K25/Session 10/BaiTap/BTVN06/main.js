const players = [
  {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
    matches: 34,
    yellowCards: 2,
  },
  {
    name: "Ronaldo",
    position: "Forward",
    age: 39,
    goals: 30,
    assists: 10,
    matches: 38,
    yellowCards: 4,
  },
  {
    name: "Neymar",
    position: "Forward",
    age: 32,
    goals: 18,
    assists: 20,
    matches: 32,
    yellowCards: 3,
  },
  {
    name: "De Bruyne",
    position: "Midfielder",
    age: 33,
    goals: 8,
    assists: 25,
    matches: 35,
    yellowCards: 1,
  },
  {
    name: "Kante",
    position: "Midfielder",
    age: 33,
    goals: 2,
    assists: 5,
    matches: 36,
    yellowCards: 0,
  },
  {
    name: "Van Dijk",
    position: "Defender",
    age: 33,
    goals: 5,
    assists: 3,
    matches: 33,
    yellowCards: 2,
  },
  {
    name: "Alisson",
    position: "Goalkeeper",
    age: 31,
    goals: 0,
    assists: 1,
    matches: 37,
    yellowCards: 0,
  },
];

generateRankingReport(35, players);

function generateRankingReport(minMatches, players) {
  const filtered = players
    .filter((c) => c.matches >= minMatches)
    .map((p) => ({
      name: p.name,
      positions: p.position,
      goals: p.goals,
      assist: p.assists,
      match: p.matches,
      rating: (p.goals + p.assists) / p.matches,
      efficiencyScore:
        (p.goals + p.assists) / p.matches - p.yellowCards / p.matches,
    }));

  const sorted = [...filtered].sort((a, b) => {
    if (a.efficiencyScore !== b.efficiencyScore) {
      return b.efficiencyScore - a.efficiencyScore;
    }
    if (a.rating !== b.rating) {
      return b.rating - a.rating;
    }
    return b.goals - a.goals;
  });
  console.log("XẾP HẠNG ĐỘI BÓNG (Từ minMatches trở lên) \n");

  sorted.forEach((p, index) => {
    console.log(
      `${index + 1}, ${p.name} - Efficiency: ${p.efficiencyScore.toFixed(2)} | Performance: ${p.rating.toFixed(2)} | Goals: ${p.goals} \n`,
    );
  });
  console.log(`Tổng số cầu thủ xếp hạng: ${sorted.length} \n`);
  if (sorted.length > 0) {
    console.log(`Cầu thủ xuất sắc nhất: ${sorted[0].name} \n`);
  }
  const top3 = sorted.slice(0, 3);
  if (top3.length > 0) {
    const avgEfficiency =
      top3.reduce((sum, p) => sum + p.efficiencyScore, 0) / top3.length;
    console.log(`Trung bình efficiency top 3: ${avgEfficiency.toFixed(2)}`);
  }
}
