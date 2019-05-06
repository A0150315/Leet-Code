/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = []
  const length = s.length

  for (let i = 0; i < length; i++) {
    const num = transfer(s[i])
    if (num > 0) {
      arr.push(-1 * num)
    } else if (num < 0) {
      if (num === arr[arr.length - 1]) {
        arr.pop()
      } else {
        return false
      }
    }
  }

  return arr.length ? false : true
}

function transfer(s) {
  switch (s) {
    case '(':
      return 1
    case ')':
      return -1
    case '{':
      return 2
    case '}':
      return -2
    case '[':
      return 3
    case ']':
      return -3
    default:
      return 0
  }
}
