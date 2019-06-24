### 2019.6.24

#### 摩尔投票算法（结合 169. 求众数）

Boyer–Moore majority vote algorithm，它以1981年出版的Robert S. Boyer和J Strother Moore命名，并且是流式算法的典型例子。

转载自：如何理解摩尔投票算法？ - 喝七喜的回答 - 知乎
https://www.zhihu.com/question/49973163/answer/235921864

摩尔投票算法是基于这个事实：每次从序列里选择两个不相同的数字删除掉（或称为“抵消”），最后剩下一个数字或几个相同的数字，就是出现次数大于总数一半的那个。

输入：{1,2,1,3,1,1,2,1,5}

- 从第一个数字 1 开始，我们想要把它和一个不是 1 的数字一起从数组里抵消掉，但是目前我们只扫描了一个 1，所以暂时无法抵消它，把它加入到 array，array 变成了{1}，result 由于没有抵消任何元素所以还是原数组{1,2,1,3,1,1,2,1,5}。
- 然后继续扫描第二个数，是 2，我们可以把它和一个不是 2 的数字抵消掉了，因为我们之前扫描到一个 1，所以 array 变成了{},result 变成了{1,3,1,1,2,1,5}
- 继续扫描第三个数 1，无法抵消，于是 array 变成了{1},result 还是{1,3,1,1,2,1,5};
- 接下来扫描到 3,可以将 3 和 array 数组里面的 1 抵消,于是 array 变成了{},result 变成了{1,1,2,1,5}
- 接下来扫描到 1，此时 array 为空，所以无法抵消这个 1，array 变成了{1},result 还是{1,1,2,1,5}
- 接下来扫描到 1，此时虽然 array 不为空，但是 array 里也是 1，所以还是无法抵消，把它也加入这个 array,于是 array 变成了{1,1}（其实到这我们可以发现，array 里面只可能同时存在一种数，因为只有 array 为空或当前扫描到的数和 array 里的数字相同时才把这个数字放入 array）,result 还是{1,1,2,1,5}
- 接下来扫描到 2，把它和一个 1 抵消掉，至于抵消哪一个 1，无所谓，array 变成了{1},result 是{1,1,5}接下来扫描到 1，不能抵消，array 变成了{1,1}，result{1,1,5}
- 接下来扫描到 5，可以将 5 和一个 1 抵消，array 变成了{1},result 变成了{1}

至此扫描完成了数组里的所有数，result 里剩了 1，所以 1 就是大于一半的数组。

再回顾一下这个过程，其实就是删除（抵消）了（1，2），（1，3），（1，5）剩下了一个 1。

除去冗余关系：实际代码中没有 array，也没有 result，因为我们不需要。由于前面提到 array 里只可能同时存储一种数字，所以我们用 major 来表示当前 array 里存储的数，count 表示 array 的长度,即目前暂时无法删除的元素个数，最后扫描完所有的数字，array 和 result 变成一样了，都表示“最后还是无法删除的数字”。

### 2019.6.19

给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

**示例**：

```
输入: [1,2,3,4]
输出: [24,12,8,6]
```

**说明**: 请不要使用**除法**，且在 O(n) 时间复杂度内完成此题。

**进阶**：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）

> 我的答案 ❌

```js
// 没有思路
```

> 优秀答案

```js
var productExceptSelf = function(nums) {
  let res = []

  for (let i = 0, t = 1; i < nums.length; i++) {
    res[i] = t
    t *= nums[i]
  }

  for (let i = nums.length - 1, t = 1; i >= 0; i--) {
    res[i] *= t
    t *= nums[i]
  }
  return res
}
```

### 2019.6.19

给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

> 如果存在这样的 i, j, k, 且满足 0 ≤ i < j < k ≤ n-1，

> 使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。

**说明**：要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

**示例 1**：

```
输入: [1,2,3,4,5]
输出: true
```

**示例 2**：

```
输入: [5,4,3,2,1]
输出: false
```

> 我的答案 ❌

```js
。。。
```

> 优秀答案

```js
//只需遍历一遍列表，同时维护两个值： 最小值 和 次小值 。首先将两个值都定义为超大的数字，先判断最小值，因为最小值必须保持在次小值之前，再判断次小值，若在最小值和次小值之间，则更新次小值，若大于次小值，则满足条件。

//注： 会发现一个问题，若出现有一个位于次小值之后的值比最小值还小，那么更新后是否就违背了“次小值必须出现在最小值之后”。事实上，这并不影响最后的结果，因为若后面出现了大于次小值的数字，则与更新前的“最小值-次小值-当前值”构成三元子序列。这里更新最小值只是为了获得更小的“最小值-次小值”二元子序列而不放过可能的结果。

var increasingTriplet = function(nums) {
  const len = nums.length
  if (len < 3) {
    return false
  }
  let n1 = Number.POSITIVE_INFINITY
  let n2 = Number.POSITIVE_INFINITY

  for (let i = 0; i < len; i++) {
    const n = nums[i]
    if (n <= n1) {
      n1 = n
    } else if (n <= n2) {
      n2 = n
    } else {
      return true
    }
  }

  return false
}
```

### 2019.6.18

给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

**示例 1**：

