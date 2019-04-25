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
