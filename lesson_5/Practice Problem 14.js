let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

const capitalize = word => word[0].toUpperCase() + word.slice(1);

let arr = Object.values(obj).map(produceObj => {
  if (produceObj.type === 'fruit') {
    return produceObj.colors.map(color => (capitalize(color)));
  } else if (produceObj.type === 'vegetable') {
    return produceObj.size.toUpperCase();
  }
});

console.log(arr);
