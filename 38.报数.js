/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n, i = 1, k = '1') {
  if (n > i) {
    let newStr = ''
    let strMap = new Map()
    for (let j = 0; j < k.length; j++) {
      if (strMap.has(k[j]) || strMap.get(k[j]) === 0) {
        strMap.set(k[j], strMap.get(k[j]) + 1)
      } else {
        strMap.set(k[j], 1)
        if (j > 0) {
          newStr += strMap.get(k[j - 1]) + k[j - 1]
          strMap.delete(k[j - 1])
        }
      }
    }

    for (var key of strMap.keys()) {
      if (strMap.get(key) === 0) continue
      newStr += strMap.get(key) + key
    }
    return countAndSay(n, ++i, newStr)
  } else {
    return k
  }
}
