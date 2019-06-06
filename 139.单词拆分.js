/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (!s) return true
  return wordDict.some(word => {
    const index = s.indexOf(word)
    if (index !== -1) {
      return (
        wordBreak(s.substring(0, index), wordDict) &&
        wordBreak(s.substring(index + word.length, s.length), wordDict)
      )
    }
  })
}
