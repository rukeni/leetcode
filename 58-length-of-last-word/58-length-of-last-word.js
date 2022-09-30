/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(' ').map(s => s.trim()).filter(String);
  
    console.log(words[words.length - 1])
    const answer = words[words.length - 1].length;
    return answer
};