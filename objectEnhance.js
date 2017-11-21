const color = 'red';
const speed = 10;
const drive = 'go';
const car = {
  color,
  speed,
  [drive]: function() { console.log('vroom'); }
};

console.log(car.color);
console.log(car.speed);
car.go();