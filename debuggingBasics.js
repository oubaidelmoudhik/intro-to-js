// function removeOranges(fruitArray) {
//  for (let i = 0; i < fruitArray.length; i++) {
//   console.log(`checking index ${i}: ${fruitArray[i]}`); // checking index 0: orange
//   // If the item at the i-th position is "orange"
//   if (fruitArray[i] == "orange") {
//    // Remove 1 item from the i-th position
//    console.log("removed an orange!");
//    fruitArray.splice(i, 1);
//    i--; // i = -1
//   }
//  }
//  return fruitArray;
// }

// console.log(removeOranges(["orange","apple", "banana", "orange", "orange", "pear", "apple"]));

function longestName(names) {

    // Set the first name to be the longest
    let currentLongest = names[0];

    // Check each other name in the array starting from the second
    for (let i = 1; i < names.length; i++) {

        // If the name we're checking is longer than our
        // current longest, set that name to be the new longest
        if (names[i].length > currentLongest.length) {
            currentLongest = names[i];
        }

    }

    return currentLongest;
}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
             "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
             "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"
