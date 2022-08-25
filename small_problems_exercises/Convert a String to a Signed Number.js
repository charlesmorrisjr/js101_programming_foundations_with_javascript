// Write a function that takes a string of digits and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the first
// character is a +, your function should return a positive number; if it is a
// -, your function should return a negative number. If there is no sign, return
// a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in
// JavaScript, such as parseInt() and Number(). You may, however, use the
// stringToInteger() function from the previous lesson.

function stringToInteger(string) {
  let number = 0

  for (let i = 0; i < string.length; i++) {
    number += string[i] * (10 ** (string.length - 1 - i));
  }

  //console.log(number);  
  return number;
}

function stringToSignedInteger(string) {
  if (string.startsWith('-')) {
    return -stringToInteger(string.slice(1, string.length));
  } else if (string.startsWith('+')) {
    return stringToInteger(string.slice(1, string.length));
  } else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
