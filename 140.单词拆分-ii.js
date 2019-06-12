/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  let arr = []
  if (!canWordBreak(s, wordDict)) {
    return arr
  }
  for (let i = 1; i <= s.length; i++) {
    const position = wordDict.indexOf(s.substr(0, i))
    if (position > -1) {
      if (i === s.length) {
        arr.push(s)
        break
      }

      const list = wordBreak(s.substr(i, s.length), wordDict)

      list.forEach(res => {
        const resultArr = s.substr(0, i) + ' ' + res
        arr.push(resultArr)
      })
    }
  }
  return arr
}

function canWordBreak(s, wordDict) {
  let diction = new Array(s.length + 1)
  diction[0] = true
  for (let i = 0; i < s.length; i++) {
    let son_str = s.substring(0, i + 1) //长度从1到str.lenth一遍一遍来
    if (wordDict.indexOf(son_str) != -1) {
      diction[i + 1] = true
      continue
    }
    for (let j = 0; j < son_str.length; j++) {
      let right_son_str = son_str.substring(j + 1, i + 1) //长度从1到str.lenth一遍一遍来
      if (diction[j + 1] && wordDict.indexOf(right_son_str) != -1) {
        diction[i + 1] = true
      }
    }
  }

  if (null == diction[s.length]) {
    return false
  }
  return diction[s.length]
}
