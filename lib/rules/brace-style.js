var objectPath = require('object-path');
var warn = require('debug')('e2e:brace-style:warn');

var braceStyles = {
  '1tbs': function (output) {
    [
      'ArrowFunctionExpression',
      'ClassDeclaration',
      'Catch',
      'DoWhileStatement',
      'Finally',
      'ForInStatement',
      'ForStatement',
      'FunctionExpression',
      'FunctionDeclaration',
      'IfStatement',
      'ElseIfStatement',
      'ElseStatement',
      'Switch',
      'Try',
      'WhileStatement'
    ].forEach(function (type) {
      objectPath.set(output, ['lineBreak.before', type + 'OpeningBrace'], 0);
      objectPath.set(output, ['lineBreak.before', type + 'ClosingBrace'], '>=1');
    });
  },
  'stroustrup': function (output) {
    this['1tbs'](output);

    [
      'ElseIfStatement',
      'ElseStatement',
      'CatchKeyword' // todo: not working in esformatter
    ].forEach(function (type) {
      objectPath.set(output, ['lineBreak.before', type], 1);
    });
  }
};

module.exports = function (active, arg, options) {
  var output = {};

  if (active < 1) return output;
  arg = arg ? arg : '1tbs';

  objectPath.set(output, 'lineBreak.value', '\n');

  (braceStyles[arg] || function () {
    warn('`%s` brace style not available.', arg);
  }).call(braceStyles, output);

  return output;
};
