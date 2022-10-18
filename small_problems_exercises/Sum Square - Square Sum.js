// Write a function that computes the difference between the square of the sum
// of the first count positive integers and the sum of the squares of the first
// count positive integers.

function sumSquareDifference(number) {
  let squareOfSum = 0;
  let sumOfSquares = 0;

  for (let count = 1; count <= number; count++) {
    squareOfSum += count;
    sumOfSquares += count ** 2;
  }

  return (squareOfSum ** 2) - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
