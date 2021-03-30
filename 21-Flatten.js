// Flatten
const _ = require('lodash');

let numbers = [[1, 2], [3, 4]];
// [1, 2, 3, 4]

let result = [].concat.apply([], numbers)
console.log('1', result);

let flattenArr = _.flatten(numbers);
console.log('2', flattenArr);