// Camelcase and snakecase
const _ = require('lodash');

const str = 'Foo bar-Baz';

console.log('1', _.camelCase(str));

console.log('2', _.snakeCase(str));

