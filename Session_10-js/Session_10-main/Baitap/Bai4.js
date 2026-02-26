const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 },
];
function analyzeSalary(minYears, teamPlayers){
    minYears = players.map(players =>players.years).filter(years=>years >= 10);
    teamPlayers = minYears.reduce((total,years) =>{
        return total + years;
    })
    let maxsalary = players.reduce((max,player)=>{
        return max > player.salary ? max : player.salary;
    })
    let minsalary = players.reduce((min,player)=>{
        return min < player.salary ? min : player.salary;
    })
    console.log(`Tong so tien luong cua cau thu:${teamPlayers}\n Muc luong cao nhat:${maxsalary} \n Muc luong thap nhat:${minsalary}`);
};
analyzeSalary();