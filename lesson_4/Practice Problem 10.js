let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let lowestNumber = Number.POSITIVE_INFINITY;

Object.values(ages).forEach(num => {
  if (num < lowestNumber) {
    lowestNumber = num;
  }
});

console.log(lowestNumber);
console.log(Math.min(...Object.values(ages)));
