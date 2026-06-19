const schools = [
  {
    name: "School A",
    students: [{ grade: 12 }, { grade: 15 }],
  },
  {
    name: "School B",
    students: [{ grade: 18 }],
  },
];

function someavg(data) {
  let counter = 0;
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].students.length; x++) {
      sum += data[i].students[x].grade;
      counter++;
    }
  }
  return sum / counter;
}

function gradeAvg(data) {
  let { sum, counter } = data.reduce(
    (occ, school) => {
      return school.students.reduce((a, student) => {
        a.sum += student.grade;
        a.counter += 1;
        return a;
      }, occ);
    },
    { sum: 0, counter: 0 },
  );
  return sum / counter;
}
console.log(gradeAvg(schools));

const orders = [
  { product: "Laptop", quantity: 2 },
  { product: "Phone", quantity: 3 },
  { product: "Laptop", quantity: 1 },
  { product: "Tablet", quantity: 4 },
  { product: "Phone", quantity: 2 },
];

function groupOrders(data) {
  let result = data.reduce((acc, current) => {
    if (!acc[current.product]) {
      acc[current.product] = 0;
    }
    acc[current.product] += current.quantity;
    return acc;
  }, {});

  console.log(result);
}
groupOrders(orders);

const players = [
  { name: "Anas", score: 80 },
  { name: "Sara", score: 935 },
  { name: "Omar", score: 88 },
  { name: "Yasmine", score: 999 },
];

function getScorer(data) {
  let result = data.reduce((occ, curr) => {
    return occ > curr.score ? occ : curr.score;
  });

  return result;
}

const transactions = [
  { category: "Food", amount: 50 },
  { category: "Transport", amount: 20 },
  { category: "Food", amount: 30 },
  { category: "Bills", amount: 100 },
  { category: "Transport", amount: 15 },
];

function groupTransaction(data) {
  let result = data.reduce((occ, curr) => {
    if (!occ[curr.category]) {
      occ[curr.category] = 0;
    }
    occ[curr.category] += curr.amount;
    return occ;
  }, {});
  return result;
}

// console.log(groupTransaction(transactions));
// console.log(getScorer(players));

const users = [
  { name: "Anas", age: 22 },
  { name: "Sara", age: 30 },
  { name: "Omar", age: 18 },
  { name: "Yasmine", age: 25 },
];

function statistic(users) {
  let result = users.reduce(
    (acc, current) => {
      acc.totalUsers++;
      acc.totalAge += current.age;

      acc.oldestUser > current.age ? acc.oldestUser : current.age;

      return acc;
    },
    {
      totalUsers: 0,
      totalAge: 0,
      oldestUser: null,
    },
  );
  result.averageAge = result.totalAge / result.totalUsers;
  return result;
}

// console.log(statistic(users));

const stores = [
  {
    name: "Store A",
    orders: [{ amount: 100 }, { amount: 200 }],
  },
  {
    name: "Store B",
    orders: [{ amount: 50 }, { amount: 150 }],
  },
];

function sumStores(stores) {
  return stores.reduce(
    (acc, store) =>
      acc + store.orders.reduce((occ, order) => occ + order.amount, 0),
    0,
  );
}
4;

const shops = [
  {
    name: "Shop A",
    products: [
      { name: "Phone", price: 500, sold: 3 },
      { name: "Laptop", price: 1000, sold: 2 },
    ],
  },
  {
    name: "Shop B",
    products: [
      { name: "Phone", price: 500, sold: 5 },
      { name: "Tablet", price: 300, sold: 4 },
    ],
  },
];

// shops -> products -> name && solde && price

function SocialNetwork(shops) {
  return shops.reduce(
    (acc, shop) => {
      shop.products.forEach((product) => {
        const revenue = product.price * product.sold;

        acc.totalRevenue += revenue;

        acc.productRevenue[product.name] =
          (acc.productRevenue[product.name] || 0) + revenue;

        if (product.sold > acc.maxSold) {
          acc.maxSold = product.sold;
          acc.bestSellingProduct = product.name;
        }
      });

      return acc;
    },
    {
      totalRevenue: 0,
      productRevenue: {},
      maxSold: 0,
      bestSellingProduct: "",
    },
  );
}
// {
//   totalRevenue: number,
//   bestSellingProduct: string,
//   productRevenue: {
//     Phone: number,
//     Laptop: number,
//     Tablet: number
//   }
// }
// console.log(sumStores(stores));

// console.log(SocialNetwork(shops));

const companies = [
  {
    name: "A",
    employees: [{ salary: 5000 }, { salary: 7000 }],
  },
  {
    name: "B",
    employees: [{ salary: 10000 }],
  },
];

function bestSalary(data) {
  let result = data.reduce(function (acc, current) {
    let max = current.employees.reduce(function (occ, employee) {
      return occ > employee.salary ? occ : employee.salary;
    }, 0);
    return acc > max ? acc : max;
  }, 0);
  return result;
}

console.log(bestSalary(companies));

let empl = ["Anas", "Ali", "Sara", "Youssef", "Aicha"];

function Transformer(data) {
  let arr = [];
  let obj = {};

  for (let i = 0; i < data.length; i++) {
    let x = i + 1;
    obj = {
      id: x,
      name: data[i],
    };
    arr.push(obj);
  }
  return arr;
}

console.log(Transformer(empl));

const Users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];

const Orders = [
  { userId: 1, amount: 500 },
  { userId: 1, amount: 200 },
  { userId: 2, amount: 100 },
];

function Croisement(users, orders) {
  let result = [];

  for (let i = 0; i < users.length; i++) {
    let total = 0;
    for (let x = 0; x < orders.length; x++) {
      if (users[i].id === orders[x].userId) {
        total += orders[x].amount;
      }
    }
    result.push({
      name: users[i].name,
      total: total,
    });
  }
  return result;
}

console.log(Croisement(Users, Orders));

const Players = [
  { name: "Messi", goals: 50 },
  { name: "Ronaldo", goals: 40 },
  { name: "Mbappe", goals: 30 },
];
console.log("\n");

function treeFrequent(players) {
  let high = [];
  let low = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].goals >= 50) {
      high.push(players[i].name);
    } else if (players[i].goals <= 50) {
      low.push(players[i].name);
    }
  }
  return [high, low];
}
console.log(treeFrequent(Players));
Créer: [["Messi"], ["Ronaldo", "Mbappe"]];

const matches = [
  {
    homeClub: "Raja",
    awayClub: "Wydad",
    halfTime: "0-1",
    fullTime: "2-1",
  },
  {
    homeClub: "FAR",
    awayClub: "FUS",
    halfTime: "2-0",
    fullTime: "2-2",
  },
  {
    homeClub: "RSB",
    awayClub: "MAT",
    halfTime: "1-2",
    fullTime: "3-2",
  },
  {
    homeClub: "Wydad",
    awayClub: "FAR",
    halfTime: "0-0",
    fullTime: "1-0",
  },
];

function findComebackTeams(matches) {
  let result = [];
  for (let i = 0; i < matches.length; i++) {
    const [halfHome, halfAway] = matches[i].halfTime.split("-").map(Number);

    const [fullHome, fullAway] = matches[i].fullTime.split("-").map(Number);

    // console.log([firstScore, seconScore], [fullFScore, fullSScore]);

    if (halfHome < halfAway || fullHome < fullAway) {
      result.push({
        club: matches[i].homeClub,
        opponent: matches[i].awayClub,
        halfTime: matches[i].halfTime,
        fullTime: matches[i].fullTime,
      });
    }
  }
  return result;
}
console.log(findComebackTeams(matches));




