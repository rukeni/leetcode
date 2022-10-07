/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let part1Head = new ListNode();
    let part2Head = new ListNode();
    let dummy1 = part1Head;
    let dummy2 = part2Head;
    
    while(head) {
        let next = head.next;
        if (head.val < x) {
            part1Head.next = head;
            part1Head = part1Head.next;
        } else {
            part2Head.next = head;
            part2Head = part2Head.next;
        }
        head.next = null;
        head = next;   
    }
    
    part1Head.next = dummy2.next;
    return dummy1.next;
};