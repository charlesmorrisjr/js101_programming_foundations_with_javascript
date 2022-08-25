// In the previous two exercises, you developed functions that convert simple
// numeric strings to signed integers. In this exercise and the next, you're
// going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1, 2,
// 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. Your function should do this the old-fashioned way and
// construct the string by analyzing and manipulating the number.

function integerToString(number) {
  let numberArray = [];
  let digit = 0;
  
  // Go through each digit of the number from right to left.
  // Divide by 10 and get the remainder to obtain the current digit.
  // Then, add the digit to the beginning of the array.
  // Afterwards, remove the digit from the number.
  // Repeat the entire process until no digits are left.
  do {
    digit = number % 10;
    numberArray.unshift(digit);
    number = (number - digit) / 10;
  } while (number > 0);

  // Finally, join each individual digit in the array to obtain the string
  return numberArray.join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
