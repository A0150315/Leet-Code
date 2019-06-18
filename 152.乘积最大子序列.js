/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums || nums.length == 0) return 0 //参数有效性

  let max = nums[nums.length - 1] //节点状态最大值 这里不用数组，只需要保存上一个节点的最大值和最小值
  let min = nums[nums.length - 1] //节点状态最小值
  let result = nums[nums.length - 1] //最大节点值

  for (let i = nums.length - 2; i >= 0; i--) {
    //直接从倒数第2个元素开始向前遍历
    if (nums[i] < 0) {
      //判断当前元素正负 因为负数计算最大值要乘以上一个节点的最小值才行
      let temp = max
      max = nums[i] > nums[i] * min ? nums[i] : nums[i] * min
      min = nums[i] < nums[i] * temp ? nums[i] : nums[i] * temp
    } else {
      max = nums[i] > nums[i] * max ? nums[i] : nums[i] * max
      min = nums[i] < nums[i] * min ? nums[i] : nums[i] * min
    }
    if (result < max) result = max //记录目前为止的最大值
  }
  return result
}
