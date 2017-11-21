const myMap = new WeakMap();

//API
// set(), get(), size, clear(), has()

const myObj = {};
const myFunc = function () {};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set('string', 2);

// myMap.clear();

// console.log(myMap.has('hello'));

//Iterators
// keys(), entries(), values

for(let [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}