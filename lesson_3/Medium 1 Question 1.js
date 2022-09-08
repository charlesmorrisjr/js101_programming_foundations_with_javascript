// For this practice problem, write a program that outputs The Flintstones Rock!
// 10 times, with each line indented 1 space to the right of the line above it.
// The output should start out like this:

const WALL_TEXT = 'The Flintstones Rock!';

for (let i = 0; i < 10; i++) {
  console.log(WALL_TEXT.padStart(WALL_TEXT.length + i, ' '));
}