/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let res = []

  for (let i = 0, t = 1; i < nums.length; i++) {
    res[i] = t
    t *= nums[i]
  }

  for (let i = nums.length - 1, t = 1; i >= 0; i--) {
    res[i] *= t
    t *= nums[i]
  }
  return res
}
productExceptSelf([1, 2, 3, 4])
