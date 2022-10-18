/* PEDAC

** Problem **

// Write a function that displays an 8-pointed star in an NxN grid, where N is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when N is 7).


** Rules/Requirements **

Explicit:
- Write a function that outputs an 8-pointed star to the console using asterisks
- The size of the star is represented by 'n', an odd integer
- The minimum size of 'n' is 7

Implicit:
- Length of each line composing the star should be the same number of asterisks


- Questions:
- Is it OK to have spaces after the end of each line?


- Input: Integer number representing the size of the star
  -
- Output: ASCII art of star comprised of asterisks
  - Each line composing the star should be the input size in length


** Examples **

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// (spaces are represented with dashes for visibility)

Line 0: '*---*---*'
Line 1: '-*--*--*'
Line 2: '--*-*-*'
Line 3: '---***'
Line 4: '*********'
Line 5: '---***'
Line 6: '--*-*-*'
Line 7: '-*--*--*'
Line 8: '*---*---*'


** Data Structure **

- Output will consist of 'n' number of strings
- Each line has a combination of spaces and asterisks totaling 'n' size
- Each line will be constructed character by character by the algorithm

** Algorithm **

- Iterate from 0 to size 'n' - 1 using integer number 'centerLine' for the index
  - Initialize an integer number variable 'center' equal to size 'n' divided
    by 2 and rounded down to the nearest integer
  - Initialize a string variable 'line' to an empty string
  - Iterate from 0 to size 'n' - 1 using number variable 'pos' for the index
    - If the current index 'pos' is equal to 'currentLine', add '*' to 'line'
    - If 'pos' equals the size 'n' minus 1 minus 'currentLine',
      add '*' to 'line'
    - If 'pos' equals 'center', add '*' to 'line'
    - If 'currentLine' is equal to 'center', add '*' to 'line'
    - Otherwise, add ' '
  - Log 'line' to the console
*/

function star(size) {
  let center = Math.floor(size / 2);

  for (let currentLine = 0; currentLine < size; currentLine++) {
    let line = '';

    for (let pos = 0; pos < size; pos++) {
      if (
        (currentLine === center) || (pos === currentLine) ||
        (pos === (size - 1 - currentLine)) || (pos === center)
      ) {
        line += '*';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

star(7);

console.log('');

star(9);
