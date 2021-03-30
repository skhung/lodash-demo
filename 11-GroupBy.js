// Group by
const _ = require('lodash');

const users = [
  {
    name: 'user1',
    isActive: true
  },
  {
    name: 'user2',
    isActive: true
  },
  {
    name: 'user3',
    isActive: false
  },
  {
    name: 'user4',
    isActive: false
  }
];

// const group_users = (list, prop) => {
//   return list.reduce((aggregator, element) => {
//     // console.log('reduce', list, prop, aggregator, element);
//     (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element);
//     return aggregator;
//   }, {});
// };

// console.log(group_users(users, 'isActive'));

const usersGroupBy = _.groupBy(users, (user) => {
  return user.isActive;
})

console.log(usersGroupBy);

// console.log(_.groupBy(users, 'isActive'));
