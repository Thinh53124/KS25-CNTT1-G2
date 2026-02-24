const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bryune - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

function filterPlayersByPosition() {
    return players.map(player => {
        const parts = player.split(" - ");
        return parts[1] === position ? player : null;
    }).filter(player => player !== null);
}

console.log(filterPlayersByPosition("Midfielder", players));
console.log(filterPlayersByPosition("Forward", players));