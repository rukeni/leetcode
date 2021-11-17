/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function fact(m){
    if(m == 1 || m == 0)
        return 1;
    return m*fact(m-1);
}

var uniquePaths = function(m, n) {
    return fact(m+n-2)/(fact(m-1)*fact(n-1));
};