/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zerosQulity = 0
  for (let i = 0; i < nums.length - zerosQulity; ) {
    let k = 0
    if (nums[i] === 0) {
      zerosQulity++
      for (let j = i + k + 1; j < nums.length - zerosQulity + 1; j++, k++) {
        if (nums[j] === 0) continue
        ;[nums[i + k], nums[j]] = [nums[j], nums[i + k]]
      }
    }
    if (nums[i] !== 0) i++
  }
  return nums
}

// console.log(moveZeroes([0, 1, 0, 3, 12]))
