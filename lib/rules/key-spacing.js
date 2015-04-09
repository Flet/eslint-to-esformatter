module.exports = function (active, options) {
  var output = {}

  options = options || {beforeColon: false, afterColon: true}
  output.whiteSpace = {value: ' ', before: {}, after: {} }

  output.whiteSpace.after.PropertyName = -1
  output.whiteSpace.before.PropertyValue = -1

  if (active > 0) {
    if (options.hasOwnProperty('beforeColon')) {
      output.whiteSpace.after.PropertyName = options.beforeColon ? 1 : 0
    }

    if (options.hasOwnProperty('afterColon')) {
      output.whiteSpace.before.PropertyValue = options.afterColon ? 1 : 0
    }
  }

  // TODO "align":"colon" and "align":"value" are not supported
  if (active > 0 && options.align) {
    console.warn('Unsupported rule option: "align":' + options.align)
  }

  return output
}
