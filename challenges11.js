const company = {
  name: "TechNova",
  founded: 2018,
  departments: [
    {
      id: 1,
      name: "Engineering",
      employees: [
        {
          id: 101,
          name: "Alice",
          age: 29,
          salary: 8500,
          projects: ["AI Platform", "Dashboard"],
        },
        {
          id: 102,
          name: "Bob",
          age: 34,
          salary: 9500,
          projects: ["API Gateway"],
        },
        {
          id: 103,
          name: "Charlie",
          age: 26,
          salary: 7800,
          projects: ["Dashboard", "Mobile App"],
        },
      ],
    },
    {
      id: 2,
      name: "Marketing",
      employees: [
        {
          id: 201,
          name: "David",
          age: 31,
          salary: 6200,
          projects: ["SEO Campaign"],
        },
        {
          id: 202,
          name: "Emma",
          age: 27,
          salary: 5800,
          projects: ["Social Media", "SEO Campaign"],
        },
      ],
    },
    {
      id: 3,
      name: "Sales",
      employees: [
        {
          id: 301,
          name: "Frank",
          age: 38,
          salary: 7200,
          projects: ["Enterprise Deals"],
        },
        {
          id: 302,
          name: "Grace",
          age: 30,
          salary: 6900,
          projects: ["Enterprise Deals", "CRM Upgrade"],
        },
      ],
    },
  ],
};

function getNames(company) {
  let result = company.departments.map((department) =>
    department.employees.map((emplyee) => emplyee.name),
  );

  return result;
}
// console.log(getNames(company));

function getSalary(company) {
  return company.departments.reduce((total, department) => {
    return (
      total +
      department.employees.reduce((totalSalary, emplyee) => {
        return totalSalary + emplyee.salary;
      }, 0)
    );
  }, 0);
}

// console.log(getSalary(company));
// company -> departements -> employee -> projects
// obj     ->   array       -> array      -> array

function dashboardEmployee(company) {
  let result = [];

  for (let i = 0; i < company.departments.length; i++) {
    for (let x = 0; x < company.departments[i].employees.length; x++) {
      for (
        let o = 0;
        o < company.departments[i].employees[x].projects.length;
        o++
      ) {
        if (company.departments[i].employees[x].projects[o] === "Dashboard") {
          result.push(company.departments[i].employees[x]);
        }
      }
    }
  }
  return result;
}

// console.log(dashboardEmployee(company));

const categories = [
  {
    name: "Laptops",
    products: [
      { name: "Dell XPS", sales: 120 },
      { name: "MacBook Pro", sales: 50 },
      { name: "Lenovo ThinkPad", sales: 40 },
    ],
  },
  {
    name: "Phones",
    products: [
      { name: "iPhone", sales: 100 },
      { name: "Samsung Galaxy", sales: 90 },
      { name: "Pixel", sales: 70 },
    ],
  },
  {
    name: "Consoles",
    products: [
      { name: "PlayStation 5", sales: 200 },
      { name: "Xbox Series X", sales: 60 },
      { name: "Nintendo Switch", sales: 50 },
    ],
  },
];

function findDominantProducts(categories) {
  let result = [];

  categories.forEach((category, index) => {
    let max = category.products[0];
    let indexOf = 0;
    for (let i = 0; i < category.products.length; i++) {
      // console.log(max);
      // console.log(category.products[i])

      if (max < category.products[i]) {
        max = category.products[i];
      }
    }
    result.push(max);
  });
  return result;
}
console.log(findDominantProducts(categories));

const rooms = [
  { id: "R1", name: "Salle Java", capacity: 20 },
  { id: "R2", name: "Salle React", capacity: 15 },
  { id: "R3", name: "Salle Cloud", capacity: 25 },
];

const reservations = [
  { roomId: "R1", slot: "09:00", participants: 12 },
  { roomId: "R1", slot: "09:00", participants: 10 },

  { roomId: "R2", slot: "10:00", participants: 8 },
  { roomId: "R2", slot: "10:00", participants: 5 },

  { roomId: "R3", slot: "14:00", participants: 15 },
  { roomId: "R3", slot: "14:00", participants: 12 },
];

