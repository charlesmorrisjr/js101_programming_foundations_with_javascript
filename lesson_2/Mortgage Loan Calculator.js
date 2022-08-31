/* Pseudocode

  Given the loan amount in dollars, APR, and loan duration in years, calculate the monthly payment.

  Calculate the monthly interest rate from the APR, and the loan duration in months from the years.
  Enter those values into the formula for calculating monthly payments.
  Display the monthly payment.

  START

  GET loanAmount
  WHILE isValidNumber(loanAmount)
    PRINT "Loan amount must be greater than 0. Please reenter the loan amount."
    GET loanAmount

  GET apr
  WHILE isValidNumber(apr)
    PRINT "APR must be a percentage greater than 0. Please reenter the APR."
    GET apr

  GET loanYears
  WHILE isValidNumber(loanYears)
    PRINT "Length of loan in years must be at least 1. Please reenter the loan term."
    GET loanYears

  apr = apr / 100
  SET interestMonthly = apr / 12
  SET loanMonths = loanYears * 12

  SET monthlyPayment = loanAmount * (interestMonthly / (1 - ((1 + interestMonthly) ^ loanMonths)));

  PRINT monthlyPayment

  END
*/

function isValidNumber(number) {
  if ((Number.isNaN(number) === false) && (number > 0)) {
    return true;
  }

  return false;
}

const readline = require('readline-sync');

let loanAmount = Number(readline.question('What is the loan amount? '));
while (!isValidNumber(loanAmount)) {
  console.log('Loan amount must be a valid number greater than 0. Please reenter the loan amount.');
  loanAmount = readline.question();
}

let apr = Number(readline.question('What is the APR? (e.g. if APR is 5%, enter 5) '));
while (!isValidNumber(apr)) {
  console.log('APR must be a percentage greater than 0. Please reenter the APR.');
  apr = readline.question();
}

let loanYears = Number(readline.question('What is the length of the loan in years? '));
while (!isValidNumber(loanYears)) {
  console.log('Length of loan in years must be a valid number that is greater than 0. Please reenter the loan term.');
  loanYears = readline.question();
}

apr /= 100;

const interestMonthly = apr / 12;
const loanMonths = loanYears * 12;

const monthlyPayment = loanAmount * (interestMonthly / (1 - ((1 + interestMonthly) ** -loanMonths))
);

console.log(`Monthly payment is: ${monthlyPayment.toFixed(2)}`);
