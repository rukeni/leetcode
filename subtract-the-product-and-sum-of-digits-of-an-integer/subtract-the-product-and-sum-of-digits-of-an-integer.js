/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const splitedNumber = String(n).split('').map(el => +el);
    const product = splitedNumber.reduce((acc, curr) => acc * curr, 1);
    const sum = splitedNumber.reduce((acc, curr) => acc + curr, 0)
    return product - sum
};