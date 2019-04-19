/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (53.90%)
 * Total Accepted:    61.1K
 * Total Submissions: 113.3K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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
