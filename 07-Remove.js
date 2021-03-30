// Remove
const _ = require('lodash');

const initalArr = [1, 2, 3];
const removeArr = _.without(initalArr, 1, 2);

console.log(initalArr);
console.log(removeArr);

const initialObjArr = [
  {
    id: 1,
    name: 'John',
    isActive: true
  },
  {
    id: 2,
    name: 'Jack',
    isActive: false
  }
];
const activeUsers = _.remove(initialObjArr, (user) => {
  return user.isActive;
});

console.log(initialObjArr);
console.log(activeUsers);

// reject與filter剛好相反
const rejectUsers = _.reject(initialObjArr, (user) => {
  return user.id !== 2;
});

console.log(initialObjArr);
console.log(rejectUsers);
