const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
];

function filterPlayersByPosition(position, players) {
  return players.filter(player => {
    const playerPosition = player.split(" - ")[1];
    return playerPosition === position;
  });
}

filterPlayersByPosition("Midfielder", players);
filterPlayersByPosition("Forward", players);