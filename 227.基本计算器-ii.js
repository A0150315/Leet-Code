/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s/g, '')
  while (/\*|\//.test(s)) {
    s = s.replace(/(\d+)(\*|\/)(\d+)/, operatorHandler)
  }
  while (/\+|\-/.test(s) && /\d+[\+\-]/.test(s)) {
    s = s.replace(/([\-]*\d+)(\+|\-)(\d+)/, operatorHandler)
  }
  return s
}

const operatorHandler = (_, firstNum, operator, secondNum) => {
  switch (operator) {
    case '/':
      return parseInt(+firstNum / +secondNum)
    case '*':
      return +firstNum * +secondNum
    case '+':
      return +firstNum + +secondNum
    case '-':
      return +firstNum - +secondNum
  }
}
