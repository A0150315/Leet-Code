/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (51.80%)
 * Total Accepted:    26.5K
 * Total Submissions: 51.2K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
 *
 * 示例 1:
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 * 说明:
 * 你可以假设字符串只包含小写字母。
 *
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sLength = s.length
  const tLength = t.length
  if (sLength !== tLength) return false
  const sArray = s.split('')
  const tArray = t.split('')
  for (let i of sArray) {
    const alphaIndex = tArray.indexOf(i)
    if (alphaIndex < 0) return false
    tArray.splice(alphaIndex, 1)
  }
  if (tArray.length === 0) return true
  return false
}

// console.log(isAnagram('rat', 'car'))
