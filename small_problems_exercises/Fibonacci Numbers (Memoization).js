// Our recursive fibonacci function from an earlier exercise isn't very
// efficient. It starts slowing down with an nth argument value as low as 35.
// One way to improve the performance of our recursive fibonacci function (and
// other recursive functions) is to use memoization.

let fLookup = {};

function fibonacci(nth) {
  if (nth < 3) {
    return 1;
  }

  if (fLookup.hasOwnProperty(nth) === false) {
    fLookup[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  }

  return fLookup[nth];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
