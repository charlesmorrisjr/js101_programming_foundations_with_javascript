// Build a program that asks the user to enter the length and width of a room in
// meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the
// readlineSync.prompt method to collect user input.

/* PEDAC

Input: Length and width of a room in meters

Output: Area of the room in both square meters and square feet

Mental Model: Retrieve length and width of room from user input and multiply
them to calculate square meters and log the result. Then, convert square meters
to square feet and log that value as well.

Examples:

  Enter the length of the room in meters:
  10
  Enter the width of the room in meters:
  7
  The area of the room is 70.00 square meters (753.47 square feet).

Data Structures: Float number parameters for length and width

Algorithm:
  1. Retrieve length and width of room in meters from user input and store them
    in variables inputLength and inputWidth
  2. Create function calculateArea with length and width in meters as parameters
  3. Convert length and width to integers using parseInt()
  4. Multiply length by width to retrieve area in square meters and store in
    variable sqMeters
  5. Multiply area in square meters by constant 10.7639 to retrieve area in
    square feet and store in variable sqFeet
  6. Convert areas back to strings using toFixed and log area in square meters
    and square feet to console

*/

function calculateArea (length, width) {
  let sqMeters = length * width;
  let sqFeet = sqMeters * SQMETERS_TO_SQFEET;

  console.log(`\nThe area of the room is ${sqMeters.toFixed(2)} square meters (${sqFeet.toFixed(2)} square feet).`);
}

const SQMETERS_TO_SQFEET = 10.7639;

let readlineSync = require('readline-sync');
let inputLength = readlineSync.question('Enter the length of the room in meters: ');
let inputWidth = readlineSync.question('Enter the width of the room in meters: ');

calculateArea(inputLength, inputWidth);
