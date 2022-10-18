// Write a function that takes a string, doubles every consonant character in
// the string, and returns the result as a new string. The function should not
// double vowels ('a','e','i','o','u')), digits, punctuation, or whitespace.

function doubleConsonants(string) {
  let newString = string.split('').map(char => {
    if (/[^0-9aeiou]/i.test(char) && /[a-z]/i.test(char)) {
      return char + char;
    } else {
      return char;
    }
  }).join('');

  return newString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
