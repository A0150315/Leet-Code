/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let arr = []
  let shorterList
  let longerList
  if (nums1.lenght < nums2.length) {
    shorterList = nums1
    longerList = nums2
  } else {
    shorterList = nums2
    longerList = nums1
  }
  shorterList.forEach(e => {
    let index = longerList.indexOf(e)
    if (index > -1) {
      arr.push(longerList.splice(index, 1)[0])
    }
  })
  return arr
}
