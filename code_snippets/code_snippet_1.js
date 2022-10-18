let array = ['apple'];

const addTo = array => {
  array = array.push('banana');
  return array;
};

console.log(addTo(array));
console.log(array);