```
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

**示例 2**：

```
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```

> 我的答案(超时)❌

```js
let max = nums[0]
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j <= nums.length; j++) {
    const sum = nums.slice(i, j).reduce((a, b) => a * b)
    if ((!max && max !== 0) || sum > max) max = sum
  }
}
return max
```

> 优秀答案

```js
// 或参考文件 152.js
var maxProduct = function(nums) {
  let max = -Infinity,
    imax = 1,
    imin = 1 // 保存最大和最小值
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < 0) {
      let tmp = imax
      imax = imin
      imin = tmp
    }
    imax = Math.max(imax * nums[i], nums[i])
    imin = Math.min(imin * nums[i], nums[i])

    max = Math.max(max, imax)
  }
  return max
}
```

### 2019.6.17

给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

**示例**：

```
输入:
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
```

**说明**:
你可以假设所有输入都由小写字母 a-z 组成。

**提示**:

- 你需要优化回溯算法以通过更大数据量的测试。你能否早点停止回溯？
- 如果当前单词不存在于所有单词的前缀中，则可以立即停止回溯。什么样的数据结构可以有效地执行这样的操作？散列表是否可行？为什么？ 前缀树如何？如果你想学习如何实现一个基本的前缀树，请先查看这个问题： 实现 Trie（前缀树）。

> 我的答案(真不会)

```js
```

> 优秀答案

```js
var findWords = function(board, words) {
  if (!board.length) {
    return []
  }
  const [R, C] = [board.length, board[0].length]
  const trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }
  const set = new Set()

  const dfs = (r, c, trieNode = trie) => {
    if (r < 0 || r >= R || c < 0 || c >= C || board[r][c] === null) {
      return
    }
    const ch = board[r][c]
    if (!trieNode.link.has(ch)) {
      return
    }
    trieNode = trieNode.link.get(ch)
    if (trieNode.word !== null) {
      set.add(trieNode.word)
    }
    board[r][c] = null
    dfs(r - 1, c, trieNode)
    dfs(r + 1, c, trieNode)
    dfs(r, c - 1, trieNode)
    dfs(r, c + 1, trieNode)
    board[r][c] = ch
  }
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      dfs(r, c)
    }
  }
  return [...set]
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.link = new Map()
  this.isEnd = false
  this.word = null
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this
  for (let i = 0; i < word.length; i++) {
    const ch = word[i]
    if (!node.link.has(ch)) {
      node.link.set(ch, new Trie())
    }
    node = node.link.get(ch)
  }
  node.word = word
  node.isEnd = true
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this
  for (let i = 0; i < word.length; i++) {
    const ch = word[i]
    if (!node.link.has(ch)) {
      return false
    }
    node = node.link.get(ch)
  }
  return node.isEnd
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this
  for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i]
    if (!node.link.has(ch)) {
      return false
    }
    node = node.link.get(ch)
  }
  return !!node
}
```

### 2019.6.13

实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

**示例**：

```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");
trie.search("app");     // 返回 true
```

**说明**:

- 你可以假设所有的输入都是由小写字母 a-z 构成的。
- 保证所有输入均为非空字符串。

![image](https://user-images.githubusercontent.com/18693417/59399028-0b598280-8dc5-11e9-8702-dc20471cb5a5.png)

> 我的答案

```js
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.map = new Map()
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.map.set(word, true)
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.map.has(word)
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  for (const key of this.map.keys()) {
    if (prefix === key.substr(0, prefix.length)) return true
  }
  return false
}
```

> 优秀答案

```js
class TrieNode {
  constructor(char) {
    this.children = {}
    this.isWord = false
    this.char = char
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let level = 0,
      depth = word.length,
      children = this.root.children,
      char,
      child

    while (level < depth) {
      char = word[level++]
      child = children[char] = children[char] || new TrieNode(char)
      children = child.children
    }

    child.isWord = true
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let level = 0,
      depth = word.length,
      children = this.root.children,
      char,
      child

    while (level < depth) {
      char = word[level]
      child = children[char]

      if (!child) {
        return false
      } else {
        children = child.children
      }

      level++
    }

    return child.isWord
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let level = 0,
      depth = prefix.length,
      children = this.root.children,
      char,
      child

    while (level < depth) {
      char = prefix[level]
      child = children[char]

      if (!child) {
        return false
      } else {
        children = child.children
      }

      level++
    }

    return true
  }
}
```

### 2019.6.12

给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

说明：

- 分隔时可以重复使用字典中的单词。
- 你可以假设字典中没有重复的单词。

**示例 1**：

```
输入:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
输出:
[
  "cats and dog",
  "cat sand dog"
]
```

**示例 2**：

```
输入:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
输出:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
解释: 注意你可以重复使用字典中的单词。
```

**示例 3**：

```
输入:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
输出:
[]
```

> 我的答案（看了提示，使用上一题判断能否分割再分）

```js
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
```

> 优秀答案

```js
var wordBreak = function(s, wordDict, map) {
  let res = []

  if (!map) {
    map = new Map()
  }

  if (map.has(s)) {
    return map.get(s)
  }

  if (s.length === 0) {
    map.set(s, [])
    return []
  }

  for (let word of wordDict) {
    let index = s.indexOf(word)

    if (index === 0) {
      let substr = s.slice(word.length)
      let subRes = wordBreak(substr, wordDict, map)

      subRes.length === 0 && substr.length === 0
        ? res.push(word)
        : subRes.forEach(newWord => res.push(word + ' ' + newWord))
    }
  }

  map.set(s, res)
  return res
}
```

### 2019.6.6

给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。

**示例 1**：

```
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
```

**示例 2**：

```
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
```

**示例 3**：

```
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
```

> 我的答案（超时）❌

```js
var wordBreak = function(s, wordDict) {
  if (!s) return true
  return wordDict.some(word => {
    const index = s.indexOf(word)
    if (index !== -1) {
      return (
        wordBreak(s.substring(0, index), wordDict) &&
        wordBreak(s.substring(index + word.length, s.length), wordDict)
      )
    }
  })
}
```

> 优秀答案（背包问题、动态规划）

```js
var wordBreak = function(s, wordDict) {
  //dictiong代表s长度为多少的时候，能不能满足条件
  let diction = new Array(s.length + 1)
  diction[0] = true
  for (let i = 0; i < s.length; i++) {
    let son_str = s.substring(0, i + 1) //长度从1到str.lenth一遍一遍来
    //如果本身可以匹配，直接打true;
    if (wordDict.indexOf(son_str) != -1) {
      diction[i + 1] = true
      continue
    }
    //对son_str进行遍历，分成两半，如果前一半满足，后一半满足，就可以满足
    //前一半是0到j,后一半是,j到son_str.length-1;
    for (let j = 0; j < son_str.length; j++) {
      let right_son_str = son_str.substring(j + 1, i + 1) //长度从1到str.lenth一遍一遍来
      if (diction[j + 1] && wordDict.indexOf(right_son_str) != -1) {
        diction[i + 1] = true
      }
    }
  }

  // console.log("dayin",diction);
  if (null == diction[s.length]) {
    return false
  }
  return diction[s.length]
}
```

### 2019.6.5

给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回 s 所有可能的分割方案。

**示例**：

```
输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]
```

> 我的答案（没做出来）❌

```js
```

> 优秀答案（回溯法）

```js
function isPalindrome(s, start, end) {
  if (start > end) return false
  while (start < end) {
    const c1 = s.charCodeAt(start)
    const c2 = s.charCodeAt(end)
    if (
      c1 === c2 ||
      (c1 - c2 === 32 && c2 >= 65 && c2 <= 90) ||
      (c2 - c1 === 32 && c1 >= 65 && c1 <= 90)
    ) {
      start++
      end--
    } else {
      return false
    }
  }
  return true
}

/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = []
  const ll = []
  // Solution1(s, 0, result, ll);
  return Solution2(s)
}

