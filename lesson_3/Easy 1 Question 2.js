// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// Treat strings like arrays and obtain the last character using their lengths - 1

console.log(str1[str1.length - 1] === '!');
console.log(str2[str2.length - 1] === '!');

// Or use the .endsWith function

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));
