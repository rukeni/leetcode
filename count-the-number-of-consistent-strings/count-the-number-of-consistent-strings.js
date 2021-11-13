/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  allowed = "[" + allowed + "]";
  let re = new RegExp(allowed);
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < words[i].length; j++) {
      if (re.test(words[i][j])) {
        count++;
      } else {
        break;
      }
    }
    if (count == words[i].length) {
      res++;
    }
  }
  return res;
};