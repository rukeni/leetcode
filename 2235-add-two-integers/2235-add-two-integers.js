/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function sum (a, b) {
  if( a === 0) return b;
  if( b === 0) return a;
  
  var _sum = a ^ b;
  var _carry = (a&b) << 1;
  return sum(_sum, _carry)
}