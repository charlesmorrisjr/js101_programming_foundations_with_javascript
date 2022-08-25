// The parseInt() method converts a string of numeric characters (including an
// optional plus or minus sign) to an integer. The method takes 2 arguments
// where the first argument is the string we want to convert and the second
// argument should always be 10 for our purposes. parseInt() and the Number()
// method behave similarly. In this exercise, you will create a function that
// does the same thing.

// Write a function that takes a string of digits and returns the appropriate
// number as an integer. You may not use any of the methods mentioned above.

function stringToInteger(string) {
  let number = 0

  for (let i = 0; i < string.length; i++) {
    number += string[i] * (10 ** (string.length - 1 - i));
  }
  //console.log(number);
  
  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
