// Remove Quiz
const _ = require('lodash');

const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
    likes: 110
  },
  {
    id: 3,
    name: 'Mike',
    isActive: true,
    likes: 200
  },
  {
    id: 2,
    name: 'Jack',
    isActive: true,
    likes: 30
  }
];

const getPopularUsers = (users) => {
  return _.filter(users, (user) => {
    return user.isActive && user.likes > 100
  });
};

// const getPopularUsers = (users) => {
//   return _.reject(users, (user) => {
//     return !user.isActive || user.likes < 100
//   });
// };

console.log(getPopularUsers(users));
