// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input
// validation and assume that the user will enter numbers.

let readlineSync = require('readline-sync');

let bill = parseFloat(readlineSync.question('What is the bill? '));
let tipPercentage = parseFloat(readlineSync.question('What is the tip percentage? '));

let tip = bill * (tipPercentage / 100)
let total = bill + tip;

console.log(`The tip is: $${tip.toFixed(2)}`);
console.log(`The bill is: $${total.toFixed(2)}`);
