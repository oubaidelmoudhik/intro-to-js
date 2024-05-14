// ************* Polya Framework

// 1 - understand the problem
// 2 - make a plan
// 3 - carry out the plan
// 4 - look back and improve your solution

// --------- 1. understand the problem --------------
// Given an list nums, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.
// 0, 1, 0, 3, 12 => 1, 3, 12, 0, 0

// What is the problem asking you to do?
// Can you restate the problem in your own words?
// Do you understand all of the words in the problem?
// Do you have enough information to solve the problem?
// Are there any constraints or edge cases to consider?

//  ----------- 2. make a plan ----------------

// Break down the problem into smaller steps
// Draw out the problem
// Solve a simpler version of the problem
// Look for patterns
// Work backwards
// Guess and check

// 1. Set a pointer to the last element in the array.
// 2. Walk through each element of the array.
// 3. If the element is zero, swap its position with the element at the pointer,
//    then decrement the pointer.

//  ---------------- 3. carry out the plan ------------
function moveZeros(nums) {
  // 1. Set a pointer to the last element in the array.
  let pointer = nums.length - 1;
  // 2. Walk through each element of the array.
  for (let i = 0; i < pointer; i++) {
    // 3. If the element is zero,,

    if (nums[i] == 0) {
      // swap its position with the element at the pointer
      [nums[i], nums[pointer]] = [nums[pointer], nums[i]];

      // then decrement the pointer.
      pointer--;
    }
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
