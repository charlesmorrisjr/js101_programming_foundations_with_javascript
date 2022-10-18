/* PEDAC

** Problem **

// Write a function that takes two sorted arrays as arguments and returns a new
// array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.


** Rules/Requirements **

Explicit:
- Take two arrays with sorted elements
- Return a single new array with all elements from both input arrays in
  sorted order
- Do not sort the new array after combining the original arrays
- New array must be sorted one element at a time as it is being created
- Do not mutate input arrays

Implicit:
- Input arrays can be different sizes
- Input arrays can contain numbers or nothing


Questions:
- Are both input arrays the same length?
- Is every element in the input arrays a number?

- Input: Two arrays
  - Both arrays are sorted elements
- Output: One array
  - All elements are sorted


** Examples **

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]


** Data Structure **

- Arrays are used to contain numbers
- An input array may be empty


** Algorithm **

- If one input array is empty, return the other array unmodified
- If the first array is shorter in length than the second array, swap the
  input array references
- Initialize an empty array 'newArray'
- Initialize a number variable 'array1Idx' to 0
- Initialize a number variable 'array2Idx' to 0
- Start a loop
  - If the element

*/
/*
function merge(array1, array2) {
  if (array1 === [] || array2 === []) {
    return array1 || array2;
  }

  if (array1.length < array2.length) {
    [array1, array2] = [array2, array1];
  }

  let newArray = [];
  let array1Idx = 0;
  let array2Idx = 0;

  while (true) {
    if (array2Idx < array2.length) {
      if (array1[array1Idx] < array2[array2Idx]) {
        newArray.push(array1[array1Idx]);
        array1Idx += 1;
      } else {
        newArray.push(array2[array2Idx]);
        array2Idx += 1;
      }
    } else {
      newArray.push(array1[array1Idx]);
      array1Idx += 1;
    }
    if ((array1Idx >= array1.length) && (array2Idx >= array2.length)) {
      return newArray;
    }
 }
}
*/

function merge(array1, array2) {
  // Launch School solution

  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]