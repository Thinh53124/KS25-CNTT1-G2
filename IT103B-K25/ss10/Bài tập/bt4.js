const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 },
];

function analyzeSalary(minYear) {
    const experiencedPlayers = players.filter(p => p.years >= minYear);
    const totalSalary = experiencedPlayers.reduce((total, p) => total + p.salary, 0);
    const maxPaidSalary = players.reduce((max, p) => (p.salary > max ? p.salary : max), players[0].salary);
    const minPaidSalary = players.reduce((min, p) => (p.salary < min ? p.salary : min), players[0].salary);

    console.log(`--- Kết quả (Điều kiện: >= ${threshold} năm) ---`);
    console.log(`Tổng lương nhóm: ${totalSalary}`);
    console.log(`Lương cao nhất hệ thống: ${maxPaidSalary}`);
    console.log(`Lương thấp nhất hệ thống: ${minPaidSalary}`);
};

analyzeSalary(10);