// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called the
// maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum
// rotation of that integer. You can (and probably should)) use the
// rotateRightmostDigits function from the previous exercise.

function rotateRightmostDigits(number, digits) {
  let strNumber = String(number);
  let leftmostDigits = strNumber.slice(0, strNumber.length - digits);
  let rightmostDigits = strNumber.slice(-digits);
  let result = leftmostDigits + rotateString(rightmostDigits);

  return Number(result);
}

function rotateString(string) {
  return string.slice(1).concat(string[0]);
}

function maxRotation(number) {
  let rotatedNumber = number;

  for (let idx = String(number).length; idx > 1; idx--) {
    rotatedNumber = rotateRightmostDigits(rotatedNumber, idx);
  }

  return rotatedNumber;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
