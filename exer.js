const { use } = require("react");

let arr = [3, 1, 4, 9, 5, 6, 7, 44, 33, 8];

function findMax(arr) {
  const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
  return max;
}


function tostr(str) {
  let reverse = str.split("").reverse().join("");
  return reverse;
}

// console.log(tostr("yag si ohab"));

function findmax2() {
  return arr.reduce((acc, n) => {
    if (acc < n) {
      acc = n;
    }
    return acc;
  }, arr[0]);
}

// console.log(findmax2());

for (let i = 0; i < arr.length - 1; i++) {
  for (let o = i + 1; o < arr.length; o++) {
    if (arr[i] < arr[o]) {
      let temp = arr[i];
      arr[i] = arr[o];
      arr[o] = temp;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    //   console.log(arr[i]);
  }

  arrr = arr.map((e) => e * 2);

  for (let i = 0; i < arrr.length; i++) {
    //   console.log(arrr[i]);
  }

  

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 8000,
      category: "electronics",
      stock: 10,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Souris",
      price: 150,
      category: "electronics",
      stock: 25,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Livre PHP",
      price: 350,
      category: "books",
      stock: 5,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Clavier",
      price: 300,
      category: "electronics",
      stock: 0,
      rating: 4.0,
    },
    {
      id: 5,
      name: "Cahier",
      price: 20,
      category: "stationery",
      stock: 100,
      rating: 3.5,
    },
    {
      id: 6,
      name: "Stylo",
      price: 10,
      category: "stationery",
      stock: 200,
      rating: 4.1,
    },
    {
      id: 7,
      name: "Tablette",
      price: 3000,
      category: "electronics",
      stock: 8,
      rating: 4.7,
    },
    {
      id: 8,
      name: "Roman",
      price: 120,
      category: "books",
      stock: 15,
      rating: 4.3,
    },
  ];

  let noms = [];
  for (let i = 0; i < users.length; i++) {
    noms[i] = users[i].name;

    // console.log(noms[i]);
  }
  for (let i = 0; i < users.length; i++) {
    // console.log(noms[i]);
  }

  let prix = [];

  for (let i = 0; i < products.length; i++) {
    prix[i] = products[i].price + products[i].price * (20 / 100);
    // console.log(prix[i]);
  }

  let majnoms = [];

  for (let i = 0; i < users.length; i++) {
    majnoms[i] = users[i].name.toUpperCase();

    // console.log(majnoms[i]);
  }

  let agedouble = [];

  for (let o = 0; o < users.length; o++) {
    agedouble[o] = users[o].age * 2;

    // console.log(agedouble[o]);
  }

  let max = 0;
  let secondmax = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondmax = max;
      max = arr[i];
    } else if (arr[i] > secondmax && arr[i] !== max) {
      secondmax = arr[i];
    }
  }
}
console.log(sortSalaries(users));
