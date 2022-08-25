// Write a program that asks the user to enter an integer greater than 0, then
// asks whether the user wants to determine the sum or the product of all
// numbers between 1 and the entered integer, inclusive.

let readlineSync = require('readline-sync');

let result = 1;
let number = parseInt(readlineSync.question('Please enter an integer greater than 0: '));
let decision = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (decision === 's') {

  for (let i = 2; i <= number; i++) {
    result += i;
  }

  console.log(`\nThe sum of the integers between 1 and ${number} is ${result}.`)

} else if (decision === 'p') {

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  console.log(`\nThe product of the integers between 1 and ${number} is ${result}.`)

} else {

  console.log('Not a valid decision');

}
