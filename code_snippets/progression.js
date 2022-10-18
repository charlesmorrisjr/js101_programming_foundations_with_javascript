/*
You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.
*/

/* PEDAC


** Problem **
Find the number of arithmetic progressions of size 3 that exist within a given array of integers


** Rules/Requirements **

Questions:
- Will all the numbers be positive?
- What will the maximum number in the given array be?
- What should the maximum difference in elements for each progression be?


Explicit:
- Given an array of integers, find all sets of 3 integers that follow a mathematical progression
- The difference between each element within each group of 3 should be the same
- Return the number of groups of 3 found

Implicit:
- When checking for each incrementation of a progression, multiple sets can be found for each progression incrementation


- Input: an array of integers
  - 
- Output: an integer
  - represents the total number of sets of 3 of arithmetic progressions


** Examples **

[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

** Data Structure **

- An outer array containing inner arrays which represent all sets of 3
- An integer representing the difference between elements for each progression
- An array containing the current progression being worked on

** Algorithm **

- Set a constant 'MAX_PROGRESSION' to 10
- Declare an empty array named 'arraySet'
- Iterate from 1 to 'MAX_PROGRESSION' using index 'curProg'
  - Iterate through each number of the given array
    - For the current number, check if that number plus 'curProg' and number
      plus 'curProg' * 2 exists within the given array
      - If so, add an array containing the current number, the number plus
         'curProg', and the number plus 'curProg' * 2 to 'arraySet'
- Return the number of subarrays within 'arraySet'
*/
const MAX_PROGRESSION = 10;

function progressions(arr) {
  let arraySet = [];

  for (let curProg = 1; curProg <= MAX_PROGRESSION; curProg++) {
    for (let curNum of arr) {
      if (arr.includes(curNum + curProg) && arr.includes(curNum + curProg * 2)) {
        arraySet.push([curNum, curNum + curProg, curNum + (curProg * 2)]);
      }
    }
  }

  return arraySet.length;
}

// Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10
