function swap(text) {
  let textArr = text.split(' ');
  let reversedWordArr = [];
  /*
  for (let word of textArr) {
    reversedWordArr.push(swapFirstLastLetters(word));
  }
  */
  reversedWordArr = textArr.map(word => swapFirstLastLetters(word));

  let reversedWordText = reversedWordArr.join(' ');

  return reversedWordText;
}

function swapFirstLastLetters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"