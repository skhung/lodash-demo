// Chain
const _ = require('lodash');

const users = [
  {
    name: 'John',
    age: 35,
    isActive: true
  },
  {
    name: 'Jack',
    age: 30,
    isActive: false
  },
  {
    name: 'Joe',
    age: 24,
    isActive: true
  }
];

// const getYoungestUserMessage = (users) => {
//   let activeUsers = _.filter(users, 'isActive');
//   let sortedActiveUsers = _.orderBy(activeUsers, ['age']);
//   let firstUser = sortedActiveUsers[0];
//     // console.log(activeUsers);
//   return firstUser.name + ' is ' + firstUser.age;
// };

const getYoungestUserMessage = (users) => {
  return _.chain(users)
    .filter('isActive')
    .orderBy(['age'])
    .map((user) => {
      return user.name + ' is ' + user.age
    }).head().value();
  // }).value()[0];
};

console.log(getYoungestUserMessage(users));

// console.log(_.chain(users).filter('isActive').value());
