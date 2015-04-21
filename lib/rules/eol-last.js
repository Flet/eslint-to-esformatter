var objectPath = require('object-path');

module.exports = function (active) {
  var output = {};

  if (active < 1) return output;

  objectPath.set(output, 'lineBreak.before.EndOfFile', 1);

  return output;
};
