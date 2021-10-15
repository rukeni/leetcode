/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = nums.map((num, index, array) => {
      if(index % 2 !== 0) {
        return;
      }
      return new Array(num).fill(array[index+1])
    }).filter(num => num).flat();
    return result;
};