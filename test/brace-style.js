var convert = require('../')
var multiline = require('multiline')
var esformatter = require('esformatter')

var test = require('tape')

var code = multiline(function () {/*
switch ('blah') {
  case 'foo':
    console.log('hello')
  default:
    console.log('nope')
}
*/})

test('brace-style rules', function (t) {
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
    rules: {'brace-style': 0},
    output: {},
    formatted: code
  },
  {
    msg: 'rule on warning, default 1tbs',
    rules: {'brace-style': 1},
    output: { indent: { value: '    '}},
    formatted: multiline.stripIndent(function () {/*
      switch ('blah') {
          case 'foo':
              console.log('hello')
          default:
              console.log('nope')
      }
    */})
  },
  {
    msg: 'rule on, default 1tbs',
    rules: {'brace-style': 2},
    output: { indent: { value: '    ' }},
    formatted: multiline.stripIndent(function () {/*
      switch ('blah') {
          case 'foo':
              console.log('hello')
          default:
              console.log('nope')
      }
    */})
  }
]
