// Converting string quiz
const _ = require('lodash');

const toSlug = (str) => {
  let innerSlug = _.chain(str).toLower().split(' ').join('-').value();
  return encodeURI(innerSlug);
};

let slug = toSlug('This is super quiz');

// this-is-super-quiz

console.log(slug);
