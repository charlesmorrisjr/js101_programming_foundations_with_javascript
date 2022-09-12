let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let modifiedObj = Object.assign({}, obj);
  
  for (element in obj) {
    modifiedObj[element] += 1;
  }
  return modifiedObj;
});

console.log(arr);
console.log(newArr);
