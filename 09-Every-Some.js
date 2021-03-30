// Every and Some
const _ = require('lodash');

const users = [
  {
    id: 1,
    name: 'John',
    isActive: true
  },
  {
    id: 3,
    name: 'Mike',
    isActive: true
  },
  {
    id: 2,
    name: 'Jack',
    isActive: false
  }
];

// const everyUserIsActive = (users) => {
//   return _.every(users, (user) => {
//     return user.isActive
//   });
// };

// const everyUserIsActive = (users) => {
//   return _.every(users, {isActive: true});
// };

const everyUserIsActive = (users) => {
  return _.some(users, {isActive: true});
};

console.log(everyUserIsActive(users));
