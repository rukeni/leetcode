/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversed = String(x).split('').reverse().join('');
  return String(x) === reversed
};