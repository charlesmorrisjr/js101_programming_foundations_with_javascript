function neutralize(sentence) {
  let words = sentence.split(" ");

  return words.filter(word => !isNegative(word)).join(" ");
/*
  let newSentence = [];

  words.forEach(word => {
    // if (isNegative(word)) {
    if (!isNegative(word)) {
      const index = words.indexOf(word);
      // words.splice(index, 1);
      newSentence.push(word);
    }
  });
  // return words.join(" ");
  return newSentence.join(" ");
*/
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.
