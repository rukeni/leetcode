/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    
    strs.sort();
    
    for( let i = 0; i < strs[0].length; i++ ) {
    	if( strs[0][i] === strs[strs.length - 1][i] ) {
      	prefix = strs[0].substring(0, i + 1);
      } else {
      	break;
      }
    }

    return prefix;
};