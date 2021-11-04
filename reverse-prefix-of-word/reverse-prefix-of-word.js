/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);
    const reverseWord = word.split('').slice(0,index+1).reverse().join('');
    return reverseWord + word.slice(index+1)
    };