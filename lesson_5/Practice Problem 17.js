/* Algorithm

Loop from beginning to end of UUID string. UUID is 32 hex values plus 5 hyphens, or 37 (0-36) 
For each character in string, generate random seed and multiply by 15 (hexadecimal is base 16 (0-15))
Convert character to hex string character
Place hyphens ('-') at indices 8, 13, 18, and 23
Return completed UUID

*/

function generateUUID() {
  let stringUUID = '';
  const HYPHEN_POSITIONS = [8, 13, 18, 23];

  for (let index = 0; index < 36; index++) {
    if (HYPHEN_POSITIONS.includes(index)) {
      stringUUID += '-';
      continue;
    }
    stringUUID += (Math.floor(Math.random() * 15)).toString(16);
  }
  
  return stringUUID;
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
