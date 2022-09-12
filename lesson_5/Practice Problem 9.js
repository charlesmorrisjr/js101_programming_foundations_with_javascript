let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(element => {
  if (typeof element[0] === 'string') {
    return element.slice().sort();
  } else {
    return element.slice().sort((a, b) => a - b);
  }
});

console.log(arr);
console.log(newArr);
