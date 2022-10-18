// Write a function that rotates the last count digits of a number. To perform
// the rotation, move the first of the digits that you want to rotate to the end
// and shift the remaining digits to the left.

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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
