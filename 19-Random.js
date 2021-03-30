// Random
const _ = require('lodash');

console.log('1', Math.random());

const myRandom = (from, to) => {
  return Math.floor(Math.random() * to) + from;
};

console.log('2', myRandom(0, 100));

console.log('3', _.random(0, 100));
