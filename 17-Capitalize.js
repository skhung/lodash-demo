// Capitalize
const _ = require('lodash');

const capitalize = (str) => {
  let lowercaseStr = _.toLower(str);
  let firstLetter = _.chain(lowercaseStr).head().toUpper().value();
  let tail = _.chain(lowercaseStr).tail().join('').value();

  return firstLetter + tail;
};

console.log(capitalize('foO'));