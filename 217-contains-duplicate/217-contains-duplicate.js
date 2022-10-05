/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const table = {};
  
    for(let i = 0; i < nums.length; i++) {
      table[nums[i]] ? table[nums[i]]++ : table[nums[i]] = 1;
    }
  
    const tableKeys = Object.keys(table);
  
    for(let i = 0; i < tableKeys.length; i++) {
      if(table[tableKeys[i]] > 1) {
        return true;
      }
    }
    
    return false;
};