const matrix = [
  [5, -2, -3],
  [4, 0, -1],
];

function getNegatives(matrix) {
  return matrix.flat().filter((ele) => ele < 0);
}

function position(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++)
      if (matrix[i][x] < 0) {
        result.push({
          col: i,
          row: x,
          value: matrix[i][x],
        });
      }
  }
  return result;
}

function hasNegativeNeighbor(matrix, row, col) {
  if (row > 0 && matrix[row - 1][col] < 0) return true;
  if (row < matrix.length - 1 && matrix[row + 1][col]) return true;
  if (col > 0 && matrix[row][col - 1] < 0) return true;
  if (col < matrix[0].length - 1 && matrix[row][col + 1] < 0) return true;
  else return false;
}
// console.log(getNegatives(matrix));
// console.log(position(matrix));

// console.log(hasNegativeNeighbor(matrix, 1,0));

const matrix2 = [
  [-1, -2, 5],
  [4, -3, 6],
  [7, 8, -4],
];

function countNegativeGroups(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  let groups = 0;
  for (let i = 0; i < rows; i++) {
    for (let x = 0; x < cols; x++) {
      if (matrix[i][x] < 0 && !visited[i][x]) {
        groups++;

        if (i > 0 && matrix[i - 1][x] < 0) visited[i - 1][x] = true;
        if (x > 0 && matrix[i][x - 1] < 0) visited[i][x - 1] = true;
        if (i < rows - 1 && matrix[i + 1][x] < 0) visited[i + 1][x] = true;
        if (x < cols - 1 && matrix[i][x + 1] < 0) visited[i][x + 1] = true;
        visited[i][x] = true;
      }
    }
  }
  return groups;
}
console.log(countNegativeGroups(matrix2));
