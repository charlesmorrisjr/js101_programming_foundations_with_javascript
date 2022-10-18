// Write a function that returns a list of all palindromic substrings of a
// string. That is, each substring must consist of a sequence of characters that
// reads the same forward and backward. The substrings in the returned list
// should be sorted by their order of appearance in the input string. Duplicate
// substrings should be included multiple times.

function leadingSubstrings(string) {
  let substrings = [];

  for (let idx = 1; idx <= string.length; idx++) {
    substrings.push(string.slice(0, idx));
  }

  return substrings;
}

function substrings(string) {
  let substrings = [];

  for (let idx = 0; idx <= string.length; idx++) {
    let substring = leadingSubstrings(string.slice(idx, string.length));
    substrings = substrings.concat(substring);
  }

  return substrings;
}

function palindromes(string) {
  let palindromeArr = [];

  for (let substring of substrings(string)) {
    if (isPalindrome(substring)) {
      palindromeArr.push(substring);
    }
  }

  return palindromeArr;
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
