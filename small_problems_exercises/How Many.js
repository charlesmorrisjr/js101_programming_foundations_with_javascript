/* eslint-disable indent */
// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of
// occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let countObj = {};

  for (let element of array) {
    countObj[element] = countObj[element] || 0;
    countObj[element] += 1;
  }

  logOccurrences(countObj);
}

function logOccurrences(object) {
  Object.keys(object).forEach(key => {
    console.log(`${key} => ${object[key]}`);
  });
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
