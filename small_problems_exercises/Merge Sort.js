/* PEDAC


** Problem **
Write a function that takes an array argument and returns a new array that contains the values from the input array in sorted order.

** Rules/Requirements **

Questions:
- Will the given array always contain an odd number of elements?

Explicit:
- Use the merge() function created in the previous exercise
- Every element in the given array will be the same data type -- string or number

Implicit:
- The given array must be sorted using the merge() function written in the previous exercise
- Cannot use an built-in function from JavaScript to sort the array
- Array can contain an even number of elements. Must determine if the odd element out will effect when merging the array back together

- Input: an array
  - Contains a series of numbers or strings
- Output: an array
  - Input array sorted


** Examples **
[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

[6, 2, 7, 1, 4]
[[6, 2], [7, 1, 4]]
[[[6], [2]], [[7], [1, 4]]]
[[[6], [2]], [[7], [[1], [4]]]]
[[[2, 6]], [[7], [[1, 4]]]]
[[2, 6], [1, 4, 7]]
[1, 2, 4, 6, 7]

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

** Data Structure **

- An array to perform operations on, initialized with a copy of the given array


** Algorithm **

-
*/
function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let subArray1 = arr.slice(0, arr.length / 2);
  let subArray2 = arr.slice(arr.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);
  console.log(subArray1, subArray2);

  return merge(subArray1, subArray2);
}

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

// console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
// console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

// console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]