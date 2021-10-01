/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map((candy, index, array) => {
      return candy + extraCandies >= Math.max(...array) ? true : false
    })
  
};