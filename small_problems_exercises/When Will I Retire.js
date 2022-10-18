// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));

let today = new Date();
let currentYear = today.getFullYear();

let yearsLeft = retirementAge - age;
let retirementYear = currentYear + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsLeft} years of work to go! `);
