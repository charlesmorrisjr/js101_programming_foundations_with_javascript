/* PEDAC

** Problem **

A collection of spelling blocks has two letters per block. This limits the
words you can spell with the blocks to only those words that do not use both
letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if
the word can be spelled using the set of blocks, false otherwise. You can
consider the letters to be case-insensitive when you apply the rules.

** Rules/Requirements **

Explicit:
- Must check if a word can be constructed with a set of spelling blocks
- Each spelling block has 2 letters
- Each spelling block can only be used once per word
- A word cannot be formed if it needs letters from both sides of one block
- Words and letters are considered case-insensitive

Implicit:

Questions:

- Input: A word
  - A string of characters to be checked
- Output: Boolean
  - True if the inputted word can be formed with spelling blocks, false if not


** Examples **

Given this collection of spelling blocks:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

Input and output should be:

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true


** Data Structure **

- Spelling blocks are a set of two characters
- Each block can be stored as a key in an object
- Each block key contains the two letter values (letter1, letter2)
- Each block key also contains a 'used' boolean value, indicating if the bloc
  has been used yet


** Algorithm **

- Initialize the blocks using the initializeBlocks() function
- Reset each block's 'used' value to false
- Capitalize each character of the 'word'
- Iterate through each character of the provided 'word'
- Iterate through each block in the 'blocks' object and find the block that
  has the character
  - If that block has already been used, return false
  - If that block has not been used, set the blocks 'value' to true
- Continue iterating through the blocks. If none of the blocks have been used
  more than once, the word can be spelled. Return true


initializeBlocks() function
---------------------------

** Problem **

Create an outer object containing inner objects from an array containing letter
pairs. Each inner object represents a spelling block. Each inner object should
contain a value representing if it has been used or not.

** Requirements **

Input:
  - An array containing all the letter pairs
  - Each letter pair is contained in an inner array

Output:
  - An object containing inner objects
  - Each inner object represents one block
  - Each inner object has a boolean value that determines whether it has been
    used or not

** Algorithm **

- Iterate through the input array containing the letter pairs
  - For each letter pair, create an object key beginning with the word 'block'
    and concatenate the current index of the letter pair
  - For the newly created 'block' object, assign the first letter of the letter
    pair to block[idx].letter1 and the second letter to block[idx].letter2
  - Additionally, create a boolean value called 'used' that represents whether
    or not the spelling block has been used yet
*/

const BLOCK_LIST = [ ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M'] ];
let blocks = {};

function initializeBlocks() {
  for (let idx in BLOCK_LIST) {
    blocks['block' + String(idx)] = {};
    blocks['block' + String(idx)].letter1 = BLOCK_LIST[idx][0];
    blocks['block' + String(idx)].letter2 = BLOCK_LIST[idx][1];
    blocks['block' + String(idx)].value = false;
  }
}

function isBlockWord(word) {
  word = word.toUpperCase();

  for (let idx in BLOCK_LIST) {
    blocks['block' + String(idx)].value = false;
  }

  for (let char of word) {
    for (let key in blocks) {
      if (blocks[key].letter1 === char || blocks[key].letter2 === char) {
        if (blocks[key].value) {
          return false;
        } else {
          blocks[key].value = true;
        }
      }
    }
  }

  return true;
}

initializeBlocks();

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
