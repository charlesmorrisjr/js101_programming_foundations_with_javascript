/* PEDAC


** Problem **
Given an array and a string containing a item to search for, return the index
of the item being searched for, or return -1 if the item is not found.

** Rules/Requirements **

Questions:
- Can the given array contain a mixtures of strings and numbers?
- Will the given array always contain an odd number of elements?
- Can I use any array index methods or functions, such as .includes()?

Explicit:
- Given an array and a string containing a item to search for
- Return the index of the item being searched for
- Return -1 if the item is not found in the given array
- The given array is always sorted

Implicit:
- All elements within the given array are of the same data type
- The item being searched for may not be in the given array
- The searched for item has the same data type as the elements within the given array
- The length of the given array can be odd or even

- Inputs: an array and a value
  - An array containing either strings or numbers
  - A string or a number
- Output: a number
  - The index of the searched for item within the given array, or -1 if not found


** Examples **
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

Searching for 'Pizzeria' in:
['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper']
=>
Start = 0, Mid = 4, End = 9

['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper']]
Start = 5, Mid = 7, End = 9

** Data Structure **

- An integer number containing the index of the item being searched for
- Two integer numbers containing the beginning and ending indices to search between

** Algorithm **

- Declare an integer number variable named 'startIndex' initialize it to 0
- Declare an integer number variable named 'endIndex' initialize it to length of the given array minus 1
- Start loop and continue while 'startIndex' is less than or equal to the 'endIndex'
  - Declare an integer number variable named 'midIndex' and initialize to the middle value between 'startIndex' and 'endIndex' rounded down
  - Check if the element in the given array at 'midIndex' is the searched item
    - If so, return 'midIndex'
  - If the searched for item is less than the element at 'midIndex' in the
    given array, reassign 'endIndex' to 'midIndex' minus 1
  - If the searched for item is greater than the element at 'midIndex' in the
    given array, reassign 'startIndex' to 'midIndex' plus 1
- If the loop ends without finding the searched for item, return -1
*/

function binarySearch(arr, searchItem) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((endIndex + startIndex) / 2);

    if (arr[midIndex] === searchItem) {
      return midIndex;
    } else if (searchItem < arr[midIndex]) {
      endIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
    }
  }

  return -1;
}

// Yellow pages list of business names data:
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7

console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
