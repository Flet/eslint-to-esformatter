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

test('indent rules', function (t) {
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
    rules: {'indent': 0},
    output: {},
    formatted: code
  },
  {
    msg: 'rule on warning, default 4 spaces',
    rules: {'indent': 1},
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
    msg: 'rule on, default 4 spaces',
    rules: {'indent': 2},
    output: { indent: { value: '    ' }},
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
    msg: 'rule on, tab',
    rules: {'indent': [2, 'tab']},
    output: { indent: { value: '\t' }},
    /*eslint no-mixed-spaces-and-tabs: 0*/
    formatted: "switch ('blah') {\n" +
      "\tcase 'foo':\n" +
      "\t\tconsole.log('hello')\n" +
      '\tdefault:\n' +
      "\t\tconsole.log('nope')\n}"
  },
  {
    msg: 'rule on, 10 spaces',
    rules: {'indent': [2, 10]},
    output: { indent: { value: '          ' }},
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
    msg: 'rule on, 2 spaces, indentSwitchCase false',
    rules: {'indent': [2, 2, {indentSwitchCase: false}]},
    output: { indent: { value: '  ' }},
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
    msg: 'rule on, 2 spaces, indentSwitchCase true <<NOT RESPECTED>>',
    rules: {'indent': [2, 2, {indentSwitchCase: true}]},
    output: { indent: { value: '  ', SwitchCase: 1}},
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
