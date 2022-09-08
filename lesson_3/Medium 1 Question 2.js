// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

// Solution 1
console.log(munstersDescription.split('').map(function(char) {
  if (char === char.toUpperCase()) {
    return char = char.toLowerCase();
  } else if (char === char.toLowerCase()) {
    return char = char.toUpperCase();
  }
}).join(''));

// Solution 2
console.log(munstersDescription.split('').map(char => (char === char.toUpperCase()) ? char = char.toLowerCase() : char = char.toUpperCase()).join(''));

// Solution 3
let descriptionArr = munstersDescription.split('');

for (index in descriptionArr) {
  if (descriptionArr[index] === descriptionArr[index].toUpperCase()) {
    descriptionArr[index] = descriptionArr[index].toLowerCase();
  } else if (descriptionArr[index] === descriptionArr[index].toLowerCase()) {
    descriptionArr[index] = descriptionArr[index].toUpperCase();
  }
}

let invertedDescription = descriptionArr.join('');

console.log(invertedDescription);
