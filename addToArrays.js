/**
 * Array.push(ele1, ele2, ..., eleN); => to add to the end of the array
 * Array.pop(); => to remove the last element of an array
 * Array.unshift(ele1, ele2, ..., eleN); => to add to the beginning of the array
 * Array.shift(); => to remove the first element of an array
 */

// let students = ['ahmed'];
// let studentsCount = students.length;
// console.log(students);
// console.log(studentsCount);

// studentsCount = students.push('malak');
// students.push('fatima');
// students.push('zaid', 'oubaid');
// console.log(students);
// console.log(studentsCount);

// studentsCount = students.unshift('mohamed');
// students.unshift('reda');
// students.unshift('jacob');
// console.log(students);
// console.log(studentsCount);

// let removed = students.pop();
// console.log(students);
// console.log(removed);

// students.shift();
// console.log(students);

// function addToArray(location, element, arr) {
//   // FRONT, BACK
//   if (location === 'FRONT') {
//     arr.unshift(element);
//   } else if (location === 'BACK') {
//     arr.push(element);
//   } else {
//     console.log('ERROR');
//   }
// }

// testArray = [1, 2, 3];

// addToArray('FRONT', 0, testArray);
// console.log(testArray); // [0,1,2,3]

// addToArray('BACK', 4, testArray);
// console.log(testArray); // [0,1,2,3,4]

// addToArray('MIDDLE', 4, testArray); // "ERROR"
// console.log(testArray); // [0,1,2,3,4]

// function range(min, max) {
//   /**
//    * this function takes in a min and max,
//    * it should return an array containing
//    * all the numbers from min to max inclusive
//    */

//   let arr = [];

//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }

//   return arr;
// }

// console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
// console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
// console.log(range(10, 3)); // []

// let factorsOf = function (num) {
//   /**
//    * this function takes in a number
//    * should return an array containing all positive
//    * numbers that are able to divide into `num` with no remainder
//    */

//   let factors = [];

//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }

//   return factors;
// };

// console.log(factorsOf(5)); // [ 1, 5 ]
// console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
// console.log(factorsOf(9)); // [ 1, 3, 9 ]
// console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
// console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
// console.log(factorsOf(2017)); // [ 1, 2017 ]

// let removeFromArray = function (location, arr) {
//   if (location === 'FRONT') {
//     arr.shift();
//   } else if (location === 'BACK') {
//     arr.pop();
//   } else {
//     console.log('ERROR');
//   }
// };

// let testArray = [0, 1, 2, 3, 4];

// removeFromArray('FRONT', testArray);
// console.log(testArray); // [1,2,3,4]

// removeFromArray('BACK', testArray);
// console.log(testArray); // [1,2,3]

// removeFromArray('MIDDLE', testArray); // "ERROR"
// console.log(testArray); // [1,2,3]

// let colors = ['red', 'yellow', 'blue', 'green', 'orange', 'brown', 'gray'];

// colors.splice(2, 3, 'black');

// console.log(colors);
