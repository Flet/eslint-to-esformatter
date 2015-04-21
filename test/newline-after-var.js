var testRule = require('./lib/test-rule');

var multiline = require('multiline');

testRule('newline-after-var', [
  {
    msg: 'rule off',
    rules: { 'newline-after-var': 0 },
    input: multiline.stripIndent(function () {/*
      var greet = "hello,",
        name = "world";
      console.log(greet, name);
    */}),
    formatted: multiline.stripIndent(function () {/*
      var greet = "hello,",
        name = "world";
      console.log(greet, name);
    */})
  },
  {
    msg: 'rule on, default "always"',
    rules: { 'newline-after-var': [2] },
    input: multiline.stripIndent(function () {/*
      var greet = "hello,",
        name = "world";
      console.log(greet, name);
    */}),
    formatted: multiline.stripIndent(function () {/*
      var greet = "hello,",
        name = "world";

      console.log(greet, name);
    */})
  },
  {
    msg: 'rule on, "never"',
    rules: { 'newline-after-var': [2, 'never'] },
    input: multiline.stripIndent(function () {/*
      var greet = "hello,",
        name = "world";

      console.log(greet, name);
    */}),
    formatted: multiline.stripIndent(function () {/*
      var greet = "hello,",
        name = "world";
      console.log(greet, name);
    */})
  }
]);
