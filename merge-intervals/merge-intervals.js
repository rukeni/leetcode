/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((int1, int2) => int1[0] - int2[0]);
	const merged = [];
  let pre = intervals[0];
    for(let idx = 1; idx < intervals.length; ++idx) {
        const curr = intervals[idx];
        if(pre[1] < curr[0]) {
            merged.push(pre);
            pre = curr;
        } else {
            pre = [Math.min(pre[0], curr[0]), Math.max(pre[1], curr[1])];
        }
    }
    merged.push(pre);
    return merged;
};