const matrix = [
  [4, 8, 2],
  [10, 3, 5],
  [20, 5, 3],
  [1, 9, 7],
  [10, 10, 5],
];

function somme(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findBestSalesRow(matrix) {
  // votre code

  let result = {};
  let arrSum = [];
  for (let x = 0; x < matrix.length; x++) {
    arrSum.push(somme(matrix[x]));
  }

  let max = findMax(arrSum);
  let index = arrSum.findIndex((index) => index === max);
  result = { row: index, total: max };
  return result;
}

console.log(findBestSalesRow(matrix));

const matrix2 = [
  [1, 0, 0, 1],
  [0, 1, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 0],
];

function findWeakColumns(matrix, limit) {
  // votre code
  let result = {};
  for (let i = 0; i < matrix[0].length; i++) {
    let colSum = 0;
    for (let x = 0; x < matrix.length; x++) {
      colSum += matrix[x][i];
    }
    if (colSum < limit) {
      result = { col: i, total: colSum };
    }
  }
  return result;
}

console.log(findWeakColumns(matrix2, 2));

const matrix3 = [
  [40, 8, 2, 6],
  [10, 3, 5, 2],
  [1, 9, 7, 4],
  [6, 2, 8, 3],
];

function findUnbalancedSales(matrix) {
  // votre code

  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = matrix[i].reduce((sum, current) => sum + current, 0);

    // console.log(rowSum);

    for (let x = 0; x < matrix[i].length; x++) {
      let colSum = 0;

      for (let o = 0; o < matrix.length; o++) {
        colSum += matrix[o][x];
      }

      if (colSum > rowSum * 2 || rowSum > colSum * 2) {
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
console.log(findUnbalancedSales(matrix3));





const matrix4 = [
    [1, 2, 3, 4],
    [7, 8, 9, 1],
    [4, 3, 2, 1],
    [5, 6, 6, 5],
    [1, 9, 8, 7]
];



function findMirrorRows(matrix) {
    // votre code

    let result = [];
    for(let i = 0; i < matrix.length;i++){

        for(let x = i + 1; x < matrix.length; x++){

            let isMirror = true;
            for(let o = 0; o < matrix[i].length;o++){

                if(matrix[i][o] !== matrix[x][matrix[x].length - 1 - o]){

                    isMirror = false;
                    break;
                }
            }
            if(isMirror){
                result.push({rowA: i, rowB: x});
            }

        }
    }
    return result;
}

console.log(findMirrorRows(matrix4));