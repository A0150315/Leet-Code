/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let sum = 0
  for (const [index, item] of nums.entries()) {
    if (nums.indexOf(item) === index) sum += item
    else sum -= item
  }
  return sum
}
