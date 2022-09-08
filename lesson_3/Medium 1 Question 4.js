function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let array = [1, 2, 3];

console.log(addToRollingBuffer1(array, 5, 4));
console.log(array);

console.log(addToRollingBuffer2(array, 5, 5));
console.log(array);
