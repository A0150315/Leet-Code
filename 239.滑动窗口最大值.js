/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // 双端队列优化时间复杂度, 时间复杂度O(n)
    const deque = []; // 存放在接下来的滑动窗口可能成为最大值的数
    const ret = [];
    const len = nums.length
    for (let i = 0; i < len; i++) {
        // 清空失效元素
        // 如果 deque[0] 小于 当前 i 减去 固定的 k + 1  就数组前两个删除
        // console.log('i - k + 1', i - k + 1)
        // console.log('deque[0]', deque[0])
        console.log('preshiftdeque=>', deque, 'i - k + 1=>', i - k + 1)
        while (deque[0] < i - k + 1) {
            deque.shift();
        }
        console.log('aftershiftdeque=>', deque)
        // 如果原数组 的deque最大位置 小于当前循环数 则删除末尾
        // 第二次循环 因为上一个循环 push deque中的为 0 所以 会 进入循环
        // 知道循环三次后找打最大的 才会再次进入循环d
        console.log('prepopdeque=>', deque, "nums[deque[deque.length - 1]]=>", nums[deque[deque.length - 1]], "nums[i]=>", nums[i])
        while (nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        console.log('nextpopdeque=>', deque)
        deque.push(i);  // 将当前下标添加到 deque
        console.log('afterpush=>', deque)
        if (i >= k - 1) {
            // 因为 如果
            ret.push(nums[deque[0]]);
        }
        console.log('ret=>', ret)
        console.log('------------------------')
    }
    return ret;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
