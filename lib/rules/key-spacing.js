var objectPath = require('object-path');

module.exports = function (active, options) {
  var output = {};

  objectPath.set(output, 'whiteSpace.after.PropertyName', -1);
  objectPath.set(output, 'whiteSpace.before.PropertyValue', -1);

  if (active < 1) return output;

  options = options || { beforeColon: false, afterColon: true };
  if (!options.hasOwnProperty('beforeColon')) { options.beforeColon = false; }
  if (!options.hasOwnProperty('afterColon')) { options.afterColon = true; }

  objectPath.set(output, 'whiteSpace.after.PropertyName', options.beforeColon ? 1 : 0);
  objectPath.set(output, 'whiteSpace.before.PropertyValue', options.afterColon ? 1 : 0);

  // TODO "align":"colon" and "align":"value" are not supported in eslint
  if (options.align) {
    console.warn('Unsupported rule option: "align":' + options.align);
  }

  return output;
};
