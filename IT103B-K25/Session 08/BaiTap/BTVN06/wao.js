const players = [
  "Messi - Forward - 25 - 15 - 34",
  "Ronaldo - Forward - 30 - 10 - 38",
  "Neymar - Forward - 18 - 20 - 32",
  "De Bruyne - Midfielder - 8 - 25 - 35",
  "Kante - Midfielder - 2 - 5 - 36",
  "Van Dijk - Defender - 5 - 3 - 33",
  "Alisson - Goalkeeper - 0 - 1 - 37",
];

function reportByPosition(player) {
  let minGoals = +prompt("Mời nhập số lượng bàn thắng tối thiểu ghi được");
  let result = player.filter((value) => {
    return +value.split("-")[2] >= minGoals;
  });
  let position = player.filter((value) => {
    return value.split("-")[1] == "Forward";
  });
}
