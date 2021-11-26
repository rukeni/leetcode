/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target) !== -1) {
      return nums.indexOf(target);
    }
    const result = nums.findIndex(num => num > target);
    if(result === -1) {
      if(nums[0] > target) {
        return 0;
      } else {
        return nums.length;
      }
    }
  return result;
  
};