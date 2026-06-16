const playerNames = [
  "Messi",
  "Ronaldo",
  "Neymar",
  "De Bruyne",
  "Kante",
  "Van Dijk",
  "Alisson"
];

function getUpperNames(playerNames) {
  return playerNames.map(name => name.toUpperCase());
}

getUpperNames(playerNames);