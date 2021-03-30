// Classnames

const _ = require('lodash');

const classNames = (conditions) => {
  const getUsedClassName = (value, key) => {
    return value ? key : undefined;
  };
  return _.chain(conditions)
    .map(getUsedClassName)
    .compact()
    .join(' ')
    .value()
  // let foo = _.map(conditions, (value, key) => {
  //   return value ? key : undefined;
  // });
  // console.log("foo", _.join(_.compact(foo), ' '));
};

const isAuthor = false;
const isInFocus = true;
const liClass = classNames({
  item: true,
  active: isAuthor,
  "item-highlighted": isInFocus
});

console.log(liClass);

// 'item item-highlighted'

// 1. Map through object
// 2. Check value -> if true -> return key
// 3. Return im map undefined when the value is false
// 4. Remove undefineds with compact
// 5. Concatenate the array