function Solution2(s) {
  if (s.length === 0) {
    return [[]]
  }
  if (s.length === 1) {
    return [[s[0]]]
  }
  const results = []
  for (let i = 0; i < s.length; i++) {
    if (isPalindrome(s, 0, i)) {
      const pre = s.slice(0, i + 1)
      const afterResults = Solution2(s.slice(i + 1))
      for (const after of afterResults) {
        after.unshift(pre)
        results.push(after)
      }
    }
  }
  return results
}
```

### 2019.5.30

你将获得 K 个鸡蛋，并可以使用一栋从 1 到 N 共有 N 层楼的建筑。

每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。

你知道存在楼层 F ，满足 0 <= F <= N 任何从高于 F 的楼层落下的鸡蛋都会碎，从 F 楼层或比它低的楼层落下的鸡蛋都不会破。

每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层 X 扔下（满足 1 <= X <= N）。

你的目标是确切地知道 F 的值是多少。

无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？

**示例 1**：

```
输入：K = 1, N = 2
输出：2
解释：
鸡蛋从 1 楼掉落。如果它碎了，我们肯定知道 F = 0 。
否则，鸡蛋从 2 楼掉落。如果它碎了，我们肯定知道 F = 1 。
如果它没碎，那么我们肯定知道 F = 2 。
因此，在最坏的情况下我们需要移动 2 次以确定 F 是多少。
```

**示例 2**：

```
输入：K = 2, N = 6
输出：3
```

**提示**：

> 我的答案（没做出来）❌

```js
var superEggDrop = function(K, N, sum = 1, floor = N, ceil = 0, string) {
  const middle = Math.ceil((ceil + floor) / 2)
  if (middle === floor || middle === ceil) {
    if (N % 2 === 0) {
      return sum
    }
    return sum + 1
  }

  if (K === 0) {
    return sum
  }

  const top = superEggDrop(K, N, sum + 1, floor, middle, string || 'top')
  const bottom = superEggDrop(K - 1, N, sum + 1, middle, ceil, string || 'bot')

  return Math.max(top, bottom)
}
```

> 优秀答案

```js
// https://github.com/Shellbye/Shellbye.github.io/issues/42
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
```

### 2019.5.29

给定一个整数数组 A，以及一个整数 target 作为目标值，返回满足 i < j < k 且 A[i] + A[j] + A[k] == target 的元组 i, j, k 的数量。

由于结果会非常大，请返回 结果除以 10^9 + 7 的余数。

**示例 1**：

```
输入：A = [1,1,2,2,3,3,4,4,5,5], target = 8
输出：20
解释：
按值枚举（A[i]，A[j]，A[k]）：
(1, 2, 5) 出现 8 次；
(1, 3, 4) 出现 8 次；
(2, 2, 4) 出现 2 次；
(2, 3, 3) 出现 2 次。
```

**示例 2**：

```
输入：A = [1,1,2,2,2,2], target = 5
输出：12
解释：
A[i] = 1，A[j] = A[k] = 2 出现 12 次：
我们从 [1,1] 中选择一个 1，有 2 种情况，
从 [2,2,2,2] 中选出两个 2，有 6 种情况。
```

**提示**：

1. 3 <= A.length <= 3000
2. 0 <= A[i] <= 100
3. 0 <= target <= 300

> 我的答案（复制粘贴别人的）

```js
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
```

> 优秀答案

```js
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
```

### 2019.5.28

编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

- 每行的元素从左到右升序排列。
- 每列的元素从上到下升序排列。

**示例**:

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

给定 target = 5，返回 true。

给定 target = 20，返回 false。

> 我的答案（错误答案(128/129 cases passed)）

```js
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
```

> 优秀答案

```js
var searchMatrix = function(matrix, target) {
  let rows = matrix.length - 1
  if (rows <= -1) {
    return false
  }
  let column = matrix[0].length - 1
  if (column <= -1) {
    return false
  }
  let index = 0

  while (true) {
    if (target === matrix[rows][index]) {
      return true
    } else if (target > matrix[rows][index]) {
      // 行找
      index += 1
    } else {
      rows -= 1
    }

    if (index > column || rows < 0) {
      return false
    }
  }
}
```

### 2019.5.27

给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

**示例 1**：

```
输入: [3,2,3]
输出: 3
```

**示例 2**：

```
输入: [2,2,1,1,1,2,2]
输出: 2
```

> 我的答案

```js
var majorityElement = function(nums) {
  const MAP = new Map()
  let maxValue = 0
  let maxNum = 0
  nums.forEach(num => {
    value = MAP.get(num) + 1 || 1
    MAP.set(num, value)
    if (value > maxValue) {
      maxValue = value
      maxNum = num
    }
  })
  return maxNum
}
```

> 优秀答案

```js
var majorityElement = function(nums) {
  var count = 1
  var m = nums[0]
  for (var i = 1; i < nums.length; ++i) {
    if (nums[i] == m) {
      count++
    } else if (count == 0) {
      m = nums[i]
      count = 1
    } else {
      count--
    }
  }
  return m
}
```

### 2019.5.24

给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

**说明**：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

**示例 1**：

```
给定 matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

**示例 2**：

```
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

> 我的答案

```js
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
```

> 优秀答案

```js
var rotate = function(matrix) {
  var i, j, temp
  var len = matrix.length
  for (i = 0; i < len - 1; i++) {
    for (j = i; i + j < len - 1; j++) {
      temp = matrix[i][j]
      matrix[i][j] = matrix[len - 1 - j][i]
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j]
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i]
      matrix[j][len - 1 - i] = temp
    }
  }
}
```

### 2019.5.23

判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

1. 数字 1-9 在每一行只能出现一次。
2. 数字 1-9 在每一列只能出现一次。
3. 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

![image](https://user-images.githubusercontent.com/18693417/58221239-6b1fb900-7d44-11e9-8fe5-2a7fb2a54fd8.png)

上图是一个部分填充的有效的数独。

数独部分空格内已填入了数字，空白格用 '.' 表示。

**示例 1**：

```
输入:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: true
```

**示例 2**：

```
输入:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: false
解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
     但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
