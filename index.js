module.exports = convert

var _ = require('lodash')
var conversionRules = require('./lib/rules')
var ruleNames = Object.keys(conversionRules)

function convert (cfg) {
  var output = {}
  var eslintRules = cfg.rules || {}

  // TODO: may need to sort rules in a specific order
  Object.keys(eslintRules)
    .filter(function (rule) {
      return ruleNames.indexOf(rule) > -1
    })
    .forEach(function (rule) {
      var ruleValue = eslintRules[rule]
      var ruleArgs = !Array.isArray(ruleValue) ? [ruleValue] : ruleValue

      var ruleConverter = conversionRules[rule]

      output = _.merge(output, ruleConverter.apply(null, ruleArgs))
    })
  return output
}
