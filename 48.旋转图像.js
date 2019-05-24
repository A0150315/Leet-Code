/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let list = new Array()

  for (let i = 0; i < matrix.length; i++) {
    const newList = new Array()
    for (let j = matrix.length - 1; j >= 0; j--) {
      newList.push(matrix[j][i])
    }
    list.push(newList)
  }

  list.forEach((nums, i) => {
    nums.forEach((num, j) => {
      matrix[i][j] = num
    })
  })
}
