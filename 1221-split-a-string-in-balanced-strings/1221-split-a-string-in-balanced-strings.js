/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  // 0이 될떄마다 밸런스가 맞아지는 것
  // 카운트가 올라가다가 0이 되면 토탈 카운트를 올린다.
  
  let count = 0;
  let balancedCount = 0;
  
  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'R') {
      count++;
    } else {
      count--;
    }
    if(count === 0) {
      balancedCount++;
    }
  }
  
    return balancedCount;
};