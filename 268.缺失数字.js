/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (nums.length === 1 && nums[0] === 0) return 1

  const sum = nums.reduce((a, b) => a + b)

  let midNums = 0

  nums.length % 2 === 0 && (midNums = nums.length / 2)

  const tempSum =
    (1 + nums.length - 1) * parseInt((nums.length - 1) / 2) + midNums

  const dis = sum - tempSum

  return dis === 0 ? Math.max(...nums) + 1 : Math.max(...nums) - dis
}
