/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        const dummy = new ListNode()

        let prev = null;
        let current = head;

        while(current){
            let next = current.next;
            current.next  = prev;
            prev = current;
            current = next;
        }

        return prev



    }
}
