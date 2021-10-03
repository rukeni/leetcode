/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  const strings = s.split('')
  const result = [];
  strings.forEach((string, index) => {
    result[indices[index]] = string;
  });
  return result.join('')
};