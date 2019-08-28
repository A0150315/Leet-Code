/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = []
  this.isOdd = false
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const index = this.getInsertIndex(num)
  this.isOdd = !this.isOdd;
  this.arr = [...this.arr.slice(0, index), num, ...this.arr.slice(index, this.arr.length)]
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.isOdd)
    return this.arr[parseInt('' + (this.arr.length - 1) / 2, 10)]
  else {
    const pivotA = Math.floor((this.arr.length - 1) / 2)
    const pivotB = Math.ceil((this.arr.length - 1) / 2)
    return (this.arr[pivotA] + this.arr[pivotB]) / 2
  }
}

MedianFinder.prototype.getInsertIndex = function (num, startIndex = 0) {
  if (this.arr.length === 0) return startIndex;
  if (this.arr.length === 1) return startIndex + (num > this.arr[0]);
  const mid = parseInt('' + (this.arr.length - 1) / 2, 10)
  if (num > this.arr[mid]) {
    const index = this.getInsertIndex.call({ arr: this.arr.slice(mid + 1, this.arr.length), getInsertIndex: this.getInsertIndex }, num, mid + 1 + startIndex)
    return index;
  } else if (num <= this.arr[mid]) {
    const index = this.getInsertIndex.call({ arr: this.arr.slice(0, mid + 1), getInsertIndex: this.getInsertIndex }, num, startIndex)
    return index
  }
}
