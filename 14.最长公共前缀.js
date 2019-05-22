/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let sameStr = ''
  const _strs = strs.slice(1)
  for (const index in strs[0]) {
    if (_strs.length === 0) return strs[0]
    for (const _index in _strs) {
      if (strs[0][index] === _strs[_index][index]) {
        if (_index == _strs.length - 1) sameStr += strs[0][index]
      } else {
        return sameStr
      }
    }
  }
  return sameStr
}
