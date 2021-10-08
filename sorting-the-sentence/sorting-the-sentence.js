/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  const result = [];
    const separatedString = s.split(' ').map(string => [string.substring(0, string.length-1), string.substring(string.length-1)]);
  for(let i = 0; i< separatedString.length; i++) {
    const order = Number(separatedString[i][1]) - 1;
    const word = separatedString[i][0];
    result[order] = word;
  }
  return result.join(' ')
};