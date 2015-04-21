var objectPath = require('object-path');

var ALWAYS = 'always';
var NEVER = 'never';

module.exports = function (active, arg) {
  var output = {};

  if (active < 1) return output;
  arg = arg || ALWAYS;

  if (arg === ALWAYS) {
    objectPath.set(output, 'lineBreak.after.VariableDeclaration', 2);
  } else if (arg === NEVER) {
    objectPath.set(output, 'lineBreak.after.VariableDeclaration', 1);
  }

  return output;
};
