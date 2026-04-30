const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 28, email: "charlie@example.com" },
  { name: "David", age: 22, email: "david@example.com" },
  { name: "Emma", age: 27, email: "emma@example.com" },
  { name: "Liam", age: 24, email: "liam@example.com" },
  { name: "Noah", age: 29, email: "noah@example.com" },
  { name: "Olivia", age: 26, email: "olivia@example.com" },
  { name: "Sophia", age: 31, email: "sophia@example.com" },
  { name: "Mason", age: 23, email: "mason@example.com" },
];

// find the second max


for (let i = 0; i < users.length; i++) {
  for (let o = i + 1; i < users.length - 1; i++) {
    if (users[i].age < users[o].age) {
      let temp = users[i].age;
      users[i].age = users[o].age;
      users[o].age = temp;
    }
  }
}

let seconmax = users[length - 1].age;

let max = 0;
let secondMax = 0;
for (let i = 0; i < users.length; i++) {
  if (max < users[i].age) {
    max = users[i].age;
  }
  if (max < secondMax) {
    secondMax = max;
  }
}

console.log(seconmax);