/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let result = 0;
    let count = 0;
    for(let i=0; i<s.length; i++) {
      if(s[i] === 'R') count++;
      else count--;
      if(count === 0) result++;
    }
  return result;
};