const twoDimentional = [
  ['a', 'b', 'c'],
  ['d', 'e'],
  ['f', 'g', 'h'],
];

// console.log(twoDimentional[1]); // ['d', 'e']

// [row][column]
// console.log(twoDimentional[1][0]); // 'd'

// for (let i = 0; i < twoDimentional.length; i++) {
//   let subArray = twoDimentional[i];

//   for (let j = 0; j < subArray.length; j++) {
//     console.log(subArray[j]);
//   }
// }

// why 2D arrays are practical:
// tic-tac-toe -> grid (3x3)
// chess -> grid (8x8)
// excel -> grid

function twoDimensionalSum(arr) {
  let sum = 0;

  for (let subArr of arr) {
    for (let number of subArr) {
      sum += number;
    }
  }

  return sum;
}

// let arr1 = [[1, 3], [-4, 7, 10], [2]];

// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [[], [3, 1, 2]];
// console.log(twoDimensionalSum(arr2)); // 6

// let maxInMatrix = function (matrix) {
//   -- define the smallest number possible
//   let currentMax = -Infinity;

//   for (let row = 0; row < matrix.length; row++) { // get the current row of the matrix
//     for (let col = 0; col < matrix[0].length; col++) { // get the current column of the matrix
//       if (matrix[row][col] > currentMax) { // compare ele at the current row and col with current max number
//         currentMax = matrix[row][col]; // if the ele is larger then make currentMax that ele
//       }
//     }
//   }

//   return currentMax;
// };
let maxInMatrix = function (matrix) {
  let currentMax = -Infinity;

  for (let subArr of matrix) {
    for (let currentNum of subArr) {
      if (currentNum > currentMax) {
        currentMax = currentNum;
      }
    }
  }

  return currentMax;
};

// let matrix = [
//   [11, 2, -99],
//   [20, 19, 10],
//   [47, 72, 56],
// ];

// console.log(maxInMatrix(matrix)); // 72

function maxColumn(matrix) {
  /**
   * takes in a 2D array (matrix)
   * returns an `array` containing the max in each column
   * the array length should be equal the columns number
   * such as returnArray[i] is equal to the max value in the i column
   */
  let height = matrix.length;
  let width = matrix[0].length;
  let maxColumns = [];

  for (let col = 0; col < width; col++) {
    let colMax = matrix[0][col];

    for (let row = 1; row < height; row++) {
      if (matrix[row][col] > colMax) {
        colMax = matrix[row][col];
      }
    }

    maxColumns.push(colMax);
  }

  return maxColumns;
}

const matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]
