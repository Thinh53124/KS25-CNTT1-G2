const playerNames = [
  "Messi",
  "Ronaldo",
  "Neymar",
  "De Bruyne",
  "Kante",
  "Van Dijk",
  "Alisson",
];
function getUpperNames(playerNames) {
  const upperNames = playerNames.map((names) => names.toUpperCase());
  console.log(upperNames);
}
getUpperNames(playerNames);
