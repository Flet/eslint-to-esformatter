var testRule = require('./lib/test-rule');

var multiline = require('multiline');

testRule('eol-last', [
  {
    msg: 'rule off',
    rules: { 'eol-last': 0 },
    input: multiline.stripIndent(function () {/*
      function doSmth() {

      }
    */}),
    formatted: multiline.stripIndent(function () {/*
      function doSmth() {

      }
    */})
  },
  {
    msg: 'rule on',
    rules: { 'eol-last': 2 },
    input: multiline.stripIndent(function () {/*
      function doSmth() {

      }
    */}),
    formatted: multiline.stripIndent(function () {/*
      function doSmth() {

      }

    */})
  }
]);
