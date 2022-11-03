/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set();
  
    for(let i = 0; i < nums1.length; i++) {
      if(nums2.findIndex(num => num === nums1[i]) !== -1) {
        set.add(nums1[i]);
      }
    }
  
    for(let i = 0; i < nums2.length; i++) {
      if(nums1.findIndex(num => num === nums2[i]) !== -1) {
        set.add(nums2[i]);
      }
    }
  
    return [...set];
};