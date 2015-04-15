module.exports = function (active, arg, options) {
  var output = {};

  if (active < 1) return output;

  arg = arg ? arg : 4; // default 4 spaces

  var indentValue;
  if (arg === 'tab') {
    indentValue = '\t';
  } else {
    for (indentValue = ''; indentValue.length < arg;) {
      indentValue += ' ';
    }
  }

  output.indent = {
    value: indentValue
  };

  // TODO deal with indentSwitchCase.. this literally does nothing
  if (options && options.indentSwitchCase) {
    output.indent.SwitchCase = 1;
  }

  return output;
};
