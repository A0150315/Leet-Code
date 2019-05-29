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

// 三种情况：
// a==b==c C(n,3)
// a==b!=c C(n,2)*C(m)
// a<b and b<c C(a)*C(b)*C(c)

var threeSumMulti = function(A, target) {
  let store = []
  let i
  let result = 0
  for (i = 0; i <= target; i++) {
    store[i] = 0
  }
  for (i = A.length - 1; i >= 0; i--) {
    if (A[i] <= target) store[A[i]]++
  }

  //store 下标为数字，值为数字对应的数量

  for (i = 0; i < target / 3; i++) {
    for (let j = i + 1; j <= target / 2; j++) {
      if (target - i - j > j) {
        result = result + store[i] * store[j] * store[target - i - j]
        continue
      }
      if (target - i - j == j)
        result = result + ((store[j] * (store[j] - 1)) / 2) * store[i]
    }
    result = result + ((store[i] * (store[i] - 1)) / 2) * store[target - 2 * i]
  }
  if (target % 3 === 0) {
    return (
      (result +
        (store[target / 3] *
          (store[target / 3] - 1) *
          (store[target / 3] - 2)) /
          6) %
      (Math.pow(10, 9) + 7)
    )
  }
  return result % (Math.pow(10, 9) + 7)
}

threeSumMulti([1, 1, 2, 2, 2, 2], 5)


// python 
// from collections import Counter
// class Solution:
//     def threeSumMulti(self, A, target):
//         """
//         :type A: List[int]
//         :type target: int
//         :rtype: int
//         """
//         c = Counter(A)
//         result = 0
//         for i, x in c.items():
//             for j, y in c.items():
//                 k = target - i - j
//                 if k not in c:
//                     continue
//                 if i == j == k: 
//                     result += x * (x - 1) * (x - 2) // 6
//                 elif i == j != k: 
//                     result += x * (x - 1) // 2 * c[k]
//                 elif i < j and j < k: 
//                     result += x * y * c[k]

//         return result % (10**9 + 7)