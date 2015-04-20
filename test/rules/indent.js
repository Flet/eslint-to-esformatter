var testRule = require('./../test-rule');

var multiline = require('multiline');

testRule('indent', [
  {
    msg: 'rule on, 2 spaces',
    rules: { 'indent': [2, 2] },
    input: multiline.stripIndent(function () {/*
      if (a) {
         b=c;
      function fn(d) {
             e=f;
      }
      }
    */}),
    formatted: multiline.stripIndent(function () {/*
      if (a) {
        b = c;
        function fn(d) {
          e = f;
        }
      }
    */})
  },
  {
    msg: 'rule on, default 4 spaces',
    rules: { 'indent': [2] },
    input: multiline.stripIndent(function () {/*
      if (a) {
         b=c;
      function fn(d) {
             e=f;
      }
      }
    */}),
    formatted: multiline.stripIndent(function () {/*
      if (a) {
          b = c;
          function fn(d) {
              e = f;
          }
      }
    */})
  },
  {
    msg: 'rule on, 10 spaces',
    rules: {'indent': [2, 10]},
    input: multiline.stripIndent(function () {/*
      if (a) {
         b=c;
      function fn(d) {
             e=f;
      }
      }
    */}),
    formatted: multiline.stripIndent(function () {/*
      if (a) {
                b = c;
                function fn(d) {
                          e = f;
                }
      }
    */})
  },
  {
    msg: 'rule on, tab',
    rules: { 'indent': [2, 'tab'] },
    input: multiline.stripIndent(function () {/*
      if (a) {
           b=c;
      function fn(d) {
                 e=f;
       }
      }
    */}),
    formatted: '' +
      'if (a) {\n' +
      '\tb = c;\n' +
      '\tfunction fn(d) {\n'+
      '\t\te = f;\n' +
      '\t}\n' +
      '}'
  },
  {
    msg: 'rule on, 2 spaces, indentSwitchCase false',
    rules: { 'indent': [2, 2, { indentSwitchCase: false }] },
    input: multiline.stripIndent(function () {/*
      switch ('blah') {
        case 'foo':
          console.log('hello');
        default:
          console.log('nope');
      }
    */}),
    formatted: multiline.stripIndent(function () {/*
      switch ('blah') {
        case 'foo':
        console.log('hello');
        default:
        console.log('nope');
      }
    */})
  }
]);
