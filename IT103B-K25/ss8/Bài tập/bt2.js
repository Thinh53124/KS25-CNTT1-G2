const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];

function getUpperNames(){
    playerNames.forEach(playerName =>{
        console.log(playerName.toUpperCase());
    })
}

getUpperNames();