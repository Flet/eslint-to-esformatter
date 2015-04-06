module.exports = function (active, arg, options) {
  var output = {}

  if (active < 1) return output

  arg = arg ? arg : '1tbs' // default 1tbs
  output.lineBreak = { value: '\n', before: {}, after: {} }

  if (arg === '1tbs') {
    output.lineBreak.before = {
      'ArrowFunctionExpressionOpeningBrace': 0,
      'ArrowFunctionExpressionClosingBrace': '>=1',
      'ClassDeclarationOpeningBrace': 0,
      'ClassDeclarationClosingBrace': '>=1',
      'CatchOpeningBrace': 0,
      'CatchClosingBrace': '>=1',
      'DoWhileStatementOpeningBrace': 0,
      'DoWhileStatementClosingBrace': '>=1',
      'FinallyOpeningBrace': 0,
      'FinallyClosingBrace': '>=1',
      'ForInStatementOpeningBrace': 0,
      'ForInStatementClosingBrace': '>=1',
      'ForStatementOpeningBrace': 0,
      'ForStatementClosingBrace': '>=1',
      'FunctionExpressionOpeningBrace': 0,
      'FunctionExpressionClosingBrace': '>=1',
      'FunctionDeclarationOpeningBrace': 0,
      'FunctionDeclarationClosingBrace': '>=1',
      'IfStatementOpeningBrace': 0,
      'IfStatementClosingBrace': '>=1',

      'ElseIfStatementOpeningBrace': 0,
      'ElseIfStatementClosingBrace': '>=1',

      'ElseStatementOpeningBrace': 0,
      'ElseStatementClosingBrace': '>=1',

      'ObjectExpressionClosingBrace': '>=1',

      'SwitchOpeningBrace': 0,
      'SwitchClosingBrace': '>=1',

      'TryOpeningBrace': 0,
      'TryClosingBrace': '>=1',
      'WhileStatementOpeningBrace': 0,
      'WhileStatementClosingBrace': '>=1'
    }

  // stuff
  } else if (arg === 'stroustrup') {
    // more
  } else {
    return output
  }

  return output
}
