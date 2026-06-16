const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 5",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1"
];

function reportTopPerformers(minPerformance, players) {
  const filtered = players
    .map(p => {
      const [name, , goals, assists] = p.split(" - ");
      const performance = Number(goals) + Number(assists);
      return { name, performance };
    })
    .filter(player => player.performance >= minPerformance);

  filtered
    .map(player => `${player.name}: ${player.performance}`)
    .forEach(line => console.log(line));

  const total = filtered
    .map(player => player.performance)
    .reduce((sum, value) => sum + value, 0);

  console.log(`Tổng hiệu suất: ${total}`);

  return total;
}

reportTopPerformers(30, players);