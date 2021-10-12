/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let result = 0;
  let accumulator = num;
  const getResult = (num) => {
    const oddFunc = (odd) => {
      return odd - 1;
    }
    const evenFunc = (even) => {
      return even / 2;
    }
    if(num === 0) {
      return;
    }
    if(num % 2 === 0) {
      console.log(accumulator)
      accumulator = evenFunc(accumulator);
    }
    if(num % 2 === 1) {
      console.log(oddFunc(accumulator));
      accumulator = oddFunc(accumulator);
    }
    result++;
    return getResult(accumulator);
  }
  getResult(accumulator);
  
  return result;
};