// Write a function that takes a string argument and returns a list of
// substrings of that string. Each substring should begin with the first letter
// of the word, and the list should be ordered from shortest to longest.

function leadingSubstrings(string) {
  let substrings = [];

  for (let idx = 1; idx <= string.length; idx++) {
    substrings.push(string.slice(0, idx));
  }

  return substrings;
}

function leadingSubstringsMap(string) {
  let substrings = [...string].map((_, idx) => {
    return string.slice(0, idx + 1);
  });

  return substrings;
}

console.log(leadingSubstringsMap('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstringsMap('a'));        // ["a"]
console.log(leadingSubstringsMap('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
