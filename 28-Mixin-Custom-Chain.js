// Mixins
const _ = require('lodash');

// _.chain('foo').capitalizeLast().value();

const capitalizeLast = (str) => {
  let lastSymbol = _.last(str);
  let initialSymbols = _.chain(str).initial().join('');

  return initialSymbols + _.capitalize(lastSymbol);
};

console.log('1', capitalizeLast('foo'));

_.mixin({capitalizeLast: capitalizeLast});

console.log('2', _.chain('foo').capitalizeLast().value());