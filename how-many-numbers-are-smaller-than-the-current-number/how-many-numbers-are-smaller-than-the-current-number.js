/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const result = new Array(nums.length).fill(0);
    const sum = nums.forEach((targetNum, targetIndex) => {
      nums.forEach(num => {
        if(targetNum > num) {
          result[targetIndex]++;
        }
      })
    })
  return result;
};