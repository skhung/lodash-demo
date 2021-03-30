const _ = require('lodash');

// let newArr = [1, 2, 3].map((item) => {
//   return item;
// });

// let newArrLodash = _.map([{id: 1, name: 'John'}, {id: 2, name: "Jack"}], (item) => {
//   return item.id;
// });

// console.log("newArrayLodash", newArrLodash);

// let users = {
//   1: {
//     name: "John"
//   },
//   2: {
//     name: "Jack"
//   }
// };

// const userName = _.map(users, (user) => {
//   return user.name;
// });

// console.log("userName", userName);

const users = [{
  id: 1,
  name: 'John'
}, {
  id: 2,
  name: "Jack"
}];

const newArrLodash = _.map(users, (item) => {
  return item.id;
});
console.log("newArrayLodash", newArrLodash);

const newArrLodash2 = _.map(users, 'id');
console.log("newArrayLodash2", newArrLodash2);