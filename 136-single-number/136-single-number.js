/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const count = {};
  
    for(let i = 0; i < nums.length; i++) {
      if(count[nums[i]]) {
        count[nums[i]]++;
      } else {
        count[nums[i]] = 1;
      }
    }
    
    let result;
  
    Object.keys(count).forEach(key => {
      if(count[key] === 1) {
        return result = key;
      }
    });
  
    return result;
};