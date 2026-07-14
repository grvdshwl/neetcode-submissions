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
     * @return {void}
     */
    reorderList(head) {
        const dummy = new ListNode();
        dummy.next = head;
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let first = head;

        let second = slow.next;
        slow.next = null;

        let prev = null;
        let current = second

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }


         first = head;
        second = prev;


        while(second){
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1
            second = temp2


        }

       

        return first
    }
}
