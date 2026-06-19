const temperatures = [20, 22, 18, 25, 25];

function totalTemperature(data) {
  let somme = temperatures.reduce(function (prev, next) {
    return prev + next;
  });

  return somme;
}

console.log(totalTemperature(temperatures));

const sales = [
  { city: "Casa", amount: 1200 },
  { city: "Rabat", amount: 800 },
  { city: "Casa", amount: 600 },
];

function totalSales(data) {
  let sommeventes = sales.reduce(function (prev, next) {
    return prev + next.amount;
  }, 0);

  return sommeventes;
}

console.log(totalSales(sales));

const students = [
  { name: "Ali", score: 12 },
  { name: "Sara", score: 18 },
  { name: "Said", score: 16 },
  { name: "Sami", score: 20 },
  { name: "Hana", score: 10 },
  { name: "Yassine", score: 15 },
];

function bestStudent(students) {
  let max = students.reduce(function (prev, next) {
    return prev > next.score ? prev : next.score;
  }, 0);
  return max;
}

console.log(bestStudent(students));

const cities = [
  { name: "Casa", population: 4000 },
  { name: "Rabat", population: 2000 },
  { name: "Agadir", population: 1000 },
  { name: "Paris", population: 7000 },
  { name: "Vienne", population: 8000 },
  { name: "Fes", population: 3000 },
];

function betsPopulate(cities) {
  let best = cities.reduce(function (prev, next) {
    return prev > next.population ? prev : next.population;
  }, 0);

  return best;
}

console.log(betsPopulate(cities));

const users = [
  { name: "Ali", city: "Casa" },
  { name: "Sara", city: "Casa" },
  { name: "Youssef", city: "Fes" },
];

function regroupUsers(users) {
  let grouped = users.reduce(function (prev, user) {
    if (!prev[user.city]) {
      prev[user.city] = [];
    }
    prev[user.city].push(user.name);
    return prev;
  }, {});
  return grouped;
}

console.log(regroupUsers(users));

const products = [
  { name: "PC", category: "Tech" },
  { name: "Mouse", category: "Tech" },
  { name: "Chair", category: "Furniture" },
];

function grouperCategory(products) {
  let groupedCat = products.reduce(function (acc, user) {
    if (!acc[user.category]) {
      acc[user.category] = [];
    }
    acc[user.category].push(user.name);
    return acc;
  }, {});

  return groupedCat;
}

console.log(grouperCategory(products));

const matrix = [
  [5, -2, -3, 0],
  [4, 0, -1, 8],
  [-6, -2, 0, 3],
  [0, -4, -5, 2],
];

// console.log(matrix.lenght)

function findUnstableZones(matrix) {
  let cells = [];
  const obj = {};
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
      const current = matrix[i][x];

      const left = matrix[i]?.[x - 1];
      const right = matrix[i]?.[x + 1];
      const top = matrix[i - 1]?.[x];
      const bottom = matrix[i + 1]?.[x];

      if (current < 0 && (left < 0 || right < 0 || top < 0 || bottom < 0)) {
        cells.push({
          row: i,
          col: x,
          value: current,
        });
      }
    }
    result.push(cells);
    cells = [];
  }

  return result;
}

console.log(findUnstableZones(matrix));

// Sortie attendue

[
  {
    cells: [
      { row: 0, col: 1, value: -2 },
      { row: 0, col: 2, value: -3 },
      { row: 1, col: 2, value: -1 },
    ],
    total: -6,
  },
  {
    cells: [
      { row: 2, col: 0, value: -6 },
      { row: 2, col: 1, value: -2 },
      { row: 3, col: 1, value: -4 },
      { row: 3, col: 2, value: -5 },
    ],
    total: -17,
  },
];

const deliveries = [
  {
    id: "D1",
    driverId: 1,
    driverName: "Yassine",
    status: "delivered",
    expectedMinutes: 30,
    actualMinutes: 25,
    relatedTo: null,
  },
  {
    id: "D2",
    driverId: 2,
    driverName: "Imane",
    status: "delivered",
    expectedMinutes: 20,
    actualMinutes: 35,
    relatedTo: "D1",
  },
  {
    id: "D3",
    driverId: 1,
    driverName: "Yassine",
    status: "cancelled",
    expectedMinutes: 40,
    actualMinutes: null,
    relatedTo: null,
  },
  {
    id: "D4",
    driverId: 3,
    driverName: "Omar",
    status: "delivered",
    expectedMinutes: 50,
    actualMinutes: 45,
    relatedTo: "D2",
  },
  {
    id: "D5",
    driverId: 2,
    driverName: "Imane",
    status: "delivered",
    expectedMinutes: 25,
    actualMinutes: 20,
    relatedTo: null,
  },
  {
    id: "D6",
    driverId: 3,
    driverName: "Omar",
    status: "failed",
    expectedMinutes: 35,
    actualMinutes: null,
    relatedTo: "D5",
  },
  {
    id: "D7",
    driverId: 2,
    driverName: "Imane",
    status: "delivered",
    expectedMinutes: 30,
    actualMinutes: 30,
    relatedTo: "D4",
  },
];

// function analyzeDrivers(deliveries) {
//   for (let i = 0; i < deliveries.length; i++) {
//     let deliveredTime =
//       deliveries[i].actualMinutes - deliveries[i].expectedMinutes;
//     if (deliveredTime > 0) {
//       score;
//     }
//   }
// }

// analyzeDrivers(deliveries);
