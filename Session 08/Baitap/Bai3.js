const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];
let parts;
let filterlower;
let playerposition;
let findplayer = prompt("Nhập vị trí:");
function findposition(findplayer,players) {
filterlower = findplayer.toLowerCase();
return filterPlayersByPosition = players.filter(function(element){
    parts = element.split("-");
    playerposition = parts[1].trim();
    return playerposition.toLowerCase() === filterlower;
});
}
findposition(findplayer,players);
console.log(`${filterPlayersByPosition}`);

