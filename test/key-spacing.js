var convert = require('../')
var multiline = require('multiline')
var esformatter = require('esformatter')

var test = require('tape')

var code = multiline(function () {/*
var x = {
  "hello"    :    "world"
}
*/})

test('key-spacing rules', function (t) {
  t.plan(transforms.length * 2)

  transforms.forEach(function (obj) {
    var opts = convert({rules: obj.rules})
    t.deepEqual(opts, obj.output, obj.msg)
    t.equal(esformatter.format(code, opts), obj.formatted, 'format using: ' + obj.msg)
  })
})

var transforms = [
  {
    msg: 'rule off',
    rules: {'key-spacing': 0},
    output: { whiteSpace: { after: { PropertyName: -1 }, before: { PropertyValue: -1 }, value: ' ' } },
    formatted: code
  },
  {
    msg: 'rule on warning, default',
    rules: {'key-spacing': 1},
    output: { whiteSpace: { after: { PropertyName: 0 }, before: { PropertyValue: 1 }, value: ' ' } },
    formatted: multiline.stripIndent(function () {/*
      var x = {
        "hello": "world"
      }
    */})
  },
  {
    msg: 'rule on, default',
    rules: {'key-spacing': 2},
    output: { whiteSpace: { after: { PropertyName: 0 }, before: { PropertyValue: 1 }, value: ' ' } },
    formatted: multiline.stripIndent(function () {/*
      var x = {
        "hello": "world"
      }
    */})
  },
  {
    msg: 'rule on, beforeColon true, afterColon false',
    rules: {'key-spacing': [2, {beforeColon: true, afterColon: false}]},
    output: { whiteSpace: { after: { PropertyName: 1 }, before: { PropertyValue: 0 }, value: ' ' } },
    formatted: multiline.stripIndent(function () {/*
      var x = {
        "hello" :"world"
      }
    */})
  },
  {
    msg: 'rule on, beforeColon true, afteColon unspecified',
    rules: {'key-spacing': [2, {beforeColon: true}]},
    output: { whiteSpace: { after: { PropertyName: 1 }, before: { PropertyValue: -1 }, value: ' ' } },
    formatted: multiline.stripIndent(function () {/*
      var x = {
        "hello" :    "world"
      }
    */})
  },
  {
    msg: 'rule on, beforeColon false, afteColon unspecified',
    rules: {'key-spacing': [2, {beforeColon: false}]},
    output: { whiteSpace: { after: { PropertyName: 0 }, before: { PropertyValue: -1 }, value: ' ' } },
    formatted: multiline.stripIndent(function () {/*
      var x = {
        "hello":    "world"
      }
    */})
  },
  {
    msg: 'rule on, afterColon true, beforeColon unspecified',
    rules: {'key-spacing': [2, {afterColon: true}]},
    output: { whiteSpace: { after: { PropertyName: -1 }, before: { PropertyValue: 1 }, value: ' ' } },
    formatted: multiline.stripIndent(function () {/*
      var x = {
        "hello"    : "world"
      }
    */})
  }
]
