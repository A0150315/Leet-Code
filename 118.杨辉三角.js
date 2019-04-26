/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const triangle = new Array(numRows).fill(null)

  for (let index in triangle) {
    triangle[index] = []
    for (let i = 0; i <= index; i++) {
      triangle[index][i] =
        index < 2 || i === 0 || i == index
          ? 1
          : triangle[index - 1][i - 1] + triangle[index - 1][i]
    }
  }
  return triangle
}
