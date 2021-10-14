/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelsArray = jewels.split('');
    const stonesArray = stones.split('');
    let result = 0;
  for(let i = 0; i < stonesArray.length; i++) {
    const index = jewelsArray.findIndex(jewel => jewel === stonesArray[i]);
    if(index !== -1) {
      result++;
    }
  }
  return result;
};