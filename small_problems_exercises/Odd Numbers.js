// Log all odd numbers from 1 to 99, inclusive, to the console, with each number
// on a separate line.

/* PEDAC

Output: All odd numbers from 1 to 99 inclusively with each number on a
separate line.

Mental Model: Iterate from 1 to 99, incrementing by 2

Examples:

  Output: 1, 3, 5, 7, 9...

Data Structures: Variable i restricted to for-loop scope

Algorithm:
  1. Create for-loop with integer variable i used to iterate from 1 to 99, including 1 and 99, and incrementing i by 2
  2. Log the output to console

*/

for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}
