/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const equals = [];
  
  const explore = (node, path, sum) => {
    
    if (!node) return;
      
    if (!node.left && !node.right) {
      if (sum === node.val) {
        equals.push([...path, node.val]);
      }
      return;
    }
    
    explore(node.left, [...path, node.val], sum - node.val);
    explore(node.right, [...path, node.val], sum - node.val);
  };
  
  explore(root, [], targetSum);
  
  return equals;

};