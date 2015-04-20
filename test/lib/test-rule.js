var convert = require('./../../');
var esformatter = require('esformatter');

var test = require('tape');

module.exports = function (name, transforms, options) {
  if (options && options.skip) return;
  test(name, function (t) {
    t.plan(transforms.length);

    transforms.forEach(function (transform) {
      var opts = convert({
        rules: transform.rules
      });

      t.equal(esformatter.format(transform.input, opts), transform.formatted || transform.input, 'format using: ' + transform.msg);
    });
  });
};
