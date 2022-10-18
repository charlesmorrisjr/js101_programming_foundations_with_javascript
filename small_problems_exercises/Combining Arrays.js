function union(...arrays) {
  let newArray = [];

  arrays.forEach(array => copyNonDupsTo(newArray, array));

  return newArray;
}

function copyNonDupsTo(resultArray, array) {
  array.forEach(num => {
    if (!resultArray.includes(num)) resultArray.push(num);
  });
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