```

说明:

- 一个有效的数独（部分已被填充）不一定是可解的。
- 只需要根据以上规则，验证已经填入的数字是否有效即可。
- 给定数独序列只包含数字 1-9 和字符 '.' 。
- 给定数独永远是 9x9 形式的。

> 我的答案

```js
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
```

> 优秀答案（另可参考八皇后算法）

```js
var isValidSudoku = function(board) {
  let res = true
  let row = []
  let column = []
  let box = []

  // 创建hash表
  for (let i = 0; i < 9; i++) {
    row[i] = {}
    column[i] = {}
    box[i] = {}
  }

  for (let i = 0; i < 9; i++) {
    if (!res) break
    for (let j = 0; j < 9; j++) {
      const current = board[i][j]
      if (current !== '.') {
        const boxIndex = ((i / 3) | 0) * 3 + ((j / 3) | 0)
        if (row[i][current] || column[j][current] || box[boxIndex][current]) {
          res = false
          break
        }
        row[i][current] = 1
        column[j][current] = 1
        box[boxIndex][current] = 1
      }
    }
  }

  return res
}
```

### 2019.5.22

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

**示例 1**：

```
输入: ["flower","flow","flight"]
输出: "fl"
```

**示例 2**：

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

> 我的答案

```js
var longestCommonPrefix = function(strs) {
  let sameStr = ''
  const _strs = strs.slice(1)
  for (const index in strs[0]) {
    if (_strs.length === 0) return strs[0]
    for (const _index in _strs) {
      if (strs[0][index] === _strs[_index][index]) {
        if (_index == _strs.length - 1) sameStr += strs[0][index]
      } else {
        return sameStr
      }
    }
  }
  return sameStr
}
```

> 优秀答案

```js
var longestCommonPrefix = function(strs) {
  var res = ''
  if (!strs.length) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }

  res = strs[0]
  for (var i = 1; i < strs.length; i++) {
    var j = res.length
    while (j >= 0) {
      if (res === strs[i].substr(0, j)) {
        res = strs[i].substr(0, j)
        break
      } else {
        j--
        res = res.substr(0, j)
      }
    }
  }

  return res
}
```

### 2019.5.21

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例**：

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

> 我的答案

```js
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}
```

> 优秀答案

```js
var twoSum = function(nums, target) {
  var map = {}
  for (var index = 0; index < nums.length; ++index) {
    map[nums[index]] = index
  }

  for (var index = 0; index < nums.length; ++index) {
    var value = target - nums[index]
    if (map[value] != undefined && map[value] != index) {
      return [index, map[value]]
    }
  }
}
```

### 2019.5.17

报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

1 被读作 "one 1" ("一个一") , 即 11。

11 被读作 "two 1s" ("两个一"）, 即 21。

21 被读作 "one 2", "one 1" （"一个二" , "一个一") , 即 1211。

**给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。**

**注意：整数顺序将表示为一个字符串。**

**示例 1**：

```
输入: 1
输出: "1"
```

**示例 2**：

```
输入: 4
输出: "1211"
```

> 我的答案

```js
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
```

> 优秀答案

```js
var countAndSay = function(n) {
  if (n === 1) return '1'

  var prev = countAndSay(n - 1)
  var i = 0
  var result = ''
  var current = ''
  var count = 0
  while (prev[i] != null) {
    if (current !== prev[i]) {
      result += count ? `${count}${current}` : ''
      current = prev[i]
      count = 1
    } else {
      count++
    }
    i++
  }
  result += count ? `${count}${current}` : ''
  return result
}
```

### 2019.5.16

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

**示例**：

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

**说明**:

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

> 我的答案

```js
var moveZeroes = function(nums) {
  let zerosQulity = 0
  for (let i = 0; i < nums.length - zerosQulity; ) {
    let k = 0
    if (nums[i] === 0) {
      zerosQulity++
      for (let j = i + k + 1; j < nums.length - zerosQulity + 1; j++, k++) {
        if (nums[j] === 0) continue
        ;[nums[i + k], nums[j]] = [nums[j], nums[i + k]]
      }
    }
    if (nums[i] !== 0) i++
  }
  return nums
}
```

> 优秀答案

```js
var moveZeroes = function(nums) {
  var zeroCount = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount++
    } else if (zeroCount > 0) {
      nums[i - zeroCount] = nums[i]
      nums[i] = 0
    }
  }
}
```

### 2019.5.15

实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从 0 开始)。如果不存在，则返回 -1。

**示例 1**：

```
输入: haystack = "hello", needle = "ll"
输出: 2
```

**示例 2**：

```
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

**说明**:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

> 我的答案

```js
var strStr = function(haystack, needle) {
  if (!needle) return 0
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] === needle[j]) {
        if (j === needle.length - 1) {
          return i
        }
      } else {
        break
      }
    }
  }
  return -1
}
```

> 优秀答案

```js
var strStr = function(sourceStr, searchStr) {
  var i = 0,
    j = 0,
    sourceLen = sourceStr.length,
    searchLen = searchStr.length
  if ((sourceLen === 0 && searchLen === 0) || searchLen === 0) {
    return 0
  }
  if (searchLen > sourceLen) {
    return -1
  }
  while (i < sourceLen) {
    // 两字母相等则继续
    if (sourceStr.charAt(i) === searchStr.charAt(j)) {
      i++
      j++
    } else {
      // 两字母不等则角标后退重新开始匹配
      i = i - j + 1 // i 回退到上次匹配首位的下一位
      j = 0 // j回退到子串的首位
    }
    //是字符串的长度
    if (j === searchLen) {
      //匹配起始位置
      return i - j
    }
  }
  return -1
}
```

### 2019.5.13

给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

**示例 1**：

```
输入: [3,0,1]
输出: 2
```

**示例 2**：

```
输入: [9,6,4,2,3,5,7,0,1]
输出: 8
```

> 我的答案

```js
var missingNumber = function(nums) {
  if (nums.length === 1 && nums[0] === 0) return 1
  const sum = nums.reduce((a, b) => a + b)
  let midNums = 0
  nums.length % 2 === 0 && (midNums = nums.length / 2)
  const tempSum =
    (1 + nums.length - 1) * parseInt((nums.length - 1) / 2) + midNums
  const dis = sum - tempSum
  return dis === 0 ? Math.max(...nums) + 1 : Math.max(...nums) - dis
}
```

> 优秀答案

```js
var missingNumber = function(nums) {
  var sum = 0
  sum = nums.reduce((sum, i) => {
    return sum + i
  })
  return (nums.length * (nums.length + 1)) / 2 - sum
}
```

### 2019.5.9

给定一个链表，判断链表中是否有环。(快慢指针)

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

**示例 1**：

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

