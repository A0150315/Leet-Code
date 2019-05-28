/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = 0
  let n = 0
  let map = new Map()
  while (matrix[m] && (matrix[m][n] || matrix[m][n] === 0)) {
    if (map.has('' + m + n)) {
      return false
    }
    const proofreading = matrix[m][n]
    map.set('' + m + n)
    if (proofreading === target) return true
    if (proofreading < target) {
      if (m === matrix.length - 1) {
        n++
        continue
      }
      if (n === matrix[m].length - 1) {
        m++
        continue
      }
      if (matrix[m][n + 1] > matrix[m + 1][n]) {
        m++
        if (map.has('' + m + n)) {
          n++
          m--
        }
        while (map.has('' + m + n)) {
          n++
        }
      } else {
        n++
        if (map.has('' + m + n)) {
          m++
          n--
        }
        while (map.has('' + m + n)) {
          m++
        }
      }
    } else {
      if (m === 0) {
        m++
        continue
      }
      if (n === 0) {
        n++
        continue
      }
      if (matrix[m][n - 1] > matrix[m - 1][n]) {
        n--
        if (map.has('' + m + n)) {
          n++
          m--
        }
        while (map.has('' + m + n)) {
          m--
        }
      } else {
        m--
        if (map.has('' + m + n)) {
          m++
          n--
        }
        while (map.has('' + m + n)) {
          n--
        }
      }
    }
  }
  return false
}
