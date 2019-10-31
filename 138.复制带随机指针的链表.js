/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

const hashMap = new Map()

const copyRandomList = (head) => {
    if (!head) return null
    if (hashMap.has(head)) return hashMap.get(head)

    const copyNode = new Node(head.val);

    hashMap.set(head, copyNode)

    copyNode.next = copyRandomList(head.next)
    copyNode.random = copyRandomList(head.random)

    return copyNode
};
// @lc code=end

