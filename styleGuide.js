// write the code in a readable way
// write the code in an easily understandable
// *****************indentation:

// // Good style:
// function skip5(){
//   for (let i = 1; i < 10; i += 1){
//     if (i === 5) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// // Bad style:
// function skip5(){
// for (let i = 1; i < 10;i += 1){
// if (i === 5) {
//   continue;}
// console.log(i);
// }}
// ----------------------------------------------
// // Good style:
// let num1 = 3;
// let num2 = 5;
// if (num1 + num2 === 8) {
//   console.log("the sum is 8");
// }

// // Bad style:
// let num1=3;
// let num2 =5;
// if (num1+num2=== 8) {
//   console.log("the sum is 8");
// }
// --------------------------------------------------
// // Good style:
// myNum++;

// // Bad style:
// myNum ++;
// --------------------------------------------------

// // Good style:
// let names = ['alvin', 'chase', 'phi', 'eliot'];
// for (let i = 0; i < names.length; i++) {
//   // ...
// }

// // Bad style:
// let names = ['alvin','chase','phi','eliot'];
// for (let i = 0;i < names.length;i++) {
//   // ...
// }
// --------------------------------------------------

// // Good style:
// function sumArray(arr){
//   let sum = 0;
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     sum += ele;
//   }

//   return sum;
// }

// // Not as good style:
// function sumArray(arr){
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     sum += ele;
//   }
//   return sum;
// }
// --------------------------------------------------

// // Good style:
// function printStudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let name = arr[i];
//     console.log(name.toUpperCase());
//     console.log(name.toLowerCase());

//   }
// }

// // Not as good style:
// function printStudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].toUpperCase());
//     console.log(arr[i].toLowerCase());
//   }
// }
// --------------------------------------------------

// // Nice and readable:
// let num = 15;
// let isDivByEither = (num % 5 === 0 || num % 3 === 0);
// console.log(isDivByEither);


// // Not as readable:
// let num = 15;
// console.log(num % 5 === 0 || num % 3 === 0);
// --------------------------------------------------
