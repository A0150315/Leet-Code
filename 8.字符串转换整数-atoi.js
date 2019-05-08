/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const firstStrMap = str.match(/[\S]/)
  if (firstStrMap) {
    if (/[^\d-+]/.test(firstStrMap[0])) return 0
    const min = Math.pow(-2, 31)
    const max = Math.pow(2, 31) - 1
    str = str.match(/[-+\d.]+/)[0]
    if (min > +str) return min
    if (max < +str) return max
    return parseInt(str) || 0
  }
  return 0
}
