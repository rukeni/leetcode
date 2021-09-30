/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    return s.split('').filter(s => s !== 'a').filter(s => s !== 'e').filter(s => s !== 'i').filter(s => s !== 'o').filter(s => s !== 'u').join('');
};