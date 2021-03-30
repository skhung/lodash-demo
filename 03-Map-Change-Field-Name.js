// Map quiz
const _ = require('lodash');

const users = [{
  id: 1,
  first_name: 'John',
  status: 'active'
}, {
  id: 2,
  first_name: "Mike",
  status: 'inactive'
}];

// const users = [{
//   id: 1,
//   firstName: 'John',
//   isActive: 'active'
// }, {
//   id: 2,
//   firstName: "Mike",
//   isActive: 'inactive'
// }];

const normalizeUsers = (users) => {
  return _.map(users, (user) => {
    return {
      id: user.id,
      firstName: user.first_name,
      isActive: user.status
    }
  });
}

console.log(normalizeUsers(users));
