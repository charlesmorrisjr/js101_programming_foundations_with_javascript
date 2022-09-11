let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObject = {};

flintstones.forEach((name, index) => flintstonesObject[name] = index);

console.log(flintstonesObject);
