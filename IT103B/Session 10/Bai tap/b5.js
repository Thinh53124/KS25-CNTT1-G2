const teamHistory = [
  {
    name: "Messi",
    position: "Forward",
    nationality: "Argentina",
    seasons: {
      "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
      "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
      "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 },
    },
  },
  {
    name: "Ronaldo",
    position: "Forward",
    nationality: "Portugal",
    seasons: {
      "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
      "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
      "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 },
    },
  },
];
generatePlayerSeasonReport("Messi", teamHistory);

function generatePlayerSeasonReport(nameWannaFind, teamHistory) {
  let report = {
    name: "",
    position: "",
    nationality: "",
    careerStats: {
      totalMatches: 0,
      totalGoals: 0,
      totalAssists: 0,
      totalYellowCards: 0,
      averageGoalsPerMatch: 0,
      averageAssistsPerMatch: 0,
      bestSeason: {
        season: "",
        goals: 0,
        assists: 0,
      },
    },
  };
  teamHistory.forEach((value) => {
    if (value.names === nameWannaFind) {
      report.name = value.names;
      report.position = value.position;
      report.nationality = value.nationality;

      for (let seasonName in value.sessions) {
        const season = value.sessions[seasonName];

        report.careerStats.totalMatches += season.matches;
        report.careerStats.totalGoals += season.goals;
        report.careerStats.totalAssists += season.assists;
        report.careerStats.totalYellowCards += season.yellowCards;
        const contribution = season.goals + season.assists;
        const currentBestContribution =
          report.careerStats.bestSeason.goals +
          report.careerStats.bestSeason.assists;
        if (contribution > currentBestContribution) {
          report.careerStats.bestSeason = {
            season: seasonName,
            goals: season.goals,
            assists: season.assists,
          };
        }
      }
      report.careerStats.averageGoalsPerMatch = (
        report.careerStats.totalGoals / report.careerStats.totalMatches
      ).toFixed(2);
      report.careerStats.averageAssistsPerMatch = (
        report.careerStats.totalAssists / report.careerStats.totalMatches
      ).toFixed(2);
    }
  });
  console.log(report);
}