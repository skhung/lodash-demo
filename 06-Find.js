// Find
// The Lodash .find() method allows you to find a single item in a collection of items.
// https://blog.kevinchisholm.com/javascript/lodash-find-vs-lodash-filter/

const _ = require('lodash');

let users = [
  {
    id: 1,
    name: 'john'
  },
  {
    id: 2,
    name: 'jack'
  },
  {
    id: 1,
    name: 'john'
  }
];

// Find only first user
const john_user = _.find(users, (user) => {
  return user.name === 'john';
});

console.log(john_user);

// no user => undefined
const john_user2 = _.find(users, (user) => {
  return user.name === 'john2';
});

console.log(john_user2);

// find id: 1
const id_user = _.find(users, {id: 1});
console.log(id_user);