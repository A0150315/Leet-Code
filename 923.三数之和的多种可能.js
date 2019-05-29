/*
 * @lc app=leetcode.cn id=923 lang=javascript
 *
 * [923] 三数之和的多种可能
 */
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
  const M = Math.pow(10, 9) + 7
  // 复杂度O(n^2)
  A = A.sort((a, b) => a - b)
  let res = 0
  for (let k = 0; k + 2 < A.length; k++) {
    // 第一个数为A[k]
    let i = k + 1,
      j = A.length - 1
    while (i < j) {
      if (A[i] + A[j] > target - A[k]) {
        j--
      } else if (A[i] + A[j] == target - A[k]) {
        if (A[i] == A[j]) {
          // C(j-i+1,2)
          res = (res + ((j - i + 1) * (j - i)) / 2) % M
          break
        } else {
          let ti = i,
            tj = j
          while (ti + 1 < tj && A[ti] == A[ti + 1]) ti++
          while (ti < tj - 1 && A[tj] == A[tj - 1]) tj--
          res = (res + (ti - i + 1) * (j - tj + 1)) % M
          i = ti
          i++
          j = tj
          tj--
        }
      } else {
        i++
      }
    }
  }
  return res
}
