const sales = [
  { seller: "Sara", amount: 1200 },
  { seller: "Mehdi", amount: 800 },
  { seller: "Sara", amount: 500 },
  { seller: "Nora", amount: 1500 },
  { seller: "Mehdi", amount: 700 },
];

function findBestSeller(sales) {
  let obj = {};
  for (let i = 0; i < sales.length; i++) {
    // console.log(sales.seller);
    if (!obj[sales[i].seller]) {
      obj[sales[i].seller] = 0;
    }
    obj[sales[i].seller] += sales[i].amount;
  }
  console.log(obj);
  let result = Object.entries(obj).reduce((bestSeller, current) =>
    bestSeller[1] > current[1] ? bestSeller : current,
  );
  console.log(result);
}
findBestSeller(sales);

const Sales = [
  { region: "Nord", amount: 1000 },
  { region: "Sud", amount: 700 },
  { region: "Nord", amount: 300 },
  { region: "Est", amount: 500 },
  { region: "Sud", amount: 400 },
];

function calculateSalesByRegion(sales) {
  let obj = {};
  for (let i = 0; i < sales.length; i++) {
    if (!obj[sales[i].region]) {
      obj[sales[i].region] = 0;
    }
    obj[sales[i].region] += sales[i].amount;
  }
  return obj;
}

console.log(calculateSalesByRegion(Sales));

const regions = [
  {
    name: "Nord",
    branches: [
      { name: "Tanger", revenue: 300 },
      { name: "Tetouan", revenue: 100 },
      { name: "Al Hoceima", revenue: 80 },
    ],
  },
  {
    name: "Sud",
    branches: [
      { name: "Agadir", revenue: 200 },
      { name: "Laayoune", revenue: 150 },
      { name: "Dakhla", revenue: 100 },
    ],
  },
];

function findDominantBranches(regions) {
  let obj = {};
  let result = [];

  for (let i = 0; i < regions.length; i++) {
    for (let x = 0; x < regions[i].branches.length; x++) {
      let totalRevenue = regions[i].branches.reduce(
        (revenue, current) => revenue + current.revenue,
        0,
      );
      let otherRevunue = totalRevenue - regions[i].branches[x].revenue;

      if (otherRevunue < regions[i].branches[x].revenue) {
        result.push({
          region: regions[i].name,
          branche: regions[i].branches[x].name,
          revenue: regions[i].branches[x].revenue,
        });
      }
    }
  }

  return result;
}
console.log(findDominantBranches(regions));

const invoices = [
  { id: "F1", client: "Sara", amount: 100 },
  { id: "F2", client: "Sara", amount: 120 },
  { id: "F3", client: "Sara", amount: 350 },

  { id: "F4", client: "Mehdi", amount: 80 },
  { id: "F5", client: "Mehdi", amount: 90 },
  { id: "F6", client: "Mehdi", amount: 85 },

  { id: "F7", client: "Nora", amount: 50 },
  { id: "F8", client: "Nora", amount: 60 },
  { id: "F9", client: "Nora", amount: 180 },
];

function findSuspiciousInvoices(invoices) {
  let result = [];

  invoices.forEach((invoice) => {
    let sameClientInvoice = invoices.filter(
      (inv) => inv.client === invoice.client && inv.id !== invoice.id,
    );

    let average =
      sameClientInvoice.reduce((sum, inv) => sum + inv.amount, 0) /
      sameClientInvoice.length;

    if (invoice.amount > average * 2) {
      result.push({
        invoiceId: invoice.id,
        client: invoice.client,
        amount: invoice.amount,
      });
    }
  });
  return result;
}
console.log(findSuspiciousInvoices(invoices));

const employees = [
  {
    id: 1,
    name: "Sara",
    manages: [2, 3],
  },
  {
    id: 2,
    name: "Mehdi",
    manages: [4],
  },
  {
    id: 3,
    name: "Nora",
    manages: [],
  },
  {
    id: 4,
    name: "Yassine",
    manages: [],
  },
];

const ssales = [
  { employeeId: 1, amount: 1000 },
  { employeeId: 2, amount: 700 },
  { employeeId: 3, amount: 500 },
  { employeeId: 4, amount: 300 },
];

function findBestManager(employees, sales) {
  function getRevenue(id) {
    let employee = employees.find((emp) => emp.id === id);

    let sale = sales.find((sale) => sale.employeeId === id);
    let total = sale ? sale.amount : 0;
    employee.manages.forEach((managedId) => {
      total += getRevenue(managedId);
    });
    // console.log(employee, "employee", sales, "sales", "\n");
    return total;
  }

  let bestManager = "";
  let maxRevenue = 0;

  employees.forEach((employee) => {
    let revenue = getRevenue(employee.id);

    if (revenue > maxRevenue) {
      maxRevenue = revenue;
      bestManager = employee.name;
    }
  });
  return {
    manager: bestManager,
    networkRevenue: maxRevenue,
  };
}
console.log(findBestManager(employees, ssales));

function somme(arr) {
  let sum = 0;
  for (let x = 0; x < arr.length; x++) {
    sum += arr[x];
  }
  console.log(sum);
  return sum;
}

function findBestSalesRow(matrix) {
  // votre code
  let result = {
    row: 0,
    value: somme(matrix[0]),
  };

  for (let i = 0; i < matrix.length - 1; i++) {
    let currentsomme = somme(matrix[i]);

    if (currentsomme > result.value) {
      result = {
        row: i,
        value: currentsomme,
      };
    }
  }
  console.log(result);
}

const matrixxx = [
  [1, 0, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 0],
];

function findWeakColumns(matrix, limit) {
  // votre code

  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let currentsum = 0;
    for (let x = 0; x < matrix.length; x++) {
      currentsum += matrix[x][i];
    }
    console.log(currentsum);
    if (currentsum < limit) {
      result.push({ col: i, value: currentsum });
    }
  }
  console.log(result);
}
// findWeakColumns(matrix, 2);

const matrixx = [
  [12, 45, 78, 23, 56, 89, 34, 67, 90, 11],
  [54, 21, 87, 65, 43, 12, 98, 76, 32, 19],
  [91, 37, 64, 28, 75, 49, 16, 83, 57, 22],
  [33, 88, 15, 72, 46, 95, 61, 27, 84, 50],
  [69, 14, 92, 38, 81, 25, 53, 97, 41, 66],
  [20, 73, 47, 99, 30, 58, 85, 13, 70, 44],
  [86, 52, 18, 63, 94, 35, 79, 24, 60, 17],
  [42, 96, 31, 68, 10, 77, 55, 82, 26, 93],
  [74, 29, 59, 40, 87, 21, 91, 36, 65, 48],
  [15, 80, 44, 57, 32, 69, 23, 98, 71, 54],
];

// findBestSalesRow(matrix);

const matrix = [
  [40, 8, 2, 6],
  [10, 3, 5, 2],
  [1, 9, 7, 4],
  [6, 2, 8, 3],
];

function findUnbalancedSales(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = matrix[i].reduce((sum, current) => sum + current, 0);

    for (let x = 0; x < matrix[i].length; x++) {
      let colSum = 0;

      for (let o = 0; o < matrix.length; o++) {
        colSum += matrix[o][x];
      }

      if (rowSum > colSum * 2 || colSum > rowSum * 2) {
        result.push({
          row: i,
          col: x,
          value: matrix[i][x],
          rowSum,
          colSum,
          type: "Unbalanced",
        });
      }
    }
  }

  return result;
}
console.log(findUnbalancedSales(matrix));
