/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = new Array(n).fill(1).map((el,idx) => el +idx);
    for(let i = 0; i < answer.length; i++) {
      let count = 0;
      if(answer[i] % 3 === 0) {
        count+= 3;
      }
      if(answer[i] % 5 === 0) {
        count+= 5;
      }
      if(count === 3) {
        answer[i] = 'Fizz';
        continue;
      }
      if(count === 5) {
        answer[i] = 'Buzz';
        continue;
      }
      if(count === 8) {
        answer[i] = 'FizzBuzz';
        continue;
      }
      if(count === 0) {
        answer[i] = String(answer[i]);
      }
    }
  return answer;
};