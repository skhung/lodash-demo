// Mapping Data
const _ = require('lodash');

const loc = [{
  location_key: [32, 22, 11],
  autoassign: 1
},
  {
    location_key: [41, 42],
    autoassign: 1
  }
];

const bulkConfig = [{
  dataValues: {
    config_key: 100
  }
},
  {
    dataValues: {
      config_key: 200
    }
  }
];

// [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]

// Steps
// 1. Go with map through loc
// 2. Get index of current element
// 3. bulkConfig[1].dataValues.config_key
// 4. Create 3 new objects with map

// let result = _.map(loc, (locEl, index) => {
//   // console.log("locEl", locEl, index);
//   // console.log("bulkConfig", bulkConfig[index].dataValues.config_key);
//   return _.map(locEl.location_key, (locationKey) => {
//     // console.log('location_key', locationKey);
//     return {
//       location_key: locationKey,
//       config_key: bulkConfig[index].dataValues.config_key,
//       autoassign: locEl.autoassign
//     };
//   });
//   console.log('foo', foo);
// });

// const flattenResult = _.flatten(result);

// console.log("result", flattenResult);

const getConfigs = (locEl, index) => {
  return _.map(locEl.location_key, (locationKey) => {
    return {
      location_key: locationKey,
      config_key: bulkConfig[index].dataValues.config_key,
      autoassign: locEl.autoassign
    };
  });
}

let configs = _.chain(loc)
  .map(getConfigs)
  .flatten()
  .value();

let flattenConfigs = _.flatten(configs);

console.log('configs', flattenConfigs);