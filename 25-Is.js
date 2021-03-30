// Is
const _ = require('lodash');

console.log('1', _.isEqual(1, "1"));
console.log('2', {a: 1} === {a: 1});  // false ...XD
console.log('3', _.isEqual({a: 1}, {a: 1})); // true ...^^

console.log('4', _.isEmpty([]));
console.log('5', _.isEmpty({}));

let users;
console.log('6', _.isEmpty(users));

console.log('7', _.isEmpty(null));
console.log('8', _.isEmpty(1));

// if (user !== undefined && user !== null) {

// }

// let user;   // false
// let user = {}; // ture
let user = {id: 1, name: 'John'};

if (!_.isNil(user)) {
  console.log('User is there');
}
