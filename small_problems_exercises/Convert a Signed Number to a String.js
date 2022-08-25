// In the previous exercise, you developed a function that converts non-negative
// numbers to strings. In this exercise, you're going to extend that function by
// adding the ability to represent negative numbers as well.

// Write a function that takes an integer and converts it to a string
// representation.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String() and Number.prototype.toString(). You may,
// however, use integerToString() from the previous exercise.

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

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case 1: return '+' + integerToString(number);
    case -1: return '-' + integerToString(Math.abs(number));
    default: return '0';
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");