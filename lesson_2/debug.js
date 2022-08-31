/* eslint-disable no-console */
/* eslint-disable no-debugger */
// debug.js

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;
  counter += 1;
}
