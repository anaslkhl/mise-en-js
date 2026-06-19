const str = "Lorem ipsum dolor sit amet consectetur dolor elit";

// ch1: return the number of words in the string
// ch2: return true if the string contains the word "lorem" else return false
// ch3: return the index of the word "lorem"
// ch4: return the last word of the string
// ch5: return the longest word of the string
// ch6: return the shortest word of the string
// ch7: return the array with the words sorted in alphabetical order
// ch8: remove all the words that contain the letter "a" from the string
// ch9: return each word with the number of its characters
// ch10: return each word with the number of its vowels
// ch11: return array of all the words repeated more than once
// ch12: return array of all the words not repeated
// ch13: return the word that appears most frequently
// ch14: return the array with the words sorted by length

function countWords(str) {
  let words = str.split(" ");
  return words.length;
}

console.log(countWords(str));

function containsWord(str, word) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) {
      return true;
    }
  }
  return false;
}

console.log(containsWord(str, "lorem"));

function indexOfWord(str, word) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

console.log(indexOfWord(str, "lorem"));

// Challenge 2
const sales = [
  { city: "Casa", amount: 1200 },
  { city: "Rabat", amount: 800 },
  { city: "Casa", amount: 600 },
];

function totalSales(data) {
  let totalamount = 0;
  for (let x = 0; x < data.length; x++) {
    totalamount += data[x].amount;
  }
  return totalamount;
}

console.log(totalSales(sales));

let arr = [2, 3, 4, 5, 6, 7];

function somme(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

console.log(somme(arr));

const students = [
  { name: "Ali", score: 12 },
  { name: "Sara", score: 18 },
  { name: "Yassine", score: 15 },
];

function bestStudent(data) {
  let max = data[0].score;

  for (let i = 0; i < data.length; i++) {
    if (data[i].score > max) {
      max = data[i].score;
    }
  }
  return max;
}

console.log(bestStudent(students));

// Challenge 5
const users = [
  { name: "Ali", city: "Casa" },
  { name: "Sara", city: "Casa" },
  { name: "Youssef", city: "Fes" },
];

// Retour :
// {
//     Casa:["Ali","Sara"],
//     Fes:["Youssef"]
// }

// function regrouper(data) {
//   let obj = {};
//   for (let x = 0; x < data.length; x++) {
//     if (obj.) {
//         console.log(obj[x].city)
    
//     } 
//   }
// }

// console.log(regrouper(users));




// Pattern 4 : Déduplication
// Challenge 7
const tags = [
    "js",
    "php",
    "js",
    "react",
    "php"
];

Retour :
["js","php","react"]



function duplicate(data){

    let arr = []
    for(let o = 0; o < data.length; o++){

        if(!arr.includes(data[o])){
            arr.push(data[o]);
        }

    }
    return arr
}

console.log(duplicate(tags));





// Challenge 8
// const userss = [
//     { email:"a@test.com" },
//     { email:"b@test.com" },
//     { email:"a@test.com" }
// ];


// function suprimeduplicate(data)
// {
//     for(let x = 0; x < data.length; x++){



//     }

// }



// Pattern 5 : Validation
// Challenge 9
const passwords = [
    "abc123",
    "password",
    "adscdmin"
];

// Retourner :
// false

// si au moins un mot de passe contient moins de 6 caractères.



function checkPass(passwords){

    for(let i = 0; i < passwords.length; i++){

        if(passwords[i].length < 6){
            return false;
        }
    }
    return true
}

console.log(checkPass(passwords));


const products = [
    { stock:10 },
    { stock:4 },
    { stock:1 }
];


function checkStock(stock){

    for(let i = 0; i< stock.length; i++){

        if(stock[i].stock <= 0){
            return false;
        }
    }
    return true;
}

console.log(checkStock(products))



const schools = [
    {
        name:"School A",
        students:[
            { grade:12 },
            { grade:15 }
        ]
    },
    {
        name:"School B",
        students:[
            { grade:18 }
        ]
    }
];


function moyenneGenerale(school){

    let moyenegen = 0;
    let counter = 0;
    for(let x = 0 ; x < school.length; x++){

        for(let i = 0; i < school[x].students.length; i++){

            moyenegen += school[x].students[i].grade;
            counter++;
        }

    }
    return moyenegen / counter;
}

console.log(moyenneGenerale(schools));




// Challenge 12
const companies = [
    {
        name:"A",
        employees:[
            { salary:5000 },
            { salary:7000 }
        ]
    },

    {
        name:"C",
        employees:[
            { salary:100000 }
        ]
    },
    {
        name:"B",
        employees:[
            { salary:10000 }
        ]
    }
];

// Retourner l'entreprise avec la masse salariale la plus élevée.






function getMax(empl){

    let maxIndx = 0;
    let maxSalary = 0;
    for(let i =0 ; i < empl.length; i++){

        for(let x = 0 ; x < empl[i].employees.length; x++){

            if(maxIndx < empl[i].employees[x].salary){
                maxIndx = i;
            }
        }
    }

    return empl[maxIndx];
}

console.log(getMax(companies));