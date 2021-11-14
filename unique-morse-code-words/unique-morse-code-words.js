/**
 * @param {string[]} words
 * @return {number}
 */
var codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

var uniqueMorseRepresentations = function(words) {
    return new Set(words.map(str => str.split('').reduce((acc,cur) => acc + codes[cur.charCodeAt() - 97], ''))).size;
};