// Write a function that takes a string consisting of zero or more space
// separated words and returns an object that shows the number of words of
// different sizes.

function wordSizes(text) {
  let wordObj = {};
  let wordArray = removeNonLetter(text).split(' ');

  if (text.trim() !== '') {
    for (let word of wordArray) {
      if (word.length in wordObj) {
        wordObj[word.length] += 1;
      } else {
        wordObj[word.length] = 1;
      }
    }
  }

  return wordObj;
}

function removeNonLetter(string) {
  return string.replace(/[^a-z ]/ig, '');
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
