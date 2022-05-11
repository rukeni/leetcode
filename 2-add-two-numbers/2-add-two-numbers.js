/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const reverse = (string) => {
  return string.split('').reverse().join('')
}

var addTwoNumbers = function(l1, l2) {
    let str1 = '';
    let str2 = '';

    while(l1.next !== null) {
      str1 += l1.val;
      l1 = l1.next;
    }
    while(l2.next !== null) {
      str2 += l2.val;
      l2 = l2.next;
    }
  str1 += l1.val;
  str2 += l2.val;
  
  const sum = BigInt(reverse(str1)) + BigInt(reverse(str2));
  
  const output = reverse(String(sum)).split('').map(el => Number(el));
  
  let node = new ListNode(Number(output[0]));
  let head = node;

  if(output.length > 1) {
    for(let i = 1; i < output.length; i++) {
      const nextNode = new ListNode(Number(output[i]));
      node.next = nextNode;
      node = nextNode;
    }
  }
  return head;
};