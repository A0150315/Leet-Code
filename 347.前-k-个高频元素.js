/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    let minTime = Number.MAX_SAFE_INTEGER;
    const map = {};
    let result = [];
    let times = []

    nums.forEach(num => {
        if (!map[num]) map[num] = 1;
        else map[num]++
    })


    for (let [num, time] of Object.entries(map)) {
        num = +num
        if (times.length < k) {
            times.push(time);
            result.push(num);
            if (time < minTime) minTime = time;
        }
        else {
            if (Math.min.apply(null, times) <= time) {
                const minIndex = times.indexOf(Math.min.apply(null, times))
                times[minIndex] = time;
                result[minIndex] = num
            }
        }
    }

    return result
};
