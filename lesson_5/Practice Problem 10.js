let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(element => {
  return element.slice().sort((a, b) => {
    if (typeof element[0] === 'number') {
      return b - a;
    }

    if (b < a) {
      return -1;
    } else if (b > a) {
      return 1;
    } else if (b === a) {
      return 0;
    }
  })
});

console.log(arr);
console.log(newArr);
