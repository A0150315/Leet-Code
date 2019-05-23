/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let correct = false
  correct = board.every(nums => {
    let numsMap = {}
    return nums.every(num => {
      if (numsMap[num] && num !== '.') return false
      numsMap[num] = true
      return true
    })
  })
  if (correct)
    for (let i = 0; i < 9; i++) {
      let numsMap = {}
      correct = board.every(nums => {
        if (numsMap[nums[i]] && nums[i] !== '.') return false
        numsMap[nums[i]] = true
        return true
      })
      if (!correct) break
    }

  if (correct)
    for (let i = 0; i < 9; i++) {
      let numsMap = {}
      for (let j = Math.trunc(i / 3) * 3; j < Math.trunc(i / 3) * 3 + 3; j++) {
        for (
          let k = (i - Math.trunc(i / 3) * 3) * 3;
          k < (i - Math.trunc(i / 3) * 3) * 3 + 3;
          k++
        ) {
          if (numsMap[board[j][k]] && board[j][k] !== '.') {
            correct = false
            break
          }
          numsMap[board[j][k]] = true
        }
        if (!correct) break
      }
      if (!correct) break
    }

  return correct
}
