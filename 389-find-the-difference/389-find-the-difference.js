/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const first = s.split('').sort().join('');
    const second = t.split('').sort().join('');
  
    let i = 0;
    while(i < s.length) {
      if(first[i] !== second[i]) {
        return second[i];
      }
      i++;
    }
  
    return second[i];
};