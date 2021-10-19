/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let result = '';
  let jump = 1;
    for(let i=0; i< command.length; i += jump) {
      if(command[i] === '(') {
        if(command[i+1] === ')') {
          result += 'o';
          jump = 2;
        } else {
          result += 'al';
          jump = 4;
        }
      } else {
      result += command[i];
      jump = 1;        
      }
    }
  return result;
};