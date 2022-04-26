/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  const result = [];
  while(head.next !== null) {
    result.push(head.val);
    head = head.next;
  }
  result.push(head.val)
  return parseInt(result.join(''), 2)
};