/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
  let count = 0;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);
  for (let i = 0; i < nums1.length; i++) {
      count += nums1[i] * nums2[i];
    }
  return count;
};