// Write a function that displays a four-pointed diamond in an nxn grid, where n
// is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer

/* PEDAC

** Rules/Requirements **

- Input will always be a positive, odd integer

input:
  - odd number representing maximum size of diamond

output:
  - four-pointed diamond in an n x n grid


** Examples **

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

** Data Structure **

- output will be a series of strings, one string per line
- each string will be constructed of spaces or asterisks

** Algorithm **

- Get the maximum size 'size' of the diamond
- Initialize a number variable 'currentLine' with 1 representing the current
  line to be constructed
- Create a loop that will output to the console each required line from 1 to
  the maximum 'size'
  - For each line, construct a string with spaces and asterisks using the
    'constructLine' function
  - Output the returned string from the 'constructLine' function to the console


constructLine function
======================
Rules:
- The total number of characters in each line is equal to the size of the
  diamond
- The first and last lines always have 1 asterisk
- The number of asterisks in the string depends on the current line that is
  being constructed in the diamond

- Inputs:
  - line number to construct
  - size of diamond

- Output: a string of characters with the correct number of spaces and
  asterisks for requested line number

Algorithms:
- Create variable 'middleLineNumber' and assign it to the size of the diamond
  divided by 2 and rounded up to the nearest integer value
- Create variable 'spacesPerSide' and assign it to the absolute value of
  'middleLineNumber' minus the line number parameter. This will give us the
  number of spaces that we need on each side
- Create variable 'asterisks' and assign it to the size of the diamond minus
  'spacesPerSide' times 2
- Create a the required string by concatenating 'spacesPerside' spaces plus
  'asterisks' asterisks plus 'spacesPerside' spaces
  - Initialize a string 'line' to hold the constructed line
  - Create a loop that adds the first 'spacesPerside' spaces to 'line'
  - Create a second loop that concatenates the 'asterisks' asterisks to 'line'
  - Create a third loop that concatenates the second 'spacesPerside' spaces to
    'line'
- Return the string containing the constructed line

Examples:

diamond(5)

// (spaces are represented with dashes for visibility)

Line 1: '--*--' 2 spaces, 1 asterisk,  2 spaces
Line 2: '-***-' 1 space , 3 asterisks, 1 space
Line 3: '*****' 0 spaces, 5 asterisks, 0 spaces
Line 4: '-***-' 1 space , 3 asterisks, 1 space
Line 5: '--*--' 2 spaces, 1 asterisk,  2 spaces

diamond(9)

// (spaces are represented with dashes for visibility)

Line 1: '----*----' 4 spaces, 1 asterisk,  4 spaces
Line 2: '---***---' 3 spaces, 3 asterisks, 3 spaces
Line 3: '--*****--' 2 spaces, 5 asterisks, 2 spaces
Line 4: '-*******-' 1 space , 7 asterisks, 1 space
Line 5: '*********' 0 spaces, 9 asterisks, 0 spaces
Line 6: '-*******-' 1 space , 7 asterisks, 1 space
Line 7: '--*****--' 2 spaces, 5 asterisks, 2 spaces
Line 8: '---***---' 3 spaces, 3 asterisks, 3 spaces
Line 9: '----*----' 4 spaces, 1 asterisk,  4 spaces

*/


function diamond(size) {
  for (let currentLine = 1; currentLine <= size; currentLine++) {
    console.log(constructLine(currentLine, size));
  }
}

function constructLine(lineNumber, size) {
  let middleLineNumber = Math.ceil(size / 2);
  let spacesPerSide = Math.abs(middleLineNumber - lineNumber);
  let asterisks = size - (spacesPerSide * 2);
  let line = '';

  // line += ' '.repeat(spacesPerSide) + '*'.repeat(asterisks);

  for (let idx = 1; idx <= spacesPerSide; idx++) {
    line += ' ';
  }
  for (let idx = 1; idx <= asterisks; idx++) {
    line += '*';
  }
  for (let idx = 1; idx <= spacesPerSide; idx++) {
    line += ' ';
  }

  return line;
}

diamond(1);
// logs
// *

console.log('');

diamond(3);
// logs
//  *
// ***
//  *

console.log('');

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