![image](https://user-images.githubusercontent.com/18693417/57422273-ff1c5b80-7241-11e9-882e-4d7f5e4cdbdb.png)

**示例 2**：

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

![image](https://user-images.githubusercontent.com/18693417/57422285-0cd1e100-7242-11e9-9540-d997130e3436.png)

**示例 3**：

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

![image](https://user-images.githubusercontent.com/18693417/57422296-165b4900-7242-11e9-8d02-b926beb68df2.png)

> 我的答案(快慢指针)

```js
没做出来
```

> 优秀答案

```js
var hasCycle = function(head) {
  let step1 = head
  let step2 = head
  while (step2 != null && step2.next != null) {
    step1 = step1.next
    step2 = step2.next.next

    if (step1 == step2) return true
  }

  return false
}
```

### 2019.5.8

请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

**示例 1**：

```
输入: "42"
输出: 42
```

**示例 2**：

```
输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
```

**示例 3**：

```
输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
```

**示例 4**：

```
输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
```

**示例 5**：

```
输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。
     因此返回 INT_MIN (−231) 。
```

> 我的答案

```js
var myAtoi = function(str) {
  const firstStrMap = str.match(/[\S]/)
  if (firstStrMap) {
    if (/[^\d-+]/.test(firstStrMap[0])) return 0
    const min = Math.pow(-2, 31)
    const max = Math.pow(2, 31) - 1
    str = str.match(/[-+\d.]+/)[0]
    if (min > +str) return min
    if (max < +str) return max
    return parseInt(str) || 0
  }
  return 0
}
```

> 优秀答案

```js
var myAtoi = function(str) {
  var ret = parseInt(str.trim())
  var max = Math.pow(2, 31)
  if (isNaN(ret)) {
    return 0
  }
  return ret > max - 1 ? max - 1 : ret < -max ? -max : ret
}
```

### 2019.5.7

- 给定两个数组，编写一个函数来计算它们的交集。

**示例 1**：

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
```

**示例 2**：

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
```

**说明**：

- 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
- 我们可以不考虑输出结果的顺序。

> 我的答案

```js
var intersect = function(nums1, nums2) {
  let arr = []
  let shorterList
  let longerList
  if (nums1.lenght < nums2.length) {
    shorterList = nums1
    longerList = nums2
  } else {
    shorterList = nums2
    longerList = nums1
  }
  shorterList.forEach(e => {
    let index = longerList.indexOf(e)
    if (index > -1) {
      arr.push(longerList.splice(index, 1)[0])
    }
  })
  return arr
}
```

> 优秀答案

```js
var intersect = function(nums1, nums2) {
  const process = function(nums) {
    return nums.reduce((obj, key) => {
      if (key in obj) {
        obj[key]++
      } else {
        obj[key] = 1
      }
      return obj
    }, {})
  }
  var num1Map = process(nums1)
  var num2Map = process(nums2)
  var ret = []
  Object.keys(num1Map).forEach(key => {
    if (key in num1Map && key in num2Map) {
      ret.push(...Array(Math.min(num1Map[key], num2Map[key])).fill(key))
    }
  })
  return ret
}
```

### 2019.5.6

- 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

1.  左括号必须用相同类型的右括号闭合。
2.  左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

**示例 1**：

```
输入: "()"
输出: true
```

**示例 2**：

```
输入: "()[]{}"
输出: true
```

**示例 3**：

```
输入: "(]"
输出: false
```

**示例 4**：

```
输入: "([)]"
输出: false
```

**示例 5**：

```
输入: "{[]}"
输出: true
```

> 我的答案

```js
var isValid = function(s) {
  const arr = []
  const length = s.length

  for (let i = 0; i < length; i++) {
    const num = transfer(s[i])
    if (num > 0) {
      arr.push(-1 * num)
    } else if (num < 0) {
      if (num === arr[arr.length - 1]) {
        arr.pop()
      } else {
        return false
      }
    }
  }

  return arr.length ? false : true
}

function transfer(s) {
  switch (s) {
    case '(':
      return 1
    case ')':
      return -1
    case '{':
      return 2
    case '}':
      return -2
    case '[':
      return 3
    case ']':
      return -3
    default:
      return 0
  }
}
```

> 优秀答案

```js
var isValid = function(s) {
  var stack = []
  var maps = {
    '[': ']',
    '{': '}',
    '(': ')'
  }

  for (var i = 0; i < s.length; i++) {
    if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
      stack.push(s[i])
    } else {
      var key = stack.pop()
      if (maps[key] !== s[i]) {
        return false
      }
    }
  }
  if (!stack.length) {
    return true
  }
  return false
}
```

### 2019.5.5

- 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

**示例**：

```
给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
```

> 我的答案

```js
var sortedArrayToBST = function(nums) {
  const length = nums.length
  if (!length) return null
  let index = parseInt(length / 2)

  const newNode = TreeNode(nums[index])

  newNode.left = sortedArrayToBST(nums.slice(0, index))
  newNode.right = sortedArrayToBST(nums.slice(index + 1, length))

  return newNode
}

function TreeNode(val) {
  const Obj = {}
  Obj.val = val
  Obj.left = Obj.right = null
  return Obj
}
```

> 优秀答案

```js
var sortedArrayToBST = function(nums) {
  if (!nums.length) {
    return null
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0])
  }

  var mid = parseInt(nums.length / 2)
  var result = new TreeNode(nums[mid])
  result.left = sortedArrayToBST(nums.slice(0, mid))
  result.right = sortedArrayToBST(nums.slice(mid + 1))
  return result
}
```

### 2019.4.30

- 请判断一个链表是否为回文链表。

**示例 1**：

```
输入: 1->2
输出: false
```

**示例 2**：

```
输入: 1->2->2->1
输出: true
```

> 我的答案

```js
var isPalindrome = function(head) {
  let arr = []
  let length = 0
  while (head) {
    arr.push(head.val)
    length++
    head = head.next
  }
  for (let i = 0; i < length / 2; i++) {
    if (arr[i] !== arr[length - 1 - i]) return false
  }
  return true
}
```

> 优秀答案

```js
const isPalindrome = head => {
  if (!head) return true

  let tail = head
  while (tail.next) {
    tail.next.prev = tail
    tail = tail.next
  }
  while (tail !== head && tail.next !== head) {
    if (tail.val !== head.val) return false
    head = head.next
    tail = tail.prev
  }

  return true
}
```

### 2019.4.29

- 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

**说明**：
本题中，我们将空字符串定义为有效的回文串。

**示例 1**：

```
输入: "A man, a plan, a canal: Panama"
输出: true
```

**示例 2**：

```
输入: "race a car"
输出: false
```

> 我的答案

```js
var isPalindrome = function(s) {
  s = s.replace(/([\W]+)/g, '').toLowerCase()

  const length = s.length

  let boolean = true

  for (let i = 0; i < length / 2; i++) {
    if (s[i] !== s[length - 1 - i]) {
      boolean = false
      break
    }
  }
  return boolean
}
```

> 优秀答案

```js
var isPalindrome = function(s) {
  if (!s) {
    return true
  }
  var start = 0
  var end = s.length - 1
  var reg = /[a-z]|[0-9]/
  s = s.toLowerCase()
  while (start <= end) {
    if (!reg.test(s[start])) {
      start++
      continue
    }
    if (!reg.test(s[end])) {
      end--
      continue
    }
    if (s[start] !== s[end]) {
      return false
    }
    start++
    end--
  }
  return true
}
```

### 2019.4.28

- 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

**说明**：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例 1**：

```
输入: [2,2,1]
输出: 1
```

**示例 2**：

```
输入: [4,1,2,1,2]
输出: 4
```

> 我的答案

```js
var singleNumber = function(nums) {
  let sum = 0
  for (const [index, item] of nums.entries()) {
    if (nums.indexOf(item) === index) sum += item
    else sum -= item
  }
  return sum
}
```

> 优秀答案

```js
var singleNumber = function(nums) {
  var res
  nums.forEach(function(v) {
    res = res ^ v
  })
  return res
}
```

### 2019.4.26

- 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

![image](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例**：

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

> 我的答案

```js
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
```

> 优秀答案

```js
var generate = function(numRows) {
  if (!numRows) {
    return []
  }

  var M = new Array(numRows).fill().map(x => [].fill([]))

  M[0][0] = 1
  if (numRows > 1) {
    for (var i = 1; i < numRows; i++) {
      for (var j = 0; j <= i; j++) {
        M[i][j] = (M[i - 1][j - 1] || 0) + (M[i - 1][j] || 0)
      }
    }
  }

  return M
}
```

### 2019.4.25

- 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况

- I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
- X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
- C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
**示例 1**：

```
输入: "III"
输出: 3
```

**示例 2**：

```
输入: "IV"
输出: 4
```

**示例 3**：

```
输入: "IX"
输出: 9
```

**示例 4**：

```
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

**示例 5**：

```
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

> 我的答案

```js
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
```

> 优秀答案

```js
var romanToInt = function(s) {
    let array = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

  var result = 0;
  for(var i = 0; i < s.length; i++) {
    result += array[s[i]] * (array[s[i]] < array[s[i+1]] ? -1 : 1)
  }

  return result;
```

### 2019.4.24

- 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

- 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

**示例 1**：

```
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

**示例 2**：

```
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

> 我的答案

```js
...
```

> 优秀答案

```js
var rob = function(nums) {
  if (!nums.length) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  var pre = nums[0]
  var curr = Math.max(nums[0], nums[1])
  var temp
  for (const [index, val] of nums.slice(2).entries()) {
    temp = curr
    curr = Math.max(val + pre, curr)
    pre = temp
  }
  return curr
}
```

### 2019.4.22

- 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

**例如**：
给定二叉树: [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [9,20],
  [15,7]
]
```

> 我的答案

```js
var levelOrder = function(root, arr = [], i = 0) {
  if (root && (root.val || root.val === 0)) {
    !arr[i] && (arr[i] = [])
    arr[i].push(root.val)
    i++
    if (root.left) levelOrder(root.left, arr, i)
    if (root.right) levelOrder(root.right, arr, i)
  }
  return arr
}
```

> 优秀答案(其实还好)

```js
var levelOrder = function(root, list = [], level = 0) {
  if (root == null) {
    return []
  }
  if (level + 1 > list.length) {
    list.push([])
  }
  list[level].push(root.val)
  levelOrder(root.left, list, level + 1)
  levelOrder(root.right, list, level + 1)
  return list
}
```

### 2019.4.19

- 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

**示例**：

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

> 我的答案

```js
var mergeTwoLists = function(l1, l2) {
  const newList = new Object()
  if (l1 && l2) {
    if (l1.val > l2.val) {
      newList.val = l2.val
      newList.next = mergeTwoLists(l1, l2.next)
    } else {
      newList.val = l1.val
      newList.next = mergeTwoLists(l1.next, l2)
    }
  } else if (l1) {
    newList.val = l1.val
    newList.next = l1.next
  } else if (l2) {
    newList.val = l2.val
    newList.next = l2.next
  } else return null

  return newList
}
```

> 优秀答案

```js
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  } else {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
}
```

### 2019.4.18

- 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

**示例 1**：

```
输入: s = "anagram", t = "nagaram"
输出: true
```

**示例 2**：

```
输入: s = "rat", t = "car"
输出: false
```

> 我的答案

```js
var isAnagram = function(s, t) {
  const sLength = s.length
  const tLength = t.length
  if (sLength !== tLength) return false
  const sArray = s.split('')
  const tArray = t.split('')
  for (let i of sArray) {
    const alphaIndex = tArray.indexOf(i)
    if (alphaIndex < 0) return false
    tArray.splice(alphaIndex, 1)
  }
  if (tArray.length === 0) return true
  return false
}
```

> 优秀答案

```js
var isAnagram = function(s, t) {
  var json = find(s)
  var json2 = find(t)

  return compare(json, json2)
}

function find(str) {
  var json = {}
  for (var i = 0; i < str.length; i++) {
    if (json[str.charAt(i)]) {
      json[str.charAt(i)]++
    } else {
      json[str.charAt(i)] = 1
    }
  }
  return json
}
function compare(obj, obj2) {
  for (var name in obj) {
    if (obj[name] != obj2[name]) {
      return false
    }
  }
  for (var name in obj2) {
    if (obj[name] != obj2[name]) {
      return false
    }
  }
  return true
}
```

### 2019.4.17

- 给定一个整数数组，判断是否存在重复元素。如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

**示例 1**：

```
输入: [1,2,3,1]
输出: true
```

**示例 2**：

```
输入: [1,2,3,4]
输出: false
```

**示例 3**：

```
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```

> 我的答案

```js
var containsDuplicate = function(nums) {
  const numsMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) return true
    numsMap.set(nums[i], true)
  }
  return false
}
```

> 优秀答案

```js
var containsDuplicate = function(nums) {
  const map = {}
  for (const v of nums) {
    if (v in map) {
      return true
    }
    map[v] = true
  }
  return false
}
```

### 2019.4.15

- 颠倒给定的 32 位无符号整数的二进制位。

**示例 1**：

```
输入: 00000010100101000001111010011100
输出: 00111001011110000010100101000000
解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
```

**示例 2**：

```
输入：11111111111111111111111111111101
输出：10111111111111111111111111111111
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
      因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。
```

> 我的答案

```js
var reverseBits = function(n) {
  let str = n.toString(2)
  while (str.length < 32) {
    str = '0' + str
  }
  return parseInt(
    str
      .split('')
      .reverse()
      .join(''),
    2
  )
}
```

> 优秀答案

```js
var reverseBits = function(n) {
  let nums = new Array(32).fill(0)
  let count = 0
  while (n) {
    nums[count] = n % 2
    count += 1
    n = Math.trunc(n / 2)
  }
  let num = nums.join('')
  return Number.parseInt(num, 2)
}
```

### 2019.4.13

- 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

**示例 1**：

```
输入: 27
输出: true
```

**示例 2**：

```
输入: 0
输出: false
```

**示例 3**：

```
输入: 9
输出: true
```

**示例 4**：

```
输入: 45
输出: false
```

> 我的答案

```js
var isPowerOfThree = function(n) {
  if (!n || n % 1 !== 0) return false
  return n === 1 ? true : isPowerOfThree(n / 3)
}
```

> 优秀答案

```js
var isPowerOfThree = function(n) {
  let flag = false
  let res
  for (let i = 0; i < n; i++) {
    res = Math.pow(3, i)
    if (res === n) {
      flag = true
    } else if (res > n) {
      break
    }
  }
  return flag
}
```

### 2019.4.12

- 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**示例**：

```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

> 我的答案

```js
var maxSubArray = function(nums) {
  let maxSum = 0
  let tempMaxSum = nums[0]
  nums.forEach(e => {
    if (maxSum > 0) maxSum += e
    else maxSum = e
    tempMaxSum = Math.max(maxSum, tempMaxSum)
  })
  return tempMaxSum
}
```

> 优秀答案

```js
```

### 2019.4.8

- 给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

```
    1
   / \
  2   2
   \   \
   3    3
```

> 我的答案

```js
var isSymmetric = function(root) {
  return isMirror(root, root)
}

function isMirror(left, right) {
  if (!left && !right) return true
  if (left && right && left.val === right.val) {
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }
  return false
}
```

> 优秀答案

```js
var isMirror = function(root1, root2) {
  if (!root1 && !root2) {
    return true
  }
  if (!root1 || !root2) {
    return false
  }
  return (
    root1.val === root2.val &&
    isMirror(root1.left, root2.right) &&
    isMirror(root1.right, root2.left)
  )
}

var isSymmetric = function(root) {
  return isMirror(root, root)
}
```

### 2019.4.3

- 反转一个单链表。

**示例**:

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

> 我的答案

```js
var reverseList = function(head) {
  if (!head) return head
  return handler(head)
}

function handler(node, container = null) {
  let newNode = { val: node.val, next: container }
  if (node.next) {
    return handler(node.next, newNode)
  }
  return newNode
}
```

> 优秀答案

```js
var reverseList = function(head) {
  if (!head || !head.next) {
    return head
  }
  var x = null
  var y = null
  var z = head
  while (z) {
    x = y
    y = z
    z = z.next
    y.next = x
  }
  return y
}
```

### 2019.4.1

- 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

**示例**:

```
s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
```

> 我的答案

```js
var firstUniqChar = function(s) {
  const strMap = new Map()
  for (let i = 0; i <= s.length - 1; i++) {
    if (strMap.has(s[i])) {
      strMap.set(s[i], -1)
      continue
    }
    strMap.set(s[i], i)
  }
  for (let value of strMap.values()) {
    if (value !== -1) return value
  }
  return -1
}
```

> 优秀答案

```js
var firstUniqChar = function(s) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let first = s.length
  for (let i = 0; i < alpha.length; ++i) {
    let index = s.indexOf(alpha[i])
    if (index !== -1 && index === s.lastIndexOf(alpha[i])) {
      if (index < first) {
        first = index
      }
    }
  }
  return first == s.length ? -1 : first
}
```

### 2019.3.26

- 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

**示例 1**:

```
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
```

**示例 2** :

```
输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
```

> 我的答案

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    const readyNum = nums[nums.length - 1]
    move2right(nums)
    nums[0] = readyNum
  }
}

