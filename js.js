const users = [
    {
      id: 1,
      name: "Ali",
      age: 25,
      city: "Casablanca",
      isActive: true,
      salary: 8000,
    },
    {
      id: 2,
      name: "Sara",
      age: 30,
      city: "Rabat",
      isActive: false,
      salary: 12000,
    },
    {
      id: 3,
      name: "Karim",
      age: 22,
      city: "Tanger",
      isActive: true,
      salary: 6000,
    },
    {
      id: 4,
      name: "Fatima",
      age: 35,
      city: "Casablanca",
      isActive: true,
      salary: 15000,
    },
    {
      id: 5,
      name: "Youssef",
      age: 28,
      city: "Fes",
      isActive: false,
      salary: 9000,
    },
    {
      id: 6,
      name: "Imane",
      age: 27,
      city: "Rabat",
      isActive: true,
      salary: 11000,
    },
  ];

  function sortSalaries(obj, n) {
    let salaries = []
    for (let i = 0; i < obj.length; i++) {
      salaries.push(obj[i].salary)
      
    }

    sorting = salaries.sort((a,b)=>{return b-a});
    let baho = sorting.length - n;;
    let topThree = []
        sorting.splice(baho)

    return sorting;
    }

    
// console.log(sortSalaries(users, 2));








let lbaki = array.length - n - 1;


let tableau = [1, 2, 55, 4, 33, 6, 78 ,9 ,0, 24 ,46,86,79,80];


