// ------------- nested loops
// for (let i = 0; i <= 2; i++) {
//   for (let j = 0; j <= 3; j++) {
//     console.log(i, j);
//   }
// }

let students = ['malak', 'oubaid', 'ahmed', 'ferdaous'];

/**
 *
 * i        = 0, 1, 2, 3
 * students = [a, b, c, d]
 *
 * students = [a, b, c, d]
 *
 * j        = 1, 2, 3
 */

// --------------- all the possible pairs
// for (let i = 0; i < students.length; i++) {
//   let student1 = students[i];
//   for (let j = 0; j < students.length; j++) {
//     let student2 = students[j];
//     console.log(student1, student2);
//   }
// }

// --------------- Unique pairs only
// for (let i = 0; i < students.length; i++) {
//   let student1 = students[i];
//   for (let j = i + 1; j < students.length; j++) {
//     let student2 = students[j];
//     console.log(student1, student2);
//   }
// }

let pairsMaker = function (arr) {
  /** this function takes in an array
   * and returns a 2D array where the subarrays
   * represent unique pairs of elements from the input array
   */
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    let ele1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let ele2 = arr[j];
      pairs.push([ele1, ele2]);
    }
  }

  return pairs;
};

// console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// // [ [ 'a', 'b' ],
// //   [ 'a', 'c' ],
// //   [ 'a', 'd' ],
// //   [ 'b', 'c' ],
// //   [ 'b', 'd' ],
// //   [ 'c', 'd' ] ]

// console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// // [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]

function twoSum(arr, target) {
  /**
   * this function takes in an array and a target number
   * it should return a boolean indicating
   * if two distinct numbers add up to the target value
   */
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];

      if (num1 + num2 === target) {
        return true;
      }
    }
  }

  return false;
}

// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false

let pairProduct = function (numbers, product) {
  /**
   * this function takes in an array (numbers)
   * and a target (product)
   * it should return a boolean indicating
   * whether two unique elements in the array
   * result in the product when multiplied together.
   */
  for (let i = 0; i < numbers.length; i++) {
    const num1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const num2 = numbers[j];

      if (num1 * num2 === product) {
        return true;
      }
    }
  }
  return false;
};

// console.log(pairProduct([4, 2, 5, 8], 16)); // true
// console.log(pairProduct([8, 1, 9, 3], 8)); // true
// console.log(pairProduct([3, 4], 12)); // true
// console.log(pairProduct([3, 4, 6, 2, 5], 12)); // true
// console.log(pairProduct([4, 2, 5, 7], 16)); // false
// console.log(pairProduct([8, 4, 9, 3], 8)); // false
