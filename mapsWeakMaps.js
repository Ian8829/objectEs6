const myMap = new Map();

//API
// set(), get(), size, clear(), has()

const myObj = {};
const myFunc = function () {};

myMap.set(myObj, 'bar');
myMap.set(myObj, 'world');

// myMap.clear();

// console.log(myMap.has('hello'));

//Iterators
// keys(), entries(), values

for(let [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}