/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let arr = []
  arr.push(s.split(''))
  return arr
}

console.log(partition('aab'))

var isPalindrome = function(s) {
//   s = s.replace(/([\W]+)/g, '').toLowerCase()

  const length = s.length

  let boolean = true

  for (let i = 0; i < length / 2; i++) {
    if (s[i] !== s[length - 1 - i]) {
      boolean = false
      break
    }
  }
  return boolean
}
