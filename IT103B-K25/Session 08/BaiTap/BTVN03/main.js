const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];

function filterPlayersByPosition(position, players) {
  return players.map(player => {
      const parts = player.split(" - ");
      return parts[1] === position ? player : null;
    }).filter(player => player !== null);
}

console.log(filterPlayersByPosition("Midfielder", players));
console.log(filterPlayersByPosition("Forward", players));
