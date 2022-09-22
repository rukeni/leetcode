/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reverse = (word) => {
      return word.split('').reverse().join('');
    }
    
    const words = s.split(' ');
  
    const reversedWords = words.map(word => reverse(word));
  
    return reversedWords.join(' ');
};