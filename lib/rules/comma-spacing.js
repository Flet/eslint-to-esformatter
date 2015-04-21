var objectPath = require('object-path');

var nodeTypes = [
  'ArrayExpressionComma',
  'ArgumentComma',
  'CommaOperator',
  'ParameterComma'
];

module.exports = function (active, options) {
  var output = {};

  /*
  // todo: https://github.com/Flet/eslint-to-esformatter/issues/6
  nodeTypes
    .forEach(function (type) {
      objectPath.set(output, 'whiteSpace.before.' + type, -1);
      objectPath.set(output, 'whiteSpace.after.' + type, -1);
    });

  objectPath.set(output, 'whiteSpace.after.PropertyValue', -1)
  */

  if (active < 1) return output;
  options = options || { before: false, after: true };
  if (!options.hasOwnProperty('before')) { options.before = false; }
  if (!options.hasOwnProperty('after')) { options.after = true; }

  // todo: eslint doesn't seperate configuration by node
  // todo: eslint only supports setting spacing to 1 space

  nodeTypes
    .forEach(function (type) {
      objectPath.set(output, 'whiteSpace.before.' + type, options.before ? 1 : 0);
      objectPath.set(output, 'whiteSpace.after.' + type, options.after ? 1 : 0);
    });

  objectPath.set(output, 'whiteSpace.after.PropertyValue', options.before ? 1 : 0);
  // todo: this causes issues for a lot of variable statements
  // ex. `var d = 4 ;` Currently no option in esformatter
  objectPath.set(output, 'whiteSpace.after.VariableValue', options.before ? 1 : 0);

  return output;
};
