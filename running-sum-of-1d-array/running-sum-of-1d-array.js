/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((num, index, array) => {
      return array.slice(0, index).reduce((acc, curr) => {
        return acc += curr;
      }, num)
    })
};