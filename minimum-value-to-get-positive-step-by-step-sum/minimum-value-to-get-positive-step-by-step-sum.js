/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let minSum = +Infinity;
    nums.reduce((a, i) => {
        let res = a + i;
        minSum = Math.min(minSum, res)
        return res;
    }, 0)
    let result = 1 - minSum;
    return result > 0 ? result : 1;
};