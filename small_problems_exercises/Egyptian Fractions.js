/* PEDAC


** Problem **
Write a function that takes a rational number and returns a list of the
denominators of the Egyptian fractions that are required to recreate that number

** Rules/Requirements **

Questions:
- Will all given rational numbers be positive?
- Will the given number be zero?

Explicit:
- Use external module to extract the Egyptian fractions
- Return a list of the denominators of the Egyptian fractions

Implicit:
- All given rational numbers are positive

- Input: an object
  - contains whole number, numerator and denominator of a fraction
- Output: an array
  - list of denominators of Egyptian fractions required to create a rational
    number


** Examples **

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

** Data Structure **

- An array containing the list of denominators of Egyptian fractions required to create a rational number
- An object as input containing the individual components of a fraction, separated into numerator and denominator
- An integer representing the denominator of a fraction


** Algorithm **

- Declare an integer number variable 'decimalNum' and initialize it to the numerator divided by the denominator
- Declare and initialize an empty array named 'denominators'
- Declare an integer number variable 'sum' and initialize it to 0
- Declare an integer number variable 'curDenominator' and initialize it to 1
- Start loop
  - Check if 'sum' plus the result of 1 divided by 'curDenominator' is less than or equal to the given input number
    - If so, add 1 divided by 'curDenominator' to 'sum'
    - Add 'curDenominator' to 'denominators' array
  - Increment 'curDenominator' by 1
- Continue until 'sum' equals the input rational number
- Return 'denominators' array



** Problem 2 **
Write a function that takes a list of denominators of a sequence of Egyptian
numbers and calculates a rational number

** Rules/Requirements **

Questions:
-

Explicit:
- Given a list of denominators of a sequence of Egyptian numbers, calculate a rational number equal to the sum of the Egyptian numbers

Implicit:
- All numbers in the given array are positive, whole numbers

- Input: an array
  - list of denominators of a sequence of Egyptian numbers
- Output: a number
  - a rational number equal to the sum of the Egyptian numbers


** Examples **
console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3

** Data Structure **

- Array containing a list of denominators of a sequence of Egyptian numbers
- An floating point number variable containing the sum of the Egyptian numbers


** Algorithm **

- Declare and initialize a variable 'sum' to 0
- Iterate through the given array of denominators
  - For each denominator, add 1 divided by the denominator to 'sum'
- Return 'sum'

*/

const Fraction = require('fraction.js');

function egyptian(rationalNum) {
  // let decimalNum = rationalNum.n / rationalNum.d;
  let denominators = [];
  // let sum = 0;
  let curDenominator = 1;

  while (rationalNum > 0) {
    let unitFraction = new Fraction(1, curDenominator);

    if (unitFraction <= rationalNum) {
      rationalNum = rationalNum.sub(unitFraction);
      denominators.push(curDenominator);
    }
    curDenominator += 1;
  }
/*
  do {
    if ((sum + (1 / curDenominator)) <= decimalNum) {
      sum += 1 / curDenominator;
      denominators.push(curDenominator);
    }
    curDenominator += 1;
  } while (sum.toFixed(10) < decimalNum);
*/
  return denominators;
}

function unegyptian(denominators) {
  let sum = 0;

  for (let num of denominators) {
    sum += 1 / num;
  }
  return sum;
}

// console.log(new Fraction(137, 60));
// let x = new Fraction(1 + 1/2 + 1/3 + 1/4);
// console.log(x.toFraction());
// console.log(1/2 + 1/4);


console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
