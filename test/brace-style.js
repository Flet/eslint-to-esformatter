var testRule = require('./lib/test-rule');

var multiline = require('multiline');

testRule('brace-style', [
  {
    msg: 'rule off',
    rules: { 'brace-style': 0 },
    input: multiline.stripIndent(function () {/*
      function foo() {
        return true;
      }
    */})
    // formatted: input
  },
  {
    msg: 'rule on, default 1tbs',
    rules: { 'brace-style': [2] },
    input: multiline.stripIndent(function () {/*
      function foo()
      {
        return true;
      }

      if (foo)
      {
        bar();
      }

      try
      {
        somethingRisky();
      } catch (e)
      {
        handleError();
      }

      if (foo) {
        bar();
      }
      else {
        baz();
      }
    */}),
    formatted: multiline.stripIndent(function () {/*
      function foo() {
        return true;
      }

      if (foo) {
        bar();
      }

      try {
        somethingRisky();
      } catch (e) {
        handleError();
      }

      if (foo) {
        bar();
      } else {
        baz();
      }
    */})
  }
  // todo: re-add test when https://github.com/millermedeiros/esformatter/issues/312 is fixed
  // {
  //   msg: 'rule on, stroustrup',
  //   rules: { 'brace-style': [2, 'stroustrup'] },
  //   input: multiline.stripIndent(function () {/*
  //     function foo()
  //     {
  //       return true;
  //     }
  //
  //     if (foo)
  //     {
  //       bar();
  //     }
  //
  //     try
  //     {
  //       somethingRisky();
  //     } catch (e)
  //     {
  //       handleError();
  //     }
  //
  //     if (foo) {
  //       bar();
  //     }
  //     else {
  //       baz();
  //     }
  //   */}),
  //   formatted: multiline.stripIndent(function () {/*
  //     function foo() {
  //       return true;
  //     }
  //
  //     if (foo) {
  //       bar();
  //     }
  //
  //     try {
  //       somethingRisky();
  //     }
  //     catch (e) {
  //       handleError();
  //     }
  //
  //     if (foo) {
  //       bar();
  //     }
  //     else {
  //       baz();
  //     }
  //   */})
  // }
]);
