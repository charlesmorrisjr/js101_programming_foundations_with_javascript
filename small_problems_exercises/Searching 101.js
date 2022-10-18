// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five numbers.

const readline = require('readline-sync');
let numberArray = [];
let numberSearch;

function findNumber(numbers, number) {

  if (numbers.includes(number)) {
    console.log(`The number ${number} appears in ${numbers.join(', ')}.`);
  } else {
    console.log(`The number ${number} does not appear in ${numbers.join(', ')}.`);
  }
}

numberArray.push(Number(readline.question('Enter the 1st number: ')));
numberArray.push(Number(readline.question('Enter the 2nd number: ')));
numberArray.push(Number(readline.question('Enter the 3rd number: ')));
numberArray.push(Number(readline.question('Enter the 4th number: ')));
numberArray.push(Number(readline.question('Enter the 5th number: ')));
numberSearch = Number(readline.question('Enter the last number: '));

findNumber(numberArray, numberSearch);
