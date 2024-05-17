// Define a function `isPrime(number)` that returns true if number is prime. Otherwise, false. A number is prime if it is only divisible by 1 and itself.

//  ------- 1. understand the problem:
// definition of prime: a number is prime if it has only two factors, itself and 1
// goal: return a boolean of whether a given number is prime or not
// input: number (integer)
// output: true or false (boolean)
// edge cases: 0? 1? does it have to be larger than one to be prime?

// --------- 2. make a plan: (Pseudocode - fake code)
// 1- check if the number is larger than 2
//  - if not, return false (edge case. not prime)

// 2- iterate (loop over) from 2 up to number (exclusive)
//  - check if index is a divisor of the number (use %)
//      - if it is, return false (not prime)
// 3- after the loop, return true





function isPrime(number) {
  // base case: any number less than 2 are not prime
  if (number < 2) {
    return false;
  }

  let i = 2; // start from the base case
  while (i < number) {  // do not include the number itself
    if (number % i === 0) {   // check if i is a factor of the number
      return false;
    }
    i++;
  }

  // number must be prime if it hasn't met the above conditions
  return true;
}
