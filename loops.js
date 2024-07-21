// ******************* Control flow: Loops

// while there are still dirty dogs i still have a job to do =>>> the condition

// 0 dog clean and 6 dirty
// 1 dog clean and 5 dirty => increment by 1
// 2 dog clean and 4 dirty
// 3 dog clean and 3 dirty
// 4 dog clean and 2 dirty
// 5 dog clean and 1 dirty
// 6 dog clean and 0 dirty

//  this is the idea of looping

// ******* while loop
// let index = 0;

// while (index < 6) {
//   console.log(`cleaned dog number ${index + 1}`);
//   index++;
// }

//  ********* for loop

// for (initial expression; condition; loopEnd expression) {}
// index++ => index = index + 1;

// for (let index = 0; index < 6; index++) {
//   console.log(`cleaned dog number ${index + 1}`);
// }

// let testString = "this is a test string";

// for (let index = 0; index < testString.length; index++) {
//   console.log(testString[index].toUpperCase());
// }

// function logBetween(low, high) {
//   // iterate over numbers
//   for (let index = low; index <= high; index++) {
//     console.log(index);
//   }
// }
// logBetween(-10, 3);

// function printFives(max) {
//   // prints the multiples of 5 that are less than the `max`
//   //   for (let index = 0; index < max; index++) {
//   //     if (index % 5 === 0) {
//   //       console.log(index);
//   //     }
//   //   }
//   for (let i = 0; i < max; i += 5) {
//     //refactoring
//     console.log(i);
//   }
// }
// printFives(25);

//  0
//  5
//  10
//  15
//  20

// function leastCommonMultiple(num1, num2) {
//   let min = 1000; // dummy number

//   for (let i = 1; i < 50; i++) {
//     if (i % num1 === 0 && i % num2 === 0 && i < min) {
//       min = i;
//     }
//   }

//   return min;
// }

// function eCounter(word) {
//   let count = 0;
//   //   for (let i = 0; i < word.length; i++) {
//   //     let char = word[i];
//   //     if (char === 'e' || char === 'E') {
//   //       count++;
//   //     }
//   //   }
//   let i = 0;
//   while (i < word.length) {
//     let char = word[i];
//     if (char === 'e' || char === 'E') {
//       count++;
//     }
//     i++;
//   }
//   return count;
// }

// console.log(eCounter('wonderful')); // 1
// console.log(eCounter('preview')); // 2

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  console.log(number);
}
console.log('---------------');

// For ... of (loop)
for (let number of numbers) {
  console.log(number);
}
