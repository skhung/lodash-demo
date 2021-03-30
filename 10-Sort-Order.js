// Sorting
const _ = require('lodash');

const users = [
  {
    name: 'Fred',
    likes: 10
  },
  {
    name: 'John',
    likes: 20
  },
  {
    name: 'Jack',
    likes: 20
  },
  {
    name: 'Alex',
    likes: 1
  }
];

// descending sort
// const sorted_users = users.sort((user1, user2) => {
//   return user1.likes > user2.likes ? -1 : 1
// })

// ascending sort
// const sorted_users = users.sort((user1, user2) => {
//   return user1.likes < user2.likes ? -1 : 1
// })
// console.log(sorted_users);

// ascending order
// const order_users = _.orderBy(users, ['likes']);

// descending order
const order_users = _.orderBy(users, ['likes', 'name'], ['desc', 'asc']);
console.log(order_users);
