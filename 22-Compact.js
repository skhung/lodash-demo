// Compact
const _ = require('lodash');

let arr = [1, 2, null, 3, undefined, 0, false, 4, ""];
console.log('1', arr.filter(Boolean));

let arrCompact = _.compact(arr);
console.log('2', arrCompact);