/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = {}
  
    for (let i = 0; i < nums.length; i++) {
      num[nums[i]] ? num[nums[i]]++: num[nums[i]] = 1;
    }
  
    const keys = Object.keys(num);
  
    return keys.find(key => num[key] === 1);
};