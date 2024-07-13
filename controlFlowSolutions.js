function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}
// console.log(isFive(3));
// console.log(isFive(5));
function isSubstringm(searchString, subString) {
  // Convert both strings to lowercase
  let lowerCaseSearchString = searchString.toLowerCase();
  let lowerCaseSubString = subString.toLowerCase();

  // Check if lowerCaseSubString exists within lowerCaseSearchString
  // using indexOf() method which returns -1 if subString is not found
  return lowerCaseSearchString.indexOf(lowerCaseSubString) !== -1;
}

function isSubStringM(searchString, subString) {
  let searchString_upper = searchString.toUpperCase();
  let subString_upper = subString.toUpperCase();
  let condition = searchString_upper.indexOf(subString_upper) === -1;

  if (condition) {
    return false;
  } else {
    return true;
  }
}

// console.log(isSubstringm("hello I'm Malak", "i'm"));
// console.log(isSubstringm('how are you', 'fine'));
// console.log(isSubStringM("hello I'm Malak", "i'm"));
// console.log(isSubStringM('how are you', 'fine'));

function eitherStringIncluded(sentence, word1, word2) {
  let upperSent = sentence.toUpperCase();
  let upperWrd1 = word1.toUpperCase();
  let upperWrd2 = word2.toUpperCase();
  let condition =
    upperSent.includes(upperWrd1) || upperSent.includes(upperWrd2);

  return condition;
}

function logBetween(lowNum, highNum) {
  // Loop through each number from lowNum to highNum
  for (let i = lowNum; i <= highNum; i++) {
    console.log(i);
  }
}

function logBetweenStepper(min, max, step) {
  // Loop through each number from min to max using step intervals
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}

function fizzBuzz(max) {
  for (let i = 0; i < max; i++) {
    // let condition =
    //   (i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0);

    let byEither = i % 3 === 0 || i % 5 === 0;
    let notBoth = !(i % 3 === 0 && i % 5 === 0);
    let condition = byEither && notBoth;

    if (condition) {
      console.log(i);
    }
  }
}

function leastCommonMultiple(num1, num2) {
  let min = 3000;

  for (let i = 1; i <= num1 * num2; i++) {
    if (i % num1 === 0 && i % num2 === 0 && i < min) {
      min = i;
    }
  }

  return min;
}

let isPrime = function (number) {
  // failsafe
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(1));
