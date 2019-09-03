/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {

    if (matrix.length === 1) return matrix[0][0];

    let len = matrix.length;
    let min = matrix[0][0];
    let max = matrix[len - 1][len - 1];

    while (min <= max) {
        let mid = (max + min) >> 1;// 右移一位，即取平均数
        let count = getCountLessThan(matrix, mid);
        
        count < k ? min = mid + 1 : max = mid - 1;
        console.log(min, mid, max, count, k)
    }

    return min;
};

/**在题中的矩阵中找到所有比target小的数的数量
 *
 * @param matrix
 * @param target
 * @returns {number}
 */
function getCountLessThan (matrix, target) {
    let count = 0;
    let len = matrix.length;
    let x = len - 1;
    let y = 0;

    while (x >= 0 && y < len) {
        //找到当前列第一个大于target的数的index
        matrix[x][y] > target ? x-- : (count += x + 1, y++);
    }

    return count;
}


console.log(kthSmallest([
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
], 8))