function findOverloadedRooms(reservations, rooms) {
  let obj = {};
  let arr = [];

  for (let i = 0; i < reservations.length; i++) {
    if (!obj[reservations[i].roomId]) {
      obj[reservations[i].roomId] = 0;
    }
    obj[reservations[i].roomId] += reservations[i].participants;
  }


  for (let x = 0; x < rooms.length; x++) {
    let capacity = obj[rooms[x].id];
  

    if (capacity > rooms[x].capacity) {
      arr.push({
        room: rooms[x].name,
        //   slot: "09:00",
        totalParticipants: capacity,
        capacity: rooms[x].capacity,
      });
    }
    // console.log(arr)
  }


  return arr;

  //   console.log(obj);
}
console.log(findOverloadedRooms(reservations, rooms));



const orders = [
    { id: "O1", client: "Sara", amount: 100 },
    { id: "O2", client: "Sara", amount: 120 },
    { id: "O3", client: "Sara", amount: 300 },

    { id: "O4", client: "Mehdi", amount: 80 },
    { id: "O5", client: "Mehdi", amount: 90 },
    { id: "O6", client: "Mehdi", amount: 85 },

    { id: "O7", client: "Nora", amount: 50 },
    { id: "O8", client: "Nora", amount: 55 },
    { id: "O9", client: "Nora", amount: 200 }
];





const teams = [
    {
        name: "Frontend",
        employees: [
            { name: "Sara", tasks: 40 },
            { name: "Nora", tasks: 15 },
            { name: "Yassine", tasks: 10 }
        ]
    },
    {
        name: "Backend",
        employees: [
            { name: "Ali", tasks: 20 },
            { name: "Mehdi", tasks: 18 },
            { name: "Omar", tasks: 15 }
        ]
    },
    {
        name: "DevOps",
        employees: [
            { name: "Anas", tasks: 50 },
            { name: "Karim", tasks: 20 },
            { name: "Hamza", tasks: 15 }
        ]
    }
];

console.log('\n\n\n\n\n\n\n');

function findUnbalancedTeams(teams) {
    
  let result = [];
  for(let i = 0; i < teams.length;i++){


    for(let x = 0; x < teams[i].employees.length;x++){

      let currentTask = teams[i].employees[x].tasks;
      let totalTasks = teams[i].employees.reduce((sum, current) => sum + current.tasks, 0);
      let otherTasks = totalTasks - currentTask;

      if(currentTask > otherTasks){

        result.push({
          team: teams[i].name,
          employee: teams[i].employees[x].name,
          tasks: teams[i].employees[x].tasks
        });

      }
      // console.log(currentTask, totalTasks,otherTasks,);
      
      // console.log(teams[i].employees[x].tasks);
    }

  }
  return result;
}
console.log(findUnbalancedTeams(teams));
console.log('\n\n');






const products = [
    {
        code: "A",
        requires: ["B", "C"]
    },
    {
        code: "B",
        requires: []
    },
    {
        code: "D",
        requires: ["X"]
    },
    {
        code: "E",
        requires: ["A", "Z"]
    }
];

function findOrphanProducts(products) {
    let result = [];

    let codes = products.reduce((acc, current) => {
      acc.push(current.code);
      return acc;
    }, []);
    // console.log(codes);
  for(let i = 0; i< products.length;i++){

    for(let x = 0; x<products[i].requires.length;x++){

      if(!codes.includes(products[i].requires[x])){

        result.push({
          product: products[i].code,
          missing: products[i].requires[x]
        });

      }
    }

  }
  return result;
}

console.log(findOrphanProducts(products));



const stores = [
    {
        name: "Store A",
        purchases: [
            { customer: "Sara", amount: 500 },
            { customer: "Nora", amount: 150 },
            { customer: "Mehdi", amount: 100 }
        ]
    },
    {
        name: "Store B",
        purchases: [
            { customer: "Ali", amount: 200 },
            { customer: "Hamza", amount: 180 },
            { customer: "Karim", amount: 150 }
        ]
    }
];



function findLoyalCustomers(stores) {
    let result = []
  stores.forEach(store => {
    
    let totalamount = store.purchases.reduce((total, curr) => {
      return total + curr.amount;
    },0);

    store.purchases.forEach(purchase => {
      let currentAmount = purchase.amount;
      let purcent = totalamount * 0.5;

      if(currentAmount > purcent){
        result.push({
          store: store.name,
          customer: purchase.customer,
          amount: purchase.amount
        });

      }
    })
    
  });
  return result;
}
console.log(findLoyalCustomers(stores));