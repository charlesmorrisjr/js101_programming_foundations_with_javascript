let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// Object.values(obj).forEach(element => console.log(element));
Object.values(obj).forEach(element => {
  element.forEach(word => {
    let vowels = word.match(/[aeiou]/gi);
    console.log(vowels.join('\n'))
  });
});

// console.log(obj.first[0].match(/[aeiou]/gi));

