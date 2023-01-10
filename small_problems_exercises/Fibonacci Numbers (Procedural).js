// In the previous exercise, we developed a recursive solution for computing the
// nth Fibonacci number. In a language that is not optimized for recursion, some
// (but not all) recursive functions can be extremely slow and may require
// massive quantities of memory and/or stack space. If you tested for bigger nth
// numbers, you might have noticed that getting the 50th fibonacci number
// already takes a significant amount of time.

function fibonacci(nth) {
  let fNum = 1;
  let fNum1 = 1;
  let fNum2 = 1;

  for (let idx = 3; idx <= nth; idx++) {
    fNum = fNum1 + fNum2;
    fNum1 = fNum2;
    fNum2 = fNum;
  }

  return fNum;
}

console.log(fibonacci(6));
// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050