function move2right(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[arr.length - i] = arr[arr.length - i - 1]
  }
}
```

> 优秀答案

```js
let rotate = function(nums, k) {
  let begin = 0
  let current = 0
  let next = 0
  let temp1 = nums[current]
  let temp2 = 0
  for (let i = 0; i < nums.length; i++) {
    next = (current + k) % nums.length
    temp2 = nums[next]
    nums[next] = temp1
    temp1 = temp2
    current = next
    if (next === begin) {
      current = (next + 1) % nums.length
      next = (current + k) % nums.length
      temp1 = nums[current]
      begin = current
    }
  }
}
```

### 2019.3.25

- 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。给出两个整数 x 和 y，计算它们之间的汉明距离。

**注意**：
0 ≤ x, y < 2\*\*31.

**示例** :

```
输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
```

> 我的答案

```js
var hammingDistance = function(x, y) {
  let sum = 0
  x = x.toString(2)
  y = y.toString(2)
  while (x.length < y.length) {
    x = '0' + x
  }
  while (x.length > y.length) {
    y = '0' + y
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) sum++
  }
  return sum
}
```

> 优秀答案

```js
let hammingDistance = function(x, y) {
  let count = 0
  let z = x ^ y
  while (z) {
    if (z & 1) {
      count++
    }
    z = z >>> 1
  }
  return count
}
```

### 2019.3.20

- 统计所有小于非负整数 n 的质数的数量。

**示例** :

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

> 我的答案

```js
var hammingDistance = function(x, y) {
  let sum = 0
  x = x.toString(2)
  y = y.toString(2)
  while (x.length < y.length) {
    x = '0' + x
  }
  while (x.length > y.length) {
    y = '0' + y
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) sum++
  }
  return sum
}
```

> 优秀答案

```js
```

### 2019.3.13

- 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
  - push(x) -- 将元素 x 推入栈中。
  - pop() -- 删除栈顶的元素。
  - top() -- 获取栈顶元素。
  - getMin() -- 检索栈中的最小元素。

**示例** :

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

> 我的答案(多消耗了内存，多计算了一次)

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.arr = []
  this.minNum = Number.MAX_VALUE
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.arr.push(x)
  if (x < this.minNum) this.minNum = x
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const deletNum = this.arr.pop()
  if (deletNum === this.minNum) {
    this.minNum = Math.min.apply(null, this.arr)
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr[this.arr.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minNum
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

> 优秀答案

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  var min
  if (this.stack.length == 0) {
    min = x
  } else {
    var currentMin = this.stack[this.stack.length - 1]
    min = currentMin < x ? currentMin : x
  }
  this.stack.push(x)
  this.stack.push(min)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 2]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

### 2019.3.12

- 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。注意你不能在买入股票前卖出股票。

**示例 1** :

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

**示例 2** :

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

> 我的答案

```js
var maxProfit = function(prices) {
  let max = 0
  prices.forEach((item, index) => {
    if (item > prices[index + 1]) return
    for (let i = index + 1; i < prices.length; i++) {
      if (prices[i] - item > max) max = prices[i] - item
    }
  })
  return max
}
```

> 优秀答案

```js
let maxProfit = function(prices) {
  let max = 0
  let min = Number.MAX_VALUE

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (prices[i] - min > max) {
      max = prices[i] - min
    }
  }
  return max
}
```

### 2019.3.11

- 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

**示例** :

```
给定 n = 5，并且 version = 4 是第一个错误的版本。

