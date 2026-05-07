const colors = [
  "red",
  "blue",
  "red",
  "red",
  "red",
  "yellow",
  "yellow",
  "white",
  "white",
  "white",
  "black",
  "black",
];

function redCount(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "red") {
      count++;
    }
  }
  return count;
}

console.log(redCount(colors));

function colorsCount(array) {
  let counts = {};

  for (let i = 0; i < array.length; i++) {
    if (!counts[array[i]]) {
      counts[array[i]] = 0;
    }
    counts[array[i]]++;
  }
  return getMax(counts);
}

console.log(colorsCount(colors));

function getMax(counts) {
  let maxColor = "";
  let max = 0;
  for (let color in counts) {
    if (counts[color] > max) {
      max = counts[color];
      maxColor = color;
    }
  }
  return maxColor;
}

function getUniqueColors(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(getUniqueColors(colors));

function removeRepaatition(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i + 1, 1);
      i = 0;
    }
  }
  return array;
}

console.log(removeRepaatition(colors));
