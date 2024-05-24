// ******************* Arrays

/**
 * The Array Type are one of JS's global objects
 *
 */

let a = "a";
let b = "b";
let c = "c";

let alphabet = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x",
  "y", "z"
];
// indexing into array:
// console.log(alphabet[5]);

// console.log(alphabet.length);
// console.log([1, 2, 3].length);
// console.log([].length); // 0


// let info = ["oubaid", 26, "web developer", ["html", "css", "js"]];
// let shoppingList = ['milk', 'bread', 'fruit'];
// // console.log(info[3][1]); // => 'css'

// console.log(shoppingList.indexOf("fruit")); // => 2
// console.log(shoppingList.indexOf("meat")); // => -1

// ************** concatenation with arrays: (joining arrays)

// console.log([1,2,3] + [4,5,6]);

// we use a method
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// console.log(array1.concat(array2));

// let myArr = [1,2,3];
// let myArr2 = new Array(10); // using the Array constructor

// myArr2[4] = "oubaid";
// console.log(myArr);
// console.log(myArr2);
// console.log(myArr2.length);

// function wordWithinArray(array, word) {
//     // returns true if the word is within the array and false otherwise

//     // 1 - we loop over the array (we iterate) and see if the current element
//     // is the target word
//     for (let i = 0; i < array.length; i++) {
//       let current = array[i];
//       if (current.toLowerCase() === word.toLowerCase()) {
//         return true;
//       }
//     }

//     // 2 - if not found return false
//     return -1;
// };
function wordWithinArray(array, word) {
    return array.indexOf(word) !== -1;
};

// console.log(
//   wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
// ); //=> true

// console.log(wordWithinArray(
//   ["dog", "cat", "camel", "bird"], "camel")
// ); //=> true

// console.log(
//   wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
// ); //=> false

// console.log(wordWithinArray(
//   ["dog", "cat", "camel", "bird"], "panther")
// ); //=> false


/**
 * Write a function firstAndLast that takes in an array of
 * numbers and returns the sum of the first and last element
 *  if there is an even number of elements in the array.
 *  If there is an odd number of elements in the array,
 *  then the function should return the difference between
 *  the first and last elements of the array.
 *
 * input: array of number
 * output: number
 */

// function firstAndLast(array) {
//   // 1- get the first and last elements in the array
//   const first = array[0];
//   const last = array[array.length - 1];
//   let result = 0;

//   // 2- check if the number of elements in the array is even or odd
//   if (array.length % 2 === 0) { // if the length is even
//     // 3- calculate the sum or difference between the first and last element
//     result = first + last;
//   } else { // if the length is odd
//     result = first - last;
//   }

//   // 4- return the result
//   return result;
// }


// console.log(firstAndLast([1, 2, 3, 4]));    // 5
// console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
// console.log(firstAndLast([12, 5]));         // 17
// console.log(firstAndLast([12]));            // 0
// console.log(firstAndLast([7, 11, 3]));      // 4


function combineArray(arr1, arr2) {
  // joining arrays || concatenation
  return arr1.concat(arr2);
}


// console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
// console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]

function doubler(arr) {
  // the function takes in an array and returns a new
  // array where every element is multiplied by 2
  let doubledNums = [];

  for (let i = 0; i < arr.length; i++) {
    let newNum = arr[i] * 2;

    doubledNums = doubledNums.concat(newNum);
  }

  return doubledNums;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
