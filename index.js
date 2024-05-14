// PRIMITIVE DATA TYPES
// 1 - Number

// Arithmetic Operators
// console.log(10 + 15);
// console.log(100 - 95);
// console.log(2 * 15);
// console.log(1000 / 15);
// console.log(9 % 2); // Modulo or Remainder

// Comparaison operators

// > or >=
// < or <=
// == loose equality
// === strict equality
// != loose inequality
// !== strict inequality

// 2 - Boolean
// true or false

// logical operators

// ! => NOT
// console.log(!true);
// console.log(!false);
// console.log(!!false);

// && => AND
// console.log(true && true);
// console.log(false && false);
// console.log(false && true);
// console.log(true && false);

// || => OR
// console.log(false || false);
// console.log(false || true);
// console.log(true || false);
// console.log(true || true);

// Order of operation => ! => && => ||

// console.log(true || (true && false));
// console.log(!(false || true));
// console.log(!false && !true);

// De Morgan's Law
/**
 * A and B are too booleans
 * !(A || B) === !A && !B
 * !(A && B) === !A || !B
 */

//  3 - Variables
// initializing a variable
// let firstName = 'oubaid';
// console.log(firstName);

// declaring a variable
// let age; // undefined

// Asssigning a variable
// age = 15 + 20;

// Manupilating variable
// let num = 42;

// console.log(num);
// some shorthands
// num += 10; // num = num + 10;
// num -= 2; // num = num - 2;
// num *= 4; // num = num * 4;
// num /= 7; // num = num / 7;

// num++; // num = num + 1;
// console.log(num);
// num--; // num = num - 1;
// console.log(num);

// NaN => Not a Number
// console.log('fish' * 3);


// 4 - Strings
// Strings declaration:

let firstname = 'oubaid';
let otherName = 'malak';

let phrase = "That's a good string";
let phrase2 = 'This is another one';
let phrase3 = "she said: \"welcome home!\"";

let phare4 = 'That\'s a goog string';
// console.log(phrase3);

// Calculating length:
// console.log(firstname.length);

// Indexing a string:
let thirdLetter = otherName[2];
// console.log(thirdLetter);
let webDev = "Web Dev";
// console.log(webDev[10]); => undefined

// Finding the index of:

// console.log(phrase.indexOf("g"));
// console.log('Web dev is amazing'.indexOf("d"));
// console.log('Hello, world'.indexOf("f")); // => -1
// console.log('Hello'.indexOf("llo")); // => 2

// Concatenation two strings: (joining two stings)
let hello = 'Hello ' + firstname + ", how are you";

// console.log(hello);
// console.log('I love' + ' ' + "web dev");

// String interpolation: (template literal ES6)
// we use the backtick
// let age = 19;
// let lastName = 'bellouchi';

// let introduction = `hello, my name is ${otherName}, my last name is ${lastName}, and my age is ${age || 25}`;
// let introduction2 = 'hello, my name is ' + otherName + ', my last name is ' + lastName + ', and my age is ' + age;
// console.log(introduction);
// console.log(introduction2);

// let multiLineStr = 'this is \nmulti \nline';
// console.log(multiLineStr);
// let multiLineStr2 = `this
// is
// multi
// line
// example`;
// console.log(multiLineStr2);

// FUNCTIONS -> a set of reusable code that will run when called
// (a + b) / 2
// console.log((5 + 5) / 2);
// console.log((15 + 3) / 2);
// console.log((7 + 2) / 2);
// console.log((14 + 12) / 2);

// function declaration syntax: function nameOfTheFunction() {}
function sayHello(name) {
    console.log("hello " + name);
}
// calling or invoking the function

// sayHello('malak');
// sayHello('oubaid');

// Order of code
// function callMe() {
//     console.log("second");
//     console.log("third");
// }

// console.log("first");
// callMe();
// console.log("fourth");

// Return:
function calculateAge(year) {
    return 2024 - year;
}
let myAge = `my age is ${calculateAge(2004)}`; // my age is 20

function average(number1, number2) {
  let sum = number1 + number2;
  return sum / 2;
  // Anything under the `return sum` statement will NOT be executed.
  console.log("this will not run");
  return false;
}
// console.log(average(10));

// {} braces
// [] brackets
// () parentheses
// ***************************Conditionals: control flow

// function mathFun(x) {
// // nesting conditionals
//   if (x === "math") {
//     if (x === "math" && x[0] === "m") {
//       if (x[1] === "a") {
//         console.log("this got confusing fast");
//       } else {
//         console.log("that is not math!");
//       }
//     } else {
//       console.log("that is for sure not math!");
//     }
//   } else {
//     console.log("I will return if everything above me is false!");
//   }
// };
// mathFun("math");


// ***************************Mutually Exclusive Conditions:

// function smallNum() {
//   console.log("the number is small");
// }

// function bigNum() {
//   console.log("the number is big");
// }

// function numberSeperator(num) {
//   if (num < 100) {
//     smallNum();
//   }
//   if (num === 100) {
//     smallNum();
//   }
//   if (num > 100) {
//     bigNum();
//   }
// }
// function numberSeperator(num) {
//   if (num <= 100) {
//     smallNum();
//   } else {
//     bigNum();
//   }
// }

// write a function that checks if the number is even:
// function isEven(num) {
//     if (num % 2 === 0) {
//       console.log("the number is even");
//     } else {
//       console.log("the number is odd");
//     }
// }

// "this is a string" //// "iS a"
// function isSubString(searchString, subString) {

//   let lowerSearchStr = searchString.toLowerCase();
//   let lowersubStr = subString.toLowerCase();
//   let condition = lowerSearchStr.indexOf(lowersubStr) === -1

//   if (condition) {
//       return false;
//   } else {
//       return true;
//   }
// }

// function threeOrSeven(num) {
//   // if (num % 3 === 0 || num % 7 === 0) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return num % 3 === 0 || num % 7 === 0;
// }
