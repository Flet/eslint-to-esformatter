var testRule = require('./lib/test-rule');

var multiline = require('multiline');

testRule('comma-spacing', [
  {
    msg: 'rule off',
    rules: { 'comma-spacing': 0 },
    input: multiline.stripIndent(function () {/*
      var foo = 1 ,
        bar = 2;
      var arr = [1 , 2];
      var obj = {
        "foo": "bar" ,
        "baz": "qur"
      };
      foo(a ,b);
      new Foo(a ,b);
      function foo(a ,b) {
      }
    */}),
    formatted: multiline.stripIndent(function () {/*
      var foo = 1 ,
        bar = 2;
      var arr = [1, 2];
      var obj = {
        "foo": "bar",
        "baz": "qur"
      };
      foo(a, b);
      new Foo(a, b);
      function foo(a, b) {
      }
    */})
  },
  {
    msg: 'rule on, default before false, after true',
    rules: { 'comma-spacing': [2, {}] },
    input: multiline.stripIndent(function () {/*
      var foo = 1 ,bar = 2;
      var arr = [1 , 2];
      var obj = {"foo": "bar" ,"baz": "qur"};
      foo(a ,b);
      new Foo(a ,b);
      function foo(a ,b) {
      }
    */}),
    formatted: multiline.stripIndent(function () {/*
      var foo = 1,
        bar = 2;
      var arr = [1, 2];
      var obj = {
        "foo": "bar",
        "baz": "qur"
      };
      foo(a, b);
      new Foo(a, b);
      function foo(a, b) {
      }
    */})
  },
  {
    msg: 'rule on, before true, after unspecified',
    rules: { 'comma-spacing': [2, { before: true }]},
    input: multiline.stripIndent(function () {/*
      var foo = 1,
        bar = 2;
      var arr = [1, 2];
      var obj = {
        "foo": "bar",
        "baz": "qur"
      };
      foo(a, b);
      new Foo(a, b);
      function foo(a, b) {
      }
    */}),
    // todo: Is `bar = 2 ;` desired (assuming no)? Does it cause issues when linting?
    // No option in esformatter to turn this off.
    // Related: `whiteSpace.after.VariableValue`
    formatted: multiline.stripIndent(function () {/*
      var foo = 1 ,
        bar = 2 ;
      var arr = [1 , 2] ;
      var obj = {
        "foo": "bar" ,
        "baz": "qur"
      } ;
      foo(a , b);
      new Foo(a , b);
      function foo(a , b) {
      }
    */})
  }
]);
