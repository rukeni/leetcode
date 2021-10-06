/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    var maxDepth = 0; 
    var stack = [];
    
    for (var i = 0; i < s.length; i++){
        if (s[i]=== '('){
            stack.push('(')
        }
        if (s[i] === ")" && stack[stack.length -1] === '('){
            maxDepth = Math.max(maxDepth, stack.length)
            stack.pop();
        }
    }
    return maxDepth;
};