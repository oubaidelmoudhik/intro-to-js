let str = 'this is a string';

let arr = [1, 2, 3];
// console.log(typeof str);
// console.log(typeof 45);
// console.log(typeof true);
// console.log(typeof arr);

// console.log(Array.isArray(arr));
// console.log(Array.isArray(str));

// -------- null vs undefined

let a = [];
let x = null;

// if (a === null) {
//   console.log('a is null');
// } else if (x === null) {
//   console.log('x is null');
// }

// ----------- Mutability:

// function additionMutator(arr, num) {
//   /**
//    * this function should take in an array and a number
//    * and should mutate the input array such that every element
//    * has the given number added to it
//    */
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + num;
//   }
//   return arr;
// }

// let nums1 = [3, 7, 1, 2];
// additionMutator(nums1, 4);
// console.log(nums1); // [ 7, 11, 5, 6 ]

// let nums2 = [11, 9, 4];
// additionMutator(nums2, -1);
// console.log(nums2); // [ 10, 8, 3 ]

let alternatingWords = function (words) {
  /**
   * this function takes in an array of words
   * it should mutate the input array such that the
   * words alternate between fully uppercase and lowecase
   * the first word should be uppercase
   */

  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      words[i] = words[i].toUpperCase();
    } else {
      words[i] = words[i].toLowerCase();
    }
  }
};

let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
