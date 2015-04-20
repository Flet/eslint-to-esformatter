var _ = require('lodash');
var debug = require('debug');

var transformers = require('./lib/rules');

var log = debug('e2e:log');
var warn = debug('e2e:warn');

module.exports = function (cfg) {
  log('conversion started...');

  var output = {};
  var eslintRules = cfg.rules || {};

  // TODO: may need to sort rules in a specific order
  Object.keys(transformers)
    .filter(function (rule) {
      var transformer = transformers[rule];

      if (!transformer || transformer.supported === false) {
        warn('%s is not currently supported.', rule);
        return false;
      }

      if (transformer.informative) {
        log('%s is informative.', rule);
        return false;
      }

      if (transformer.deprecated) {
        warn('%s is deprecated', rule);
        return false;
      }

      return true;
    })
    .forEach(function (rule) {
      var ruleValue = 0;
      if (eslintRules.hasOwnProperty(rule)) { ruleValue = eslintRules[rule]; }
      var ruleArgs = !Array.isArray(ruleValue) ? [ruleValue] : ruleValue;

      var transformer = transformers[rule];

      output = _.merge(output, transformer.apply(null, ruleArgs));
    });

  log('conversion finished!');

  return output;
};
