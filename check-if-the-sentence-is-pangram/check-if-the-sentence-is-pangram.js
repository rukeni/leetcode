/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if(sentence.length < 26) {
      return false;
    }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetCount = 0;
  const pangram = [];
  let pangramCount = 0;
  for(let i = 0; i < alphabet.length; i++) {
    alphabetCount += alphabet.charCodeAt(i);
  }
  for(let j = 0; j < sentence.length; j++) {
    if(pangram.findIndex(char => char === sentence[j]) === -1) {
      pangram.push(sentence[j]);
    }
  }
  for(let k = 0; k < pangram.length; k++) {
    pangramCount += pangram[k].charCodeAt(0);
  }
  if(alphabetCount === pangramCount) {
    return true;
  }
  return false;
};