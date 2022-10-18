// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and ends
// with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

function century(year) {
  let whatCentury = Math.ceil(year / 100);

  return whatCentury + centurySuffix(whatCentury);
}

function centurySuffix(centuryNumber) {
  let suffix;
  let lastDigit = centuryNumber.toString().slice(-1);

  if (checkIfTeenth(centuryNumber)) {
    return 'th';
  }

  if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  } else if (lastDigit === '3') {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return suffix;
}

function checkIfTeenth (centuryNumber) {
  let lastTwo = Number(centuryNumber.toString().slice(-2));

  if (lastTwo >= 11 && lastTwo <= 19) {
    return true;
  }

  return false;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
