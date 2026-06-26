const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

const teams = [
  {
    name: "Mexico",
    group: "A",
    points: 0,
    fifaRank: 14,
    fifaScore: 1687.48,
    last10: [1, 0, 1, 1, -1, 0, 1, 0, 1, 1],
  },
  {
    name: "South Africa",
    group: "A",
    points: 0,
    fifaRank: 60,
    fifaScore: 1390.0,
    last10: [0, 1, -1, 1, 0, 0, 1, -1, 1, 0],
  },
  {
    name: "South Korea",
    group: "A",
    points: 0,
    fifaRank: 25,
    fifaScore: 1585.0,
    last10: [1, 1, 0, -1, 1, 0, 1, 1, 0, -1],
  },
  {
    name: "Czechia",
    group: "A",
    points: 0,
    fifaRank: 41,
    fifaScore: 1480.0,
    last10: [0, 1, 0, 1, -1, 1, 0, -1, 1, 0],
  },

  {
    name: "Canada",
    group: "B",
    points: 0,
    fifaRank: 39,
    fifaScore: 1500.0,
    last10: [1, 0, 1, -1, 1, 0, 0, 1, 1, -1],
  },
  {
    name: "Bosnia and Herzegovina",
    group: "B",
    points: 0,
    fifaRank: 65,
    fifaScore: 1365.0,
    last10: [0, -1, 1, 0, 1, -1, 0, 1, 0, -1],
  },
  {
    name: "Qatar",
    group: "B",
    points: 0,
    fifaRank: 55,
    fifaScore: 1410.0,
    last10: [1, 0, 0, 1, -1, 1, 0, -1, 0, 1],
  },
  {
    name: "Switzerland",
    group: "B",
    points: 0,
    fifaRank: 19,
    fifaScore: 1650.06,
    last10: [0, 1, 0, 1, -1, 1, 0, 1, 0, 0],
  },

  {
    name: "Brazil",
    group: "C",
    points: 0,
    fifaRank: 6,
    fifaScore: 1765.86,
    last10: [1, 1, 1, 1, 0, 1, 1, -1, 1, 1],
  },
  {
    name: "Morocco",
    group: "C",
    points: 0,
    fifaRank: 7,
    fifaScore: 1755.1,
    last10: [1, 1, 0, 1, -1, 1, 0, 1, 1, 0],
  },
  {
    name: "Haiti",
    group: "C",
    points: 0,
    fifaRank: 83,
    fifaScore: 1280.0,
    last10: [-1, 0, 1, -1, 0, 1, 0, -1, 1, 0],
  },
  {
    name: "Scotland",
    group: "C",
    points: 0,
    fifaRank: 43,
    fifaScore: 1470.0,
    last10: [1, 0, -1, 1, 0, 1, -1, 0, 1, 0],
  },

  {
    name: "United States",
    group: "D",
    points: 0,
    fifaRank: 17,
    fifaScore: 1671.23,
    last10: [0, 1, -1, 0, 1, 0, -1, 1, 0, 1],
  },
  {
    name: "Paraguay",
    group: "D",
    points: 0,
    fifaRank: 41,
    fifaScore: 1490.0,
    last10: [0, 0, 1, -1, 1, 0, -1, 1, 0, 0],
  },
  {
    name: "Australia",
    group: "D",
    points: 0,
    fifaRank: 20,
    fifaScore: 1615.0,
    last10: [1, 0, 1, 1, -1, 0, 1, 0, -1, 1],
  },
  {
    name: "Turkey",
    group: "D",
    points: 0,
    fifaRank: 22,
    fifaScore: 1605.0,
    last10: [1, 1, 0, -1, 1, 0, 1, -1, 0, 1],
  },

  {
    name: "Germany",
    group: "E",
    points: 0,
    fifaRank: 10,
    fifaScore: 1735.77,
    last10: [1, -1, 1, 0, 1, 0, 1, -1, 1, 0],
  },
  {
    name: "Curacao",
    group: "E",
    points: 0,
    fifaRank: 82,
    fifaScore: 1285.0,
    last10: [0, 1, -1, 0, 1, 0, -1, 0, 1, -1],
  },
  {
    name: "Ivory Coast",
    group: "E",
    points: 0,
    fifaRank: 34,
    fifaScore: 1530.0,
    last10: [1, 1, 0, 1, -1, 0, 1, 0, 1, -1],
  },
  {
    name: "Ecuador",
    group: "E",
    points: 0,
    fifaRank: 23,
    fifaScore: 1600.0,
    last10: [1, 0, 1, 0, 1, -1, 1, 0, -1, 1],
  },

  {
    name: "Netherlands",
    group: "F",
    points: 0,
    fifaRank: 8,
    fifaScore: 1753.57,
    last10: [1, 1, 0, 1, 0, -1, 1, 1, 0, 1],
  },
  {
    name: "Japan",
    group: "F",
    points: 0,
    fifaRank: 18,
    fifaScore: 1661.58,
    last10: [0, 1, -1, 1, 0, 1, -1, 1, 0, 1],
  },
  {
    name: "Sweden",
    group: "F",
    points: 0,
    fifaRank: 28,
    fifaScore: 1560.0,
    last10: [1, 1, 0, 1, -1, 1, 0, 0, 1, -1],
  },
  {
    name: "Tunisia",
    group: "F",
    points: 0,
    fifaRank: 45,
    fifaScore: 1450.0,
    last10: [0, 1, 0, -1, 1, 0, 1, -1, 0, 1],
  },

  {
    name: "Belgium",
    group: "G",
    points: 0,
    fifaRank: 9,
    fifaScore: 1742.24,
    last10: [1, 0, 1, 0, 1, -1, 0, 1, 1, 0],
  },
  {
    name: "Egypt",
    group: "G",
    points: 0,
    fifaRank: 32,
    fifaScore: 1540.0,
    last10: [1, 0, 1, -1, 1, 0, 0, 1, -1, 1],
  },
  {
    name: "Iran",
    group: "G",
    points: 0,
    fifaRank: 20,
    fifaScore: 1619.58,
    last10: [1, 0, 0, 1, -1, 0, 1, 1, 0, -1],
  },
  {
    name: "New Zealand",
    group: "G",
    points: 0,
    fifaRank: 75,
    fifaScore: 1320.0,
    last10: [0, 1, 0, -1, 0, 1, -1, 0, 1, 0],
  },

  {
    name: "Spain",
    group: "H",
    points: 0,
    fifaRank: 2,
    fifaScore: 1874.71,
    last10: [1, 0, 1, -1, 1, 0, 1, 1, 0, 1],
  },
  {
    name: "Cape Verde",
    group: "H",
    points: 0,
    fifaRank: 70,
    fifaScore: 1340.0,
    last10: [0, 1, 1, 0, -1, 0, 1, -1, 0, 1],
  },
  {
    name: "Saudi Arabia",
    group: "H",
    points: 0,
    fifaRank: 58,
    fifaScore: 1400.0,
    last10: [1, 0, -1, 1, 0, 0, 1, -1, 0, 1],
  },
  {
    name: "Uruguay",
    group: "H",
    points: 0,
    fifaRank: 16,
    fifaScore: 1673.07,
    last10: [1, 1, 0, 1, -1, 1, 0, 1, 0, -1],
  },

  {
    name: "France",
    group: "I",
    points: 0,
    fifaRank: 3,
    fifaScore: 1870.7,
    last10: [1, 1, 1, 0, 1, -1, 1, 0, 1, 1],
  },
  {
    name: "Senegal",
    group: "I",
    points: 0,
    fifaRank: 15,
    fifaScore: 1684.07,
    last10: [0, 1, 0, 1, -1, 1, 0, 0, 1, -1],
  },
  {
    name: "Iraq",
    group: "I",
    points: 0,
    fifaRank: 56,
    fifaScore: 1405.0,
    last10: [1, 0, -1, 0, 1, 1, 0, -1, 0, 1],
  },
  {
    name: "Norway",
    group: "I",
    points: 0,
    fifaRank: 30,
    fifaScore: 1550.0,
    last10: [1, 1, 0, 1, 0, -1, 1, 0, 1, 0],
  },

  {
    name: "Argentina",
    group: "J",
    points: 0,
    fifaRank: 1,
    fifaScore: 1877.27,
    last10: [1, 1, 0, 1, 1, 1, -1, 1, 0, 1],
  },
  {
    name: "Algeria",
    group: "J",
    points: 0,
    fifaRank: 38,
    fifaScore: 1505.0,
    last10: [1, 0, 1, -1, 1, 0, 0, 1, -1, 1],
  },
  {
    name: "Austria",
    group: "J",
    points: 0,
    fifaRank: 24,
    fifaScore: 1595.0,
    last10: [1, 1, 0, 1, -1, 1, 0, 0, 1, 0],
  },
  {
    name: "Jordan",
    group: "J",
    points: 0,
    fifaRank: 68,
    fifaScore: 1350.0,
    last10: [0, 1, -1, 0, 1, 0, 1, -1, 0, 0],
  },

  {
    name: "Portugal",
    group: "K",
    points: 0,
    fifaRank: 5,
    fifaScore: 1767.85,
    last10: [1, 1, 1, -1, 0, 1, 1, 0, -1, 1],
  },
  {
    name: "DR Congo",
    group: "K",
    points: 0,
    fifaRank: 49,
    fifaScore: 1430.0,
    last10: [0, 1, 0, 1, -1, 0, 1, 0, -1, 1],
  },
  {
    name: "Uzbekistan",
    group: "K",
    points: 0,
    fifaRank: 57,
    fifaScore: 1402.0,
    last10: [1, 0, -1, 1, 0, 1, 0, -1, 0, 1],
  },
  {
    name: "Colombia",
    group: "K",
    points: 0,
    fifaRank: 13,
    fifaScore: 1698.35,
    last10: [1, 1, 0, 1, 0, 1, -1, 0, 1, 1],
  },

  {
    name: "England",
    group: "L",
    points: 0,
    fifaRank: 4,
    fifaScore: 1828.02,
    last10: [1, 0, 1, 1, -1, 1, 0, 1, 0, 1],
  },
  {
    name: "Croatia",
    group: "L",
    points: 0,
    fifaRank: 11,
    fifaScore: 1714.87,
    last10: [1, 0, 1, 1, 0, -1, 1, 0, 1, 0],
  },
  {
    name: "Ghana",
    group: "L",
    points: 0,
    fifaRank: 72,
    fifaScore: 1330.0,
    last10: [0, 1, -1, 0, 1, 0, -1, 1, 0, 1],
  },
  {
    name: "Panama",
    group: "L",
    points: 0,
    fifaRank: 35,
    fifaScore: 1525.0,
    last10: [1, 0, 1, -1, 0, 1, 0, 1, -1, 0],
  },
];

