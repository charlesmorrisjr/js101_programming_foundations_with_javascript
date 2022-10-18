// Create a function that takes two integers as arguments. The first argument is
// a count, and the second is the starting number of a sequence that your
// function will create. The function should return an array containing the same
// number of elements as the count argument. The value of each element should be
// a multiple of the starting number.

function sequence(count, startNum) {
  let sequenceArray = [];

  for (let idx = 1; idx <= count; idx++) {
    sequenceArray.push(startNum * idx);
  }

  return sequenceArray;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
