/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const list = s.split('')
  let sum = 0
  let missIndex = -1
  for (let [index, item] of list.entries()) {
    if (index === missIndex) continue
    switch (item) {
      case 'I':
        if (list[index + 1] === 'V') {
          missIndex = index + 1
          sum += 4
        } else if (list[index + 1] === 'X') {
          missIndex = index + 1
          sum += 9
        } else {
          sum += 1
        }
        break
      case 'X':
        if (list[index + 1] === 'L') {
          missIndex = index + 1
          sum += 40
        } else if (list[index + 1] === 'C') {
          missIndex = index + 1
          sum += 90
        } else {
          sum += 10
        }
        break
      case 'C':
        if (list[index + 1] === 'D') {
          missIndex = index + 1
          sum += 400
        } else if (list[index + 1] === 'M') {
          missIndex = index + 1
          sum += 900
        } else {
          sum += 100
        }
        break
      case 'V':
        sum += 5
        break
      case 'L':
        sum += 50
        break
      case 'D':
        sum += 500
        break
      case 'M':
        sum += 1000
        break
    }
  }
  return sum
}
