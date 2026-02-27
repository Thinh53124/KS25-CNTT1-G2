const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 },
];
console.log(analyzeSalary(10, players));

function analyzeSalary(minYears, teamPlayers) {
  const parts = teamPlayers.filter((c) => c.year >= minYears);
  const result = {
    totalSalary: 0,
    highestPaid: null,
    lowestPaid: null,
  };
  const result2 = parts.map((c) => c.salary);
  console.log(result2);
  result.totalSalary = result2.reduce((arc, player) => arc + player, 0);

  result.highestPaid = parts[0];
  result.lowestPaid = parts[0];

  parts.forEach((Value, index) => {
    if (Value.salary > result.highestPaid.salary) {
      result.highestPaid = parts[index];
    }
    if (Value.salary < result.lowestPaid.salary) {
      result.lowestPaid = parts[index];
    }
  });
  return result;
}