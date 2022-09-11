function selectFruit(produceObject) {
  let fruits = {};
  
  Object.entries(produceObject).forEach(produce => (produce[1] === 'Fruit') && (fruits[produce[0]] = produce[1]));

  return fruits;

  /*
  for (produce of Object.entries(produceObject)) {
    if (produce[1] === 'Fruit') {
      fruits[produce[0]] = produce[1];
    }
  }
  */
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