调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true

所以，4 是第一个错误的版本。
```

> 我的答案

```js
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 1
    let end = n
    let pivot
    while (start !== end) {
      if (start + 1 === end) {
        if (isBadVersion(start)) {
          end = start
          pivot = start
        } else {
          start = end
          pivot = end
        }
      }
      pivot = Math.floor((start + end) / 2)
      if (isBadVersion(pivot)) {
        end = pivot
      } else {
        start = pivot
      }
    }

    return pivot || end
  }
}
```

> 优秀答案

```js
let solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let pos = Math.floor(n / 2)
    let goodPos = 0
    let badPos = n
    while (badPos - goodPos !== 1) {
      if (isBadVersion(pos)) {
        badPos = pos
        pos = Math.floor((badPos + goodPos) / 2)
      } else {
        goodPos = pos
        pos = Math.ceil((badPos + goodPos) / 2)
      }
    }
    return badPos
  }
}
```

### 2019.3.7

- 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

- 节点的左子树只包含小于当前节点的数。
- 节点的右子树只包含大于当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。
  **示例 1**:

```
输入:
    2
   / \
  1   3
输出: true
```

**示例** 2:

```
输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
```

> 我的答案

```js
没做出来
```

> 优秀答案

```js
let isValidBST = function(root) {
  return isValidBSTHelper(root, -Number.MAX_VALUE, Number.MAX_VALUE)
}

let isValidBSTHelper = function(root, min, max) {
  if (!root) return true
  if (root.val <= min || root.val >= max) return false
  return (
    isValidBSTHelper(root.left, min, root.val) &&
    isValidBSTHelper(root.right, root.val, max)
  )
}
```

### 2019.3.5

- 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

**示例**：

```
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

**说明**：
给定的 n 保证是有效的。
**进阶**：
你能尝试使用一趟扫描实现吗？

> 我的答案

```js
没做出来
```

> 优秀答案

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
  return removeNthFromEndHelper(head, n, 0) === n ? head.next : head
}

