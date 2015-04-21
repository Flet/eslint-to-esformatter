var testRule = require('./lib/test-rule');

var multiline = require('multiline');

testRule('key-spacing', [
  {
    msg: 'rule off',
    rules: { 'key-spacing': 0 },
    input: multiline.stripIndent(function () {/*
      var obj = {
        foo : 42
      };
    */}),
    formatted: multiline.stripIndent(function () {/*
      var obj = {
        foo: 42
      };
    */})
  },
  {
    msg: 'rule on, default beforeColon false, afterColon true',
    rules: { 'key-spacing': [2] },
    input: multiline.stripIndent(function () {/*
      var obj = { foo : 42 };
    */}),
    formatted: multiline.stripIndent(function () {/*
      var obj = {
        foo: 42
      };
    */})
  },
  {
    msg: 'rule on, beforeColon true, afterColon false',
    rules: { 'key-spacing': [2, { beforeColon: true, afterColon: false }] },
    input: multiline.stripIndent(function () {/*
      var obj = { foo: 42 };
    */}),
    formatted: multiline.stripIndent(function () {/*
      var obj = {
        foo :42
      };
    */})
  },
  {
    msg: 'rule on, beforeColon true, afteColon unspecified',
    rules: { 'key-spacing': [2, { beforeColon: true }] },
    input: multiline.stripIndent(function () {/*
      var obj = { foo: 42 };
    */}),
    formatted: multiline.stripIndent(function () {/*
      var obj = {
        foo : 42
      };
    */})
  },
  {
    msg: 'rule on, beforeColon false, afteColon unspecified',
    rules: { 'key-spacing': [2, { beforeColon: false }] },
    input: multiline.stripIndent(function () {/*
      var obj = { foo : 42 };
    */}),
    formatted: multiline.stripIndent(function () {/*
      var obj = {
        foo: 42
      };
    */})
  },
  {
    msg: 'rule on, afterColon true, beforeColon unspecified',
    rules: { 'key-spacing': [2, { afterColon: true }]},
    input: multiline.stripIndent(function () {/*
      var obj = { foo : 42 };
    */}),
    formatted: multiline.stripIndent(function () {/*
      var obj = {
        foo: 42
      };
    */})
  }
]);
