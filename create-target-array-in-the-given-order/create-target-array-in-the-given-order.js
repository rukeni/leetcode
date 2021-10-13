/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    for(let i = 0; i < nums.length; i++) {
      if(typeof target[index[i]] !== 'undefined') {
        target = [...target.slice(0,index[i]), nums[i], ...target.slice(index[i])];
      } else {
        target[index[i]] = nums[i];
      }
    }
  return target;
};