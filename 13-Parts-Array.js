// Parts of the array
const _ = require('lodash');

const numbers = [1, 2, 3];
console.log('tail',_.tail(numbers));

console.log('slice', numbers.slice(1));

console.log('tail', _.tail('law'));

console.log('tail-join', _.chain('law').tail().join('').value());

console.log(numbers[numbers.length - 1]);

console.log(_.last(numbers));

console.log(_.last('fool'));

console.log('slice2', numbers.slice(0, -1));

console.log(_.initial(numbers));

console.log(_.initial('fool'));