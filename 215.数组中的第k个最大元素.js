/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }
  return nums[k - 1]
}
