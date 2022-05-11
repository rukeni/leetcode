/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

  const isEven = (nums1.length + nums2.length) % 2 === 0;
  const merged = nums1.concat(nums2).sort((a,b) => a - b)
  if(merged.length === 1) return merged[0];

  if(isEven) {
    return (merged[(nums1.length + nums2.length) / 2] + merged[((nums1.length + nums2.length) / 2) - 1]) / 2
  }
  return merged[Math.floor((nums1.length + nums2.length) / 2)]
};