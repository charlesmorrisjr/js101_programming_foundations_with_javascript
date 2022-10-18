// A featured number (something unique to this exercise)) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd)), 97 is not
// (it is not a multiple of 7)), and 133 is not (the digit 3 appears twice)).

// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.

// NOTE: The largest possible featured number is 9876543201.

const MAX_FEATURED = 9876543201;

function featured(number) {
  let nextMultiple = Math.ceil(number / 7) * 7;

  if (number % 7 === 0) {
    nextMultiple += 7;
  }

  while (nextMultiple % 2 === 0 || hasMultipleSameDigits(nextMultiple)) {
    nextMultiple += 7;

    if (number >= MAX_FEATURED) {
      return 'There is no possible number that fulfills those requirements.';
    }
  }

  return nextMultiple;
}

function hasMultipleSameDigits(number) {
  for (let digit = 0; digit <= 9; digit++) {
    let regEx = new RegExp(`${digit}`, 'g');
    let occurrences = String(number).match(regEx);

    if (occurrences !== null && occurrences.length > 1) return true;
  }

  return false;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."