let removeNthFromEndHelper = function(head, n, count) {
  if (head.next !== null) {
    count = removeNthFromEndHelper(head.next, n, count)
  }
  if (count === n) {
    head.next = head.next.next
  }
  return ++count
}
```

### 2019.3.4

- 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

**示例 1**：

```
输入: 123
输出: 321
```

**示例 2**：

```
输入: -123
输出: -321
```

**示例 3**：

```
输入: 120
输出: 21
```

> 我的答案

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isPlus = x >= 0 ? 1 : -1
  x = ('' + Math.abs(x))
    .split('')
    .reverse()
    .join('')
  if (x > Math.pow(2, 31) - 1) x = 0
  return isPlus * x
}
```

> 优秀答案

```js
const reverse = function(x) {
  let digit = 0,
    res = 0
  while (x !== 0) {
    digit = x % 10
    res = res * 10 + digit
    x = (x - digit) / 10
  }
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
    return 0
  } else {
    return res
  }
}
```

### 2019.2.27（2019.3.4 修改）

- 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。(贪心算法)
  **注意**：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

**示例 1**：

```
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
```

**示例 2**：

```
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

**示例 3**：

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

> 我的答案

```js
没做出来
```

> 优秀答案

```js
var maxProfit = function(prices) {
  let total = 0
  let last = -1
  for (let price of prices) {
    if (last !== -1 && price > last) {
      total += price - last
    }

    last = price
  }

  return total
}
```

### 2019.2.26

一、 写一个程序，输出从 1 到 n 数字的字符串表示。

1. 如果 n 是 3 的倍数，输出“Fizz”；
2. 如果 n 是 5 的倍数，输出“Buzz”；
3. 如果 n 同时是 3 和 5 的倍数，输出 “FizzBuzz”。

**示例**：

```
// 以数字集合 1, 2 和 3 初始化数组。
in = 15,

返回:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
```

> 我的答案

```js
var fizzBuzz = function(n) {
  const arr = new Array(n).fill().map((e, i) => {
    ++i
    if (i % 3 !== 0) {
      if (i % 5 !== 0) {
        return '' + i
      } else {
        return 'Buzz'
      }
    } else if (i % 5 === 0) {
      return 'FizzBuzz'
    }
    return 'Fizz'
  })
  return arr
}
```

> 优秀答案

```js
let fizzBuzz = function(n) {
  let res = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      res.push('FizzBuzz')
    } else if (i % 3 === 0) {
      res.push('Fizz')
    } else if (i % 5 === 0) {
      res.push('Buzz')
    } else {
      res.push(i.toString())
    }
  }
  return res
}
```

二、编写一个函数，输入是一个整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。

> 我的答案

```js
var hammingWeight = function(n) {
  n = n.toString(2)
  let arr = n.split('')
  arr = arr
    .map(e => {
      if (e === '1') return e
    })
    .filter(e => e)
  return arr.length
}
```

> 优秀答案

```js
let hammingWeight = function(n) {
  let res = 0
  for (; n !== 0; n = n >>> 1) {
    res += n & (1 === 1) ? 1 : 0
  }
  return res
}
```

### 2019.2.25

- 打乱一个没有重复元素的数组。
  **示例**:

**示例 1**：

```
// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();
```

> 我的答案

```js
var Solution = function(nums) {
  this.nums = nums
  this.cacheNums = [...nums]
}

Solution.createNew = function(nums) {
  return new Solution(nums)
}

Solution.prototype.reset = function() {
  return this.cacheNums
}

Solution.prototype.shuffle = function() {
  return this.nums.sort((a, b) => Math.random() - 0.5)
}
```

> 优秀答案

```js
let Solution = function(nums) {
  this.copy = nums.concat()
  this.nums = nums
}

Solution.prototype.reset = function() {
  return this.copy
}

Solution.prototype.shuffle = function() {
  if (this.nums === null) return null
  let length = this.nums.length

  for (let i = length - 1; i >= 0; i--) {
    let random = Math.floor(Math.random() * (length - 1))
    let tmp = this.nums[i]
    this.nums[i] = this.nums[random]
    this.nums[random] = tmp
  }

  return this.nums
}
```

### 2019.2.24（2019.2.25 修改）

- 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？(斐波那契)
  **注意**：给定 n 是一个正整数。

**示例 1**：

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

**示例 2**：

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

> 我的答案

```js
没做出来(应该只是考公式推导，斐波那契数列）
```

> 优秀答案

```js
var climbStairs = function(n) {
  const mins = [1, 2]
  if (n === 1) return 1
  if (n === 2) return 2

  for (let index of Array(n)
    .fill()
    .keys()) {
    if (index < 2) continue

    const min = mins[index - 1] + mins[index - 2]
    mins[index] = min

    if (index === n - 1) {
      return min
    }
  }
}
```

### 2019.2.22

- 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

**说明**:

- 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
- 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

**示例**:

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

> 我的答案

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const arrlength = m + n
  const arrEndIndex = m
  let nums1nums = m
  for (let i = 0, j = 0; j < n && i < arrlength; i++) {
    if (nums1[i] > nums2[j] || i >= nums1nums || arrEndIndex === 0) {
      for (; m > i; m--) {
        nums1[m] = nums1[m - 1]
      }
      nums1[i] = nums2[j]
      m = ++nums1nums
      j++
    }
  }
}
```

> 优秀答案

```js
let merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  while (i >= 0 || j >= 0) {
    if (nums1[i] >= nums2[j] || j < 0) {
      nums1[i + j + 1] = nums1[i]
      i--
    } else {
      nums1[i + j + 1] = nums2[j]
      j--
    }
  }
}
```

### 2019.2.19（2019.2.20 修改）

1. 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。现有一个链表 -- head = [4,5,1,9]，它可以表示为:
   ![image](https://user-images.githubusercontent.com/18693417/53019154-12aff580-348f-11e9-93ac-0b9bbbee368d.png)

**示例 1**：

```
输入: head = [4,5,1,9], node = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

**示例 2**：

```
输入: head = [4,5,1,9], node = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

**说明**

- 链表至少包含两个节点。
- 链表中所有节点的值都是唯一的。
- 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
- 不要从你的函数中返回任何结果。

> 我的答案

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
}
```

> 优秀答案

```js
同上
```

### 2019.2.19（2019.2.20 修改）

2. 给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
   **说明**: 叶子节点是指没有子节点的节点。
   **示例**：
   给定二叉树 [3,9,20,null,null,15,7]，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

> 我的答案

```js
没做出来
```

> 优秀答案

```js
let maxDepth = function(root) {
  return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0
}
```

### 2019.2.18

- 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

> 我的答案

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  if (s[0]) {
    let end = s.length - 1,
      start = 0
    while (start < end) {
      ;[s[end], s[start]] = [s[start], s[end]]
      ++start
      --end
    }
    return s
  }
  return s
}
```

> 优秀答案

```js
var reverseString = function(s) {
  if (!s) return s // 可以学习的地方
  return s.reverse()
}
```
