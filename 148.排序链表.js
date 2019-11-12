/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  // 这里设置 64 ，是一个绰绰有余的数字，可以满足结点数量为 2^64 这么多的单链表的排序
  const counter = new Array(64);
  let curNode = head;
  // 遍历到的最大的 counter 数组的索引
  let maxIndex = 0;
  while (curNode) {
    // 先把当前元素暂存起来，马上我们就要把它放到 counter 数组合适的位置上
    let carryNode = curNode;
    // curNode 指针马上后移，方便下次处理
    curNode = curNode.next;
    // 拿出的节点就和原来的链表没有关系了，我们在 counter 数组中完成排序，所以要切断它和原链表的关系
    carryNode.next = null;
    // 尝试从 counter 数组 0 号索引开始放置
    let i = 0;
    // 只要非空当前位置非空，就进行一次 merge，merge 以后尝试放到下一格，如果下一格非空就继续合并
    // 合并以后再尝试放到下一格，直到下一格为空，直接放在那个为空的下一格就好
    while (counter[i]) {
      const newMergeNode = mergeOfTwoSortedListNode(carryNode, counter[i]);
      counter[i] = null;
      i++;
      carryNode = newMergeNode;
    }
    // 遇到了空，就把 carryNode 放在数组的这个位置上
    counter[i] = carryNode;
    // 记录最多使用到 counter 数组的第几位，最后合并的时候要用上
    if (i > maxIndex) {
      maxIndex = i;
    }
  }
  // 遍历整个 count 数组，将它们全部归并，这个操作就和归并 n 个有序单链表是一样的了，我们这里采用两两归并
  // 还可以采用 LeetCode 第 23 题的办法完成这一步
  // 参考：https://liweiwei1419.github.io/leetcode-solution/leetcode-0023-merge-k-sorted-lists/
  let res = null;
  for (let i = 0; i <= maxIndex; i++) {
    if (counter[i]) {
      res = mergeOfTwoSortedListNode(res, counter[i]);
    }
  }
  return res;
  // @lc code=end
};
// @lc code=end
function mergeOfTwoSortedListNode(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeOfTwoSortedListNode(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeOfTwoSortedListNode(l1, l2.next);
    return l2;
  }
}
