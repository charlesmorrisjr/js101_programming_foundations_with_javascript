// Some algorithms are translated into functions with the required parameters
function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let currentInteger = 2;

  for (let currentRow = 1; currentRow <= rowNumber; currentRow++) {
    let row = createRow(currentInteger, currentRow);
    rows.push(row);

    currentInteger = row.at(-1) + 2;
  }

  let sum = rows.pop().reduce((total, integer) => total + integer);
  return sum;
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }

  return row;
}

// row number: 1 --> sum of integers in row: 2
// row number: 2 --> sum of integers in row: 10
// row number: 4 --> sum of integers in row: 68

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

// start: 2, length: 1 --> [2]
// start: 4, length: 2 --> [4, 6]
// start: 8, length: 3 --> [8, 10, 12]
// start: 14, length: 4 --> [14, 16, 18, 20]

console.log(createRow(2, 1)); // [2]
console.log(createRow(4, 2)); // [4, 6]
console.log(createRow(8, 3)); // [8, 10, 12]
console.log(createRow(14, 4)); // [14, 16, 18, 20]
