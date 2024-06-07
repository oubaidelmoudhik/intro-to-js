// Decomposition and Abstraction

// ****** Decomposition:
/**
 * decomposition is the process of breaking down a large problem
 * into smaller sub-problems
 */

// function yellString(str) {
//     // write a function that takes in a strings
//     // it should return the string yelled

//     return str.toUpperCase() + "!";
// }
// function yellStrings(strings) {
//     // write a function that takes in an array of strings
//     // it should return an array where every string is yelled
//     let yelled = [];

//     for (let i = 0; i < strings.length; i++) {
//         let string = strings[i];
//         let newString = yellString(string);
//         yelled.push(newString);
//     }

//     return yelled;
// }


// let laligatSum = function(n) {
//     // takes in a number and returns the laligat sum of that number
//     // laligat sum is the sum of all the prime numbers less than or equal
//     // to that number

//     let sum = 0;

//     for (let i = 2; i <= n; i++) {
//         let prime = true;

//         for (let factor = 2; factor < i; factor++) {
//             if (i % factor === 0) {
//                 prime = false;
//                 break;
//             }
//         }

//         if (prime === true) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// THIS IS A HELPER FUNCTION
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function laligatSum(n) {
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}


// laligat sum of 10 : 2 + 3 + 5 + 7 = 17
let result1 = laligatSum(10); // => 17

// laligat sum of 11 : 2 + 3 + 5 + 7 + 11 = 28
let result2 = laligatSum(11); // => 28

// console.log(result1);
