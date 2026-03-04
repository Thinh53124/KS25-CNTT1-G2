const players = [
  "Messi - Forward - 25",
  "Ronaldo - Forward - 30",
  "Neymar - Forward - 18",
  "De Bruyne - Midfielder - 8",
  "Kante - Midfielder - 2",
  "Van Dijk - Defender - 5",
  "Alisson - Goalkeeper - 0",
];
function  getReversedNames (players){
    let another = players.slice();
    another.reverse();
        return another.map(function(element){
            return element.split("-")[0].trim();
        })
}
getReversedNames(players);
console.log(getReversedNames(players));

