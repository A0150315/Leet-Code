/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  if (N <= 2 || K === 1) return N
  const aux = new Array(K + 1).fill(1)
  aux[0] = 0
  let m = 1
  while (aux[K] < N) {
    m++
    for (let e = K; e > 0; e--) {
      aux[e] = aux[e] + aux[e - 1] + 1
    }
  }
  return m
}
