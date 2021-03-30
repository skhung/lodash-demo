// Case
const _ = require('lodash');

_.toLower('FOO');
_.toUpper('foo');

'FOO'.toLowerCase();
'foo'.toUpperCase();

console.log(_.toLower('FOO'));
console.log('FOO'.toLowerCase());

let arr = _.chain('FOO').toLower().split('').value();
console.log(arr);