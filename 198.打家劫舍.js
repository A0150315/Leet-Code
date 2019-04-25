/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 这是别人的答案
var rob = function(nums) {
  if (!nums.length) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  var pre = nums[0]
  var curr = Math.max(nums[0], nums[1])
  var temp
  for (const [index, val] of nums.slice(2).entries()) {
    temp = curr
    curr = Math.max(val + pre, curr)
    pre = temp
  }
  return curr
}
