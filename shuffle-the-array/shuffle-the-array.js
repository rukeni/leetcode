/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arrays = [nums.slice(0, n), nums.slice(n)];
  const firstArray = nums.slice(0, n);
  const secondArray = nums.slice(n);
  return firstArray.map((num, index) => [num, secondArray[index]]).flat();
};