// Assign
const _ = require('lodash');

let state = {
  isLoading: true,
  data: null,
  error: null
};

const newState = {
  isLoading: false,
  data: {id: 1, name: 'John'}
};

let merge = Object.assign({}, state, newState);
console.log('1', merge);

let merge2 = Object.assign(state, newState);
console.log('2', merge2);

let merge_ = _.assign(state, newState);
console.log('3', merge_);