function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"
