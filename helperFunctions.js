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

// function laligatSum(n) {
//     let sum = 0;

//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             sum += i;
//         }
//     }

//     return sum;
// }


// // laligat sum of 10 : 2 + 3 + 5 + 7 = 17
// let result1 = laligatSum(10); // => 17

// // laligat sum of 11 : 2 + 3 + 5 + 7 + 11 = 28
// let result2 = laligatSum(11); // => 28

// console.log(result1);


// ******* Abstraction:
/**
 * The computing scientist’s main challenge is not to get confused by the complexities of his own making.
      — E. W. Dijkstra
 */

/**
 * Abstraction is the process of hiding details. The human brain is relatively bad at reasoning through complexity. As you will see, computer programs become pretty complex rather quickly and it is hard for the human brain to keep up. The job of a programmer is to manage the complexity by keeping the program modular and hiding details. The act of hiding details allows our minds to focus on other aspects of the program that need attention. Decomposition is a technique that uses abstraction because it hides details. Go back and look at the two laligatSum solutions. The decomposed one exposes less implementation details and is easier to reason about.

When you read the decomposed code for laligatSum, you don't have to have to think much about what goes on when we call the isPrime function. If isPrime is written correctly then we can pretty much tell exactly what it does just from the function name. We use abstraction all the time when we declare variables and define functions.
 */



/**
 * write a function choosePrimes(nums) that takes in an array of numbers
 * and should return a new array containing the primes from the original
 * array
 */
let choosePrimes = function(nums) {
    let primes = [];

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];

        if (isPrime(currentNum)) {
            primes.push(currentNum);
        }
    }


    return primes;
}

// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
