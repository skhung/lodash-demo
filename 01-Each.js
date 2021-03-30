const _ = require('lodash');

console.log("hi lodash! ", _.isEqual(1,1));

// can't chain
const native = [1, 2].forEach((item) => {
  console.log(item);
});

// can chain
const lodash = _.each([3, 4], (item) => {
  console.log(item);
});

// const lodash = _.each([3, 4], function (item) {
//   console.log(item);
// });

console.log("native method v.s lodash", native, lodash);

let items = {
  1: {
    name: "Milk"
  },
  2: {
    name: "Bread"
  }
};

_.each(items, (item) => {
  console.log("item", item);
});

let arr = [];

_.each(items, (item, index) => {
  console.log(item, index);
  arr.push(item);
});

console.log("arr", arr);


