function doubleNumbersOddIndices(numbers) {
  let doubledNums = [];
  let counter = 0;
  
  while (counter < numbers.length) {
    if (counter % 2 ===1) {
      doubledNums.push(numbers[counter] * 2);
    } else {
      doubledNums.push(numbers[counter]);
    }

    counter += 1;
  }

  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(doubleNumbersOddIndices(myNumbers));  // => [1, 8, 3, 14, 2, 12]
console.log(myNumbers);
