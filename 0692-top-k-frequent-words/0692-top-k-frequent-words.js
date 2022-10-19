/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const wordTable = {};
  
    for(let i = 0; i < words.length; i++) {
      wordTable[words[i]] ? wordTable[words[i]]++ : wordTable[words[i]] = 1;
    }
  
    let result = Object.keys(wordTable).sort((a,b)=>{
          let countCompare = wordTable[b] - wordTable[a];
          if (countCompare == 0) return a.localeCompare(b);
          else return countCompare;
        }   
    );
    return result.slice(0, k);
};