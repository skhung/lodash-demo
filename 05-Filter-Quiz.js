// Filter quiz
const _ = require('lodash');

let products = [
  {
    id: 1,
    name: 'milk',
    price: '1$'
  },
  {
    id: 2,
    name: 'bread',
    price: '2$'
  },
  {
    id: 3,
    name: 'meat',
    price: '3$'
  }
];

// let searchProducts = (projects, searchValue) => {
//   return _.filter(products, (product) => {
//     return product.name.includes(searchValue)
//   });
// };

// for most browser compatible
let searchProducts = (projects, searchValue) => {
  return _.filter(products, (product) => {
    return _.includes(product.name, searchValue);
  });
};

console.log(searchProducts(products, 'm'));