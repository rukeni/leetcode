/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  const sumArray = accounts.map(account => account.reduce((acc, curr) => acc + curr), 0);
  return Math.max(...sumArray);
};