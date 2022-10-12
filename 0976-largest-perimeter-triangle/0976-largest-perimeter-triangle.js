/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let perimeter = 0;
    nums.sort((x, y)=> y - x);
    
    for(let i = 0; i < nums.length-2; i++) {
        if(nums[i]<(nums[i+1] + nums[i+2])) {
              perimeter = nums[i] + nums[i+1] + nums[i+2];
              break;
          }
    }
    
    return perimeter;
};