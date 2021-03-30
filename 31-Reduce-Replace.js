const _ = require('lodash');

const replaceParamsInUrl = (url, replacements) => {
  return _.reduce(replacements, (acc, replacement) => {
    return _.replace(acc, ":" + replacement.from, replacement.to);
  } , url);

  // _.map(replacements, (replacement) => {
  //   // console.log("replacement", replacement);
  //   url = _.replace(url, ":" + replacement.from, replacement.to);
  // });
  // return url;
};

const initialUrl = '/posts/:postId/comments/:commentId';

const resultUrl = replaceParamsInUrl(initialUrl, [
  { from: "postId", to: "1"},
  { from: "commentId", to: "3"}
]);

console.log(resultUrl);

// /posts/3/comments/2

// 1. Go through replacements
// 2. Replace part of each replacement
// 3. Return new string
