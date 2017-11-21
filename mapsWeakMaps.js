const myMap = new Map();

//API
// set(), get(), size, clear(), has()

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

// myMap.clear();

// console.log(myMap.has('hello'));

//Iterators
// keys(), entries(), values

for(let value of myMap.values()) {
  console.log(value);
}