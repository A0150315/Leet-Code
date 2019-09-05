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
    if (k === nums.length) return nums
    let map = new Map()
    let arr = [] // 次数记录的数组
    let res = [];
    nums.forEach(n => {
        map.set(n, (map.get(n) || 0) + 1)
    })
    for (let [k, v] of map) {
        if (arr[v] !== undefined) {
            if (arr[v] instanceof Array) {
                arr[v].push(k)
            } else {
                arr[v] = [arr[v], k]
            }
        } else {
            arr[v] = k
        }
    }

    console.log('map', map)
    console.log('arr', arr)

    let i = arr.length - 1
    while (k > 0) {
        if (arr[i] !== undefined) {
            if (arr[i] instanceof Array) {
                res.push(...arr[i].slice(0, k))
                k -= arr[i].length
            } else {
                res.push(arr[i])
                k--
            }
        }
        i--
    }
    return res
};

topKFrequent([1, 1, 1, 2, 2, 3], 2)