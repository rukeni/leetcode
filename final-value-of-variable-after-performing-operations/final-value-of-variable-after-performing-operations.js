/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((acc, curr) =>{
      return curr.indexOf('++') !== -1 ? acc += 1 : acc -= 1;
    } ,0)
};