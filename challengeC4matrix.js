const matrix = [
  [4, 8, 2, 6],
  [10, 3, 5, 2],
  [1, 9, 7, 4],
  [6, 2, 8, 3],
];

function findUnbalancedSales(matrix) {

  let result = [];

  for(let i = 0;i< matrix.length; i++){

    for(let x = 0; x<matrix[i].length;x++){

      const rowSum = matrix[i].reduce((occ, currval) => occ + currval, 0);

      let colSum = 0;
      for(let o = 0; o < matrix.length;o++){

        colSum += matrix[o][x];
      }

      if(rowSum > colSum * 2){
        type = "row-";
      }
      else if(colSum > rowSum * 2){
        type = "col-";
      }
      else{
        type = "balanced";
      }

      result.push({
        col: x,
        row: i,
        value: matrix[i][x],
        colSum: colSum,
        rowSum: rowSum,
        type: type

      });
    }

  }
  return result;

  
}
console.log(findUnbalancedSales(matrix));
