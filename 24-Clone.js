// Clone
const _ = require('lodash');

const baseConfig = {
  apiUrl: 'http://localhost',
  port: 4000
};

const createExtendedConfig = (config) => {
  // config.host = 'https://google.com';
  // return config;
  return Object.assign({}, config, {host: 'https://google.com'})
};

let extendedConfig = createExtendedConfig(baseConfig);
console.log('1', baseConfig);
console.log('2', extendedConfig);

const _createExtendedConfig = (config) => {
  let cloneConfig = _.clone(config);
  cloneConfig.host = 'https://google.com';
  return cloneConfig;
};

let _extendedConfig = _createExtendedConfig(baseConfig);
console.log('3', _extendedConfig);

// Clone with nested object
let a = {b: {c: 1}};
let b = _.cloneDeep(a);
b.b.foo = 'bar'
console.log('3', a);
console.log('4', b);
