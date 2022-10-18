/* PEDAC

** Problem **

// A 90-degree rotation of a matrix produces a new matrix in which each side of
// the matrix is rotated clockwise by 90 degrees. For example, the 90-degree
// rotation of the matrix shown above is:

// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by
// 90-degrees as described above, and returns the result as a new matrix. The
// function should not mutate the original matrix.

- Questions:
  - Will the length of the rotated matrix equal the length of
    the original matrix?
  - Will the width of the rotated matrix equal the width of
    the original matrix?

- Explicit Requirements:
  - Input matrix can be any nested array with at least one row and one column
  - The length of the rows and columns of the input matrix can be different

- Input: Nested array containing original matrix
- Output: Nested array containing new matrix

- Implicit Requirements:
  - Length of the rotated matrix's outer array will equal the
    length of the original matrix's inner array
  - Length of the rotated matrix's inner array will equal the
    length of the original matrix's outer array


** Examples **

Original matrix:
1  5  8
4  7  2
3  9  6

Transposed matrix:
3  4  1
9  7  5
6  2  8


Original matrix:
3  4  1
9  7  5

Transposed matrix:
9  3
7  4
5  1


** Data Structure **
- Matrices are stored in nested arrays
- A matrix can be represented by an outer array containing inner arrays
- Each element of an inner array represents the X-axis of the matrix
- Each element of the outer array represents the Y-axis of the matrix
- Length of the rotated matrix's outer array will equal the
  length of the original matrix's inner array
- Length of the rotated matrix's inner array will equal the
  length of the original matrix's outer array

** Algorithms **

- Initialize an empty array 'newArray'
- Initialize a number 'origXLen' to the length of the input matrix's
  inner array minus 1
- Initialize a number 'origYLen' to the length of the input matrix's
  outer array minus 1
- Iterate through the length of the inner array using variable 'xAxis'
  - Initialize an empty array 'newRow'
  - Iterate from 'origYLen' to 0 using variable 'yAxis'
    - Take the element from the input matrix[yAxis, xAxis] and add it
      to 'newRow'
  - Add 'newRow' to 'newArray'
- Return 'newArray'

*/

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrixArray) {
  let newArray = [];
  let origXLen = matrixArray[0].length - 1;
  let origYLen = matrixArray.length - 1;

  for (let xAxis = 0; xAxis <= origXLen; xAxis++) {
    let newRow = [];

    for (let yAxis = origYLen; yAxis >= 0; yAxis--) {
      newRow.push(matrixArray[yAxis][xAxis]);
    }
    newArray.push(newRow);
  }

  return newArray;
}

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]