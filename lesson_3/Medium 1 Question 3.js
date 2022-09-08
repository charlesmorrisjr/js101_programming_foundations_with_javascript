function factors(number) {
  let factors = [];
  
  for (let divisor = number; divisor > 0; divisor--) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }
  return factors;
}

console.log(factors(10));
