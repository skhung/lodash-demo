// Join and Split
const _ = require('lodash');

console.log('1', 'foo/bar'.split('/'));

console.log('2', _.split('foo/bar', '/'));

console.log('3', _.chain('foo/bar').split('/').head().value());

console.log('4', ['foo', 'bar'].join('/'));

console.log('5', _.join(['foo', 'bar'], '/'));

console.log('6', _.chain(['foo', 'bar']).join('/').toUpper().value());