const matches = [
  { teamA: "Mexico", teamB: "South Africa", goalsA: 2, goalsB: 0, group: "A" },
  { teamA: "South Korea", teamB: "Czechia", goalsA: 2, goalsB: 1, group: "A" },
  { teamA: "Czechia", teamB: "South Africa", goalsA: 1, goalsB: 1, group: "A" },
  { teamA: "Mexico", teamB: "South Korea", goalsA: 1, goalsB: 0, group: "A" },
  { teamA: "Czechia", teamB: "Mexico", goalsA: 0, goalsB: 2, group: "A" },
  {
    teamA: "South Africa",
    teamB: "South Korea",
    goalsA: 1,
    goalsB: 2,
    group: "A",
  },

  {
    teamA: "Canada",
    teamB: "Bosnia and Herzegovina",
    goalsA: 1,
    goalsB: 1,
    group: "B",
  },
  { teamA: "Qatar", teamB: "Switzerland", goalsA: 1, goalsB: 1, group: "B" },
  {
    teamA: "Switzerland",
    teamB: "Bosnia and Herzegovina",
    goalsA: 4,
    goalsB: 1,
    group: "B",
  },
  { teamA: "Canada", teamB: "Qatar", goalsA: 6, goalsB: 0, group: "B" },
  { teamA: "Switzerland", teamB: "Canada", goalsA: 2, goalsB: 2, group: "B" },
  {
    teamA: "Bosnia and Herzegovina",
    teamB: "Qatar",
    goalsA: 2,
    goalsB: 1,
    group: "B",
  },

  { teamA: "Brazil", teamB: "Morocco", goalsA: 1, goalsB: 1, group: "C" },
  { teamA: "Haiti", teamB: "Scotland", goalsA: 0, goalsB: 1, group: "C" },
  { teamA: "Scotland", teamB: "Morocco", goalsA: 0, goalsB: 1, group: "C" },
  { teamA: "Brazil", teamB: "Haiti", goalsA: 3, goalsB: 0, group: "C" },
  { teamA: "Scotland", teamB: "Brazil", goalsA: 0, goalsB: 2, group: "C" },
  { teamA: "Morocco", teamB: "Haiti", goalsA: 2, goalsB: 0, group: "C" },

  {
    teamA: "United States",
    teamB: "Paraguay",
    goalsA: 4,
    goalsB: 1,
    group: "D",
  },
  { teamA: "Australia", teamB: "Turkey", goalsA: 2, goalsB: 0, group: "D" },
  {
    teamA: "United States",
    teamB: "Australia",
    goalsA: 2,
    goalsB: 0,
    group: "D",
  },
  { teamA: "Turkey", teamB: "Paraguay", goalsA: 0, goalsB: 1, group: "D" },
  { teamA: "Turkey", teamB: "United States", goalsA: 1, goalsB: 2, group: "D" },
  { teamA: "Paraguay", teamB: "Australia", goalsA: 1, goalsB: 1, group: "D" },

  { teamA: "Germany", teamB: "Curacao", goalsA: 7, goalsB: 1, group: "E" },
  { teamA: "Ivory Coast", teamB: "Ecuador", goalsA: 1, goalsB: 0, group: "E" },
  { teamA: "Germany", teamB: "Ivory Coast", goalsA: 2, goalsB: 1, group: "E" },
  { teamA: "Ecuador", teamB: "Curacao", goalsA: 2, goalsB: 0, group: "E" },
  { teamA: "Ecuador", teamB: "Germany", goalsA: 1, goalsB: 3, group: "E" },
  { teamA: "Curacao", teamB: "Ivory Coast", goalsA: 0, goalsB: 2, group: "E" },

  { teamA: "Netherlands", teamB: "Japan", goalsA: 2, goalsB: 2, group: "F" },
  { teamA: "Sweden", teamB: "Tunisia", goalsA: 5, goalsB: 1, group: "F" },
  { teamA: "Netherlands", teamB: "Sweden", goalsA: 2, goalsB: 1, group: "F" },
  { teamA: "Tunisia", teamB: "Japan", goalsA: 0, goalsB: 2, group: "F" },
  { teamA: "Tunisia", teamB: "Netherlands", goalsA: 0, goalsB: 3, group: "F" },
  { teamA: "Japan", teamB: "Sweden", goalsA: 1, goalsB: 1, group: "F" },

  { teamA: "Belgium", teamB: "Egypt", goalsA: 1, goalsB: 1, group: "G" },
  { teamA: "Iran", teamB: "New Zealand", goalsA: 2, goalsB: 2, group: "G" },
  { teamA: "Belgium", teamB: "Iran", goalsA: 2, goalsB: 1, group: "G" },
  { teamA: "New Zealand", teamB: "Egypt", goalsA: 0, goalsB: 2, group: "G" },
  { teamA: "New Zealand", teamB: "Belgium", goalsA: 0, goalsB: 3, group: "G" },
  { teamA: "Egypt", teamB: "Iran", goalsA: 1, goalsB: 1, group: "G" },

  { teamA: "Spain", teamB: "Cape Verde", goalsA: 0, goalsB: 0, group: "H" },
  { teamA: "Saudi Arabia", teamB: "Uruguay", goalsA: 1, goalsB: 1, group: "H" },
  { teamA: "Spain", teamB: "Saudi Arabia", goalsA: 3, goalsB: 0, group: "H" },
  { teamA: "Uruguay", teamB: "Cape Verde", goalsA: 2, goalsB: 0, group: "H" },
  { teamA: "Uruguay", teamB: "Spain", goalsA: 1, goalsB: 2, group: "H" },
  {
    teamA: "Cape Verde",
    teamB: "Saudi Arabia",
    goalsA: 1,
    goalsB: 1,
    group: "H",
  },

  { teamA: "France", teamB: "Senegal", goalsA: 3, goalsB: 1, group: "I" },
  { teamA: "Iraq", teamB: "Norway", goalsA: 1, goalsB: 4, group: "I" },
  { teamA: "France", teamB: "Iraq", goalsA: 4, goalsB: 0, group: "I" },
  { teamA: "Norway", teamB: "Senegal", goalsA: 2, goalsB: 2, group: "I" },
  { teamA: "Norway", teamB: "France", goalsA: 1, goalsB: 2, group: "I" },
  { teamA: "Senegal", teamB: "Iraq", goalsA: 2, goalsB: 0, group: "I" },

  { teamA: "Argentina", teamB: "Algeria", goalsA: 3, goalsB: 0, group: "J" },
  { teamA: "Austria", teamB: "Jordan", goalsA: 3, goalsB: 1, group: "J" },
  { teamA: "Argentina", teamB: "Austria", goalsA: 2, goalsB: 1, group: "J" },
  { teamA: "Jordan", teamB: "Algeria", goalsA: 0, goalsB: 2, group: "J" },
  { teamA: "Jordan", teamB: "Argentina", goalsA: 0, goalsB: 3, group: "J" },
  { teamA: "Algeria", teamB: "Austria", goalsA: 1, goalsB: 1, group: "J" },

  { teamA: "Portugal", teamB: "DR Congo", goalsA: 1, goalsB: 1, group: "K" },
  { teamA: "Uzbekistan", teamB: "Colombia", goalsA: 1, goalsB: 3, group: "K" },
  { teamA: "Portugal", teamB: "Uzbekistan", goalsA: 3, goalsB: 0, group: "K" },
  { teamA: "Colombia", teamB: "DR Congo", goalsA: 2, goalsB: 1, group: "K" },
  { teamA: "Colombia", teamB: "Portugal", goalsA: 1, goalsB: 2, group: "K" },
  { teamA: "DR Congo", teamB: "Uzbekistan", goalsA: 1, goalsB: 0, group: "K" },

  { teamA: "England", teamB: "Croatia", goalsA: 4, goalsB: 2, group: "L" },
  { teamA: "Ghana", teamB: "Panama", goalsA: 1, goalsB: 0, group: "L" },
  { teamA: "England", teamB: "Ghana", goalsA: 2, goalsB: 0, group: "L" },
  { teamA: "Panama", teamB: "Croatia", goalsA: 0, goalsB: 2, group: "L" },
  { teamA: "Panama", teamB: "England", goalsA: 0, goalsB: 3, group: "L" },
  { teamA: "Croatia", teamB: "Ghana", goalsA: 2, goalsB: 1, group: "L" },
];

