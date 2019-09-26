/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  for (let i = 0; i < tokens.length; i++) {
    if (/^[\*|\/|\+|\-]{1}$/.test(tokens[i])) {
      i -= 2
      tokens.splice(i, 3, calc(+tokens[i], +tokens[i + 1], tokens[i + 2]))
    }
  }
  return tokens[0]
}

function calc(num1, num2, op) {
  switch (op) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return parseInt(num1 / num2)
  }
}
