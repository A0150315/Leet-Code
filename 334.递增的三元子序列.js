/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  const len = nums.length
  if (len < 3) {
    return false
  }
  let n1 = Number.POSITIVE_INFINITY
  let n2 = Number.POSITIVE_INFINITY

  for (let i = 0; i < len; i++) {
    const n = nums[i]
    if (n <= n1) {
      n1 = n
    } else if (n <= n2) {
      n2 = n
    } else {
      return true
    }
  }

  return false
}
