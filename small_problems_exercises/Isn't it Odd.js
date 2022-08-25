// Write a function that takes one integer argument, which may be positive,
// negative, or zero. This method returns true if the number's absolute value is
// odd. You may assume that the argument is a valid integer value.

/* PEDAC

Input: integer argument that can be positive, negative, or zero

Output: true if integer's absolute value is odd

Mental Model: Take the integer argument and find the absolute value. Then,
determine if the absolute value is odd or not.

Examples:

  Input: 2, Output: False
  Input: -17, Output: True

Data Structures: Integer parameter in function

Algorithm:
  1. Use built-in JS function to retrieve the absolute value of the integer argument
  2. Divide the integer argument by 2 and retrieve the remainder using the modulus operator
  3. If the remainder is 1, return true. If the remainder is 0, return false.

*/

function isOdd(number) {
  // return (Math.abs(number) % 2) === 1;
  if (Math.abs(number) % 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
