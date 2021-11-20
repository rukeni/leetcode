/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let best = '';
  let curr = '';
  
  for(let i = 0; i < s.length; i++){
    let char = s[i];
    let index = curr.indexOf(char);
    
    if(index !== -1){
      if(curr.length > best.length) best = curr;
      curr = curr.substr(index+1) + char;
    }else{
      curr += char;
    }
  }
  
  if(curr.length > best.length) best = curr;
  return best.length;
}