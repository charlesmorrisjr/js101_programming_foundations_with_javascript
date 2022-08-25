// Write a program that will ask for user's name. The program will then greet
// the user. If the user writes "name!" then the computer yells back to the
// user.

let readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name? ');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.toUpperCase().slice(0, -1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
