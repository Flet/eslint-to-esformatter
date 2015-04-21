var objectPath = require('object-path');

var ALWAYS = 'always';
var NEVER = 'never';

module.exports = function (active, arg) {
  var output = {};

  if (active < 1) return output;
  arg = arg || ALWAYS;

  // todo: eslint doesn't support more than 1 line
  if (arg === ALWAYS) {
    objectPath.set(output, 'lineBreak.after.VariableDeclaration', 2);
  } else if (arg === NEVER) {
    // todo: not sure if this is supposed to be 1 or 0 but it seems to work with 1...
    objectPath.set(output, 'lineBreak.after.VariableDeclaration', 1);
  }

  return output;
};
