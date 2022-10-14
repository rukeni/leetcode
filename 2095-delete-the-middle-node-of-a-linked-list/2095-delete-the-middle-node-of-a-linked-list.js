/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const getLength = (current) => {
    let length = 0;
  
    while(current) {
      length++;
      current = current.next;
    }
  
    return length;
}

var deleteMiddle = function(head) {
    let lengthHead = head;
    let current = head;
  
    const length = getLength(lengthHead);
  
    if(length === 1) {
      return null;
    }
  
    const middle = parseInt(length / 2);
  
    for (let i = 0; i <= middle; i++) {
      if (i === middle - 1) {
        current.next = current.next.next;
      }
      if(current) {
        current = current.next;
      }

    }
  
    return head;
  
    
};