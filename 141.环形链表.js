/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
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
