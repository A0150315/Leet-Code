/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const length = nums.length
  if (!length) return null
  let leftIndex = parseInt(length / 2)

  const newNode = TreeNode(nums[leftIndex])

  newNode.left = sortedArrayToBST(nums.slice(0, leftIndex))
  newNode.right = sortedArrayToBST(nums.slice(leftIndex + 1, length))

  return newNode
}

function TreeNode(val) {
  const Obj = {}
  Obj.val = val
  Obj.left = Obj.right = null
  return Obj
}
