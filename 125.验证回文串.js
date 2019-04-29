/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/([\W]+)/g, '').toLowerCase()

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
