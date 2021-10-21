/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let result = 0;
    const convertRuleKey = (ruleKey) => {
      if(ruleKey === 'type'){
        return 0;
      }
      if(ruleKey === 'color') {
        return 1;
      }
      if(ruleKey === 'name') {
        return 2;
      }
    }
    for(let i = 0; i < items.length; i++) {
      if(items[i][convertRuleKey(ruleKey)] === ruleValue) {
        result++;
      }
    }
  return result;
};