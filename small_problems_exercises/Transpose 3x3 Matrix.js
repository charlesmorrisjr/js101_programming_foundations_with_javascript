/* PEDAC

** Problem **

// Write a function that takes an array of arrays that represents a 3x3 matrix
// and returns the transpose of the matrix. You should implement the function on
// your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a
// new matrix and leave the input matrix array unchanged.


- Questions:

- Explicit Requirements:
  - Function transposes a matrix represented by a nested array
  - Function returns transposed matrix
  - Function does NOT modify original nested array
  - Cannot use external library function

- Input: Nested array containing original matrix
- Output: Nested array containing new matrix

- Implicit Requirements:


** Examples **

Original matrix:
1  5  8
4  7  2
3  9  6

Transposed matrix:
1  4  3
5  7  9
8  2  6

Original matrix:   [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
Transposed matrix: [[1, 4, 3], [5, 7, 9], [8, 2, 6]]

** Data Structure **
- Matrices are stored in nested arrays
- A 3x3 matrix can be represented by an outer array containing 3 inner arrays
- Each element of an inner array represents the X-axis of the matrix
- Each element of the outer array represents the Y-axis of the matrix


** Algorithms **

- Initialize an empty array 'newArray'
- Iterate through the length of the inner array using variable 'xAxis'
  - Initialize an empty array 'newRow'
  - Iterate through the length of the outer array using variable 'yAxis'
    - Take the element from the input matrix[yAxis, xAxis] and add it
      to 'newRow'
  - Add 'newRow' to 'newArray'
- Return 'newArray'
*/

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrixArray) {
  let newArray = [];

  for (let xAxis = 0; xAxis < matrixArray[0].length; xAxis++) {
    let newRow = [];

    for (let yAxis = 0; yAxis < matrixArray.length; yAxis++) {
      newRow.push(matrixArray[yAxis][xAxis]);
    }
    newArray.push(newRow);
  }

  return newArray;
}

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
