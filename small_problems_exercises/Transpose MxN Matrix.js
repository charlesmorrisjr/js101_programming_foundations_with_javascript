/* PEDAC

** Problem **

// Matrix transposes are not limited to 3x3 matrices, or even square matrices.
// Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works
// with any MxN matrix with at least one row and one column.


- Questions:
  - Will the length of the transposed matrix equal the length of
    the original matrix?
  - Will the width of the transposed matrix equal the width of
    the original matrix?

- Explicit Requirements:
  - Input matrix can be any nested array with at least one row and one column
  - The length of the rows and columns of the input matrix can be different

- Input: Nested array containing original matrix
- Output: Nested array containing new matrix

- Implicit Requirements:
  - Length of the new matrix will equal the width of the original matrix
  - Width of the new matrix will equal the length of the original matrix
  - Length of the transposed matrix's outer array will equal the
    length of the original matrix's inner array
  - Length of the transposed matrix's inner array will equal the
    length of the original matrix's outer array


** Examples **

Original matrix:
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]

Transposed matrix:
  [1, 4, 3],
  [5, 7, 9],
  [8, 2, 6],
  [5, 0, 1]

[[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]] -->
[[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]

[[1, 2, 3, 4]] --> [[1], [2], [3], [4]]

[[1], [2], [3], [4]] --> [[1, 2, 3, 4]]

[[1]] --> [[1]]

[[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]] -->
[[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]


Original matrix:   [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
Transposed matrix: [[1, 4, 3], [5, 7, 9], [8, 2, 6]]

** Data Structure **
- Matrices are stored in nested arrays
- A matrix can be represented by an outer array containing inner arrays
- Each element of an inner array represents the X-axis of the matrix
- Each element of the outer array represents the Y-axis of the matrix
- Length of the transposed matrix's outer array will equal the
  length of the original matrix's inner array
- Length of the transposed matrix's inner array will equal the
  length of the original matrix's outer array

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
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
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

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]