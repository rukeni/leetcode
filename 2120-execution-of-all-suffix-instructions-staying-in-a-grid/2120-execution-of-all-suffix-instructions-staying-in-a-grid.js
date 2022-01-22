/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    const res=[]
    for(let i=0;i<s.length;i++){
        let [r,c]=startPos
        let count=0
        for(let j=i;j<s.length;j++){
            if(s[j]==='R') c++
            else if(s[j]==='L') c--
            else if(s[j]==='U') r--
            else r++
            if(isOutOfbound(r,c)){
                break
            }else{
                count++
            }
        }
        res.push(count)
    }
    return res
    function isOutOfbound(r,c){
        if(r<0||c<0||r>=n||c>=n)return true
    }
};