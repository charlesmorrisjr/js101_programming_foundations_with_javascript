/* PEDAC

Problem
-------

// Build a madlibs program that takes a text "template" as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that text,
// and then returns it. You can build your lists of nouns, verbs, adjectives,
// and adverbs directly into your program. Your program should read this text
// and, for each line, place random words of the appropriate types into the text
// and return the result.


Questions:
- Do the replaceable parts of the template specify which list to obtain a
  word from? (i.e., verb, noun, adjective, or adverb?)
- Should the replaceable parts be replaced by any word from any of the lists?

Explicit Requirements:
- Input is a text template containing sections that will be replaced
- Replaceable sections can be replaced by words from a series of lists

Implicit requirements:
- Each replaceable part of the input text template should specify which list
  to obtain a word from (i.e., verb, noun, adjective, or adverb)

Input: String
- String contains parts which can replace strings from specified lists

Output: New string
- Template sections in original string are replaced with strings from specified
  lists
- Strings taken from lists should be selected randomly


** Examples **

// The %{adjective} brown %{noun} %{adverb}
// %{verb} the %{adjective} yellow
// %{noun}, who %{adverb} %{verb} his
// %{noun} and looks around.

// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.


// The %{noun} %{verb} the %{noun}'s %{noun}.

// The "fox" "bites" the "dog"'s "tail".


** Data Structures **
- Each list can be stored as a key-value pair within an object, with the values
  being placed together in an array
- Each template can contain markers to signify where to replace parts
  of the string with strings from the lists


** Algorithms **
- Split the input string template into an array 'splitTemplate' separating
  words and replaceable elements at spaces
- Iterate over every element in 'splitTemplate' and check if it contains a
  replaceable string, constructing a new array from the elements
  - If it does contain a replaceable string, extract what list to obtain a
    replacement string from, and select a random string to replace the element
    with
    - Retrieve the list key name by extracting from position 2 of the string to
      the position of the '}' character
    - Use the key name to select the appropriate key from the object containing
      the lists
    - Select a random word from the key's value
      - Generate a random number, multiply by the length of the value's
        array length minus 1, and round down to the nearest integer
  - Return the element to the new array
- Join the 'splitTemplate' back together with spaces and return it to the caller

*/

let template1 = "The %{adjective} brown %{noun} %{adverb} %{verb} the %{adjective} yellow %{noun}, who %{adverb} %{verb} his %{noun} and looks around.";
let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

const WORD_LISTS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
};

function madlibs(template) {

  const splitTemplate = template.split(' ');

  let replacedTemplate = splitTemplate.map(element => {
    if (element.slice(0, 2) === '%{') {
      let key = element.slice(2, element.indexOf('}'));

      element = WORD_LISTS[key][Math.floor(Math.random() *
        (WORD_LISTS[key].length))];
    }

    return element;
  });

  return replacedTemplate.join(' ');
}

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
