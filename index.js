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
console.log((5 + 5) / 2);
console.log((15 + 3) / 2);
console.log((7 + 2) / 2);
console.log((14 + 12) / 2);

// function declaration syntax: function nameOfTheFunction() {}
function sayHello(name) {
    console.log("hello " + name);
}
// calling or invoking the function
// sayHello('malak');
// sayHello('oubaid');

function average(a, b) {
    console.log((a + b) / 2);
}

average(10, 15);

function calculateAge(year) {
    const currentYear = 2024;
    console.log(currentYear - year);
}

calculateAge(2004);
calculateAge(1998);
