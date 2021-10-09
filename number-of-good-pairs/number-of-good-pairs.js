/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const pairs = nums.map((num, index, array) => array.filter(targetNum => num === targetNum)).filter((value, index, array ) => value.length > 1)
    const result = [];
    for(let i = 0; i < pairs.length; i++) {
      const stringifiedPair = JSON.stringify(pairs[i]);
      if(result.indexOf(stringifiedPair) === -1) {
        result.push(stringifiedPair);
      }
    }
  const value = result.map(el => JSON.parse(el)).map(el => (el.length * (el.length -1)) / 2).reduce((acc, curr) => acc += curr, 0)
  
  return value
};