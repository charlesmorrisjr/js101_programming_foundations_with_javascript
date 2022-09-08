// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

numbers = [];

console.log(numbers);

numbers = [1, 2, 3, 4];
numbersLength = numbers.length

for (let i = 0; i < numbersLength; i++) {
  numbers.pop();
}

console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);

console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.pop();
}

console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.length = 0;

console.log(numbers);
