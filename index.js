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
let firstName = 'oubaid';
// console.log(firstName);

// declaring a variable
let age; // undefined

// Asssigning a variable
age = 15 + 20;

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
console.log('fish' * 3);
