let initials = function (name) {
  /** this function takes in a full name and returns
   * the initials of that name:
   * malak bellouchi => MB
   */
  let parts = name.split(' ');
  let firstLetters = [];

  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];
    firstLetters.push(part[0].toUpperCase());
  }

  return firstLetters.join('');
};

// console.log(initials('malak bellouchi')); // 'MB'
// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

function longestWord(sentence) {
  /** this function takes in a sentence
   * and returns the longest word of that sentence
   */

  let words = sentence.split(' ');
  let longest = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''

let shortestWord = function (sentence) {
  let words = sentence.split(' ');
  let short = 'this is a long string to change at the first iteration';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length <= short.length) {
      short = word;
    }
  }

  return short;
};

console.log(shortestWord('what a wonderful life')); // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy')); // 'do'
