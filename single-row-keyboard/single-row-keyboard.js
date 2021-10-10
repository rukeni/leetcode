/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    const keyArray = keyboard.split('');
    const wordIndex = word.split('').map(char => keyArray.findIndex(key => key === char));
    const sum = wordIndex.reduce((acc, curr, index, array) => {
      if(index === array.length -1) {
        return acc;
      }
      return acc += Math.abs(curr - array[index + 1]) 
    }, wordIndex[0]);
  return sum;
};