// Log all even numbers from 1 to 99, inclusive, to the console, with each
// number on a separate line.

/* PEDAC

Output: All even numbers from 1 to 99 inclusively with each number on a
separate line.

Mental Model: Iterate from 2 to 98, incrementing by 2

Examples:

  Output: 2, 4, 6, 8, 10...

Data Structures: Variable i restricted to for-loop scope

Algorithm:
  1. Create for-loop with integer variable i used to iterate from 2 to 98, including 2 and 98, and incrementing i by 2
  2. Log the output to console

*/

for (let i = 2; i <= 98; i += 2) {
  console.log(i);
}
