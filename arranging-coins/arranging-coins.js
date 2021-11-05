/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let num = n;
    let count = 0;  
  for(let i = 0; i < n; i++) {
      if(num - (i +1) < 0) {
        break;
      }
      num = num - (i + 1);
    count++;
    }
  return count;
};