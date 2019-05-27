/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const MAP = new Map()
  let maxValue = 0
  let maxNum = 0
  nums.forEach(num => {
    value = MAP.get(num) + 1 || 1
    MAP.set(num, value)
    if (value > maxValue) {
      maxValue = value
      maxNum = num
    }
  })
  return  maxNum
}
