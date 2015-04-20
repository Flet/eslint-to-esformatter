var objectPath = require('object-path');

module.exports = function (active, arg, options) {
  var output = {};

  if (active < 1) return output;
  arg = arg ? arg : 4;

  var indentValue;
  if (arg === 'tab') {
    indentValue = '\t';
  } else {
    for (indentValue = ''; indentValue.length < arg;) {
      indentValue += ' ';
    }
  }

  objectPath.set(output, 'indent.value', indentValue);

  if (options && !options.indentSwitchCase) {
    objectPath.set(output, 'indent.SwitchCase', 0);
  }

  return output;
};
