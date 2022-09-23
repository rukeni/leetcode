/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    const modulo = 10 ** 9 + 7;
    let multiply = 2;
    
    let answer = 1;
    for (let i = 2; i <= n; i++) {
        if (i === multiply) multiply *= 2;
        answer = (answer * multiply + i) % modulo;
    }
    
    return answer;
};