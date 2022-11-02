/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const table = {};
    const words = s.split(' ');
    const unique = new Set();
  
    if(pattern.length !== words.length) return false;
  
    for (let i = 0; i < pattern.length; i++) {
      table[pattern[i]] ? table[pattern[i]] : table[pattern[i]] = words[i];
      unique.add(words[i]);
    }
  
    for (let i = 0; i < pattern.length; i++) {
      if(table[pattern[i]] !== words[i]) {
        return false;
      }
    }
  
    const patternLength = Object.keys(table).length;
  
    
    return patternLength === unique.size;
};