function updateTeamsPoints(teams, matches) {
  // votre code

  const updatedTeams = teams.map((team) => ({
    ...team,
    points: 0,
  }));

  matches.forEach((match) => {
    const { teamA, teamB, goalsA, goalsB } = match;

    const teamAobj = updatedTeams.find((t) => t.name === teamA);
    const teamBobj = updatedTeams.find((t) => t.name === teamB);

    if (!teamAobj || !teamBobj) {
      console.log(`Equipe non trouver: ${teamA} ou ${teamB}`);
    }

    if (goalsA > goalsB) {
      teamAobj.points += 3;
    }
    if (goalsB > goalsA) {
      teamBobj.points += 3;
    }
    if (goalsA === goalsB) {
      teamAobj.points++;
      teamBobj.points++;
    }
  });
  return updatedTeams;
}

const result = updateTeamsPoints(teams, matches);
// console.log(result);

function generateGroupStandings(groups, teams) {
  // votre code

  let obj = {};
  let result = [];
  for (let i = 0; i < groups.length; i++) {
    let teamss = teams.filter((team) => {
      return team.group == groups[i];
    });
    let sortedTeams = teamss.sort((a, b) => {
      if (a.points !== b.points) {
        return b.points - a.points;
      }
      if (a.fifaRank !== b.fifaRank) {
        return a.fifaRank - b.fifaRank;
      }
      if (a.fifaScore !== b.fifaScore) {
        return b.fifaScore - a.fifaScore;
      }

      const sumA = a.last10.reduce((acc, val) => acc + val, 0);
      const sumB = b.last10.reduce((acc, val) => acc + val, 0);
      return sumB - sumA;
    });

    const standings = sortedTeams.map((team, index) => ({
      rank: index + 1,
      team: team.name,
      points: team.points,
    }));

    result.push({
      group: groups[i],
      standings: standings,
    });
  }
  return result;
}

let res = generateGroupStandings(groups, teams);
for(let o =0;o<res.length;o++){
  console.log(res[o])
}