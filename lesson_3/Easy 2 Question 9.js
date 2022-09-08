// Back in the stone age (before CSS), we used spaces to align things on the
// screen. If we have a 40-character wide table of Flintstone family members,
// how can we center the following title above the table with spaces?

const MAX_TABLE_SIZE = 40;

let title = "Flintstone Family Members";

let tableString = '';
let padding = Math.floor((MAX_TABLE_SIZE - title.length) / 2);

for (let i = 1; i <= MAX_TABLE_SIZE; i++) {
  tableString += '-';
}

console.log(title.padStart(title.length + padding));
console.log(tableString);
