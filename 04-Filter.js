// Filter

const _ = require('lodash');

// let users = [
//   {
//     id: 1,
//     name: 'John'
//   },
//   {
//     id: 2,
//     name: 'Jack'
//   }
// ];

let users = {
  1: {
    id: 1,
    name: 'John'
  },
  2: {
    id: 2,
    name: 'Jack'
  }
};

// let newArr = _.filter(users, (item) => {
//   return item.name === "John";
// });

let newArr = _.filter(users, {name: "John"});

console.log(newArr);