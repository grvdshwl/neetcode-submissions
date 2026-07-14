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

        let firstHead = head;
        console.log(slow.next);

        let secondHead = slow.next;
        slow.next = null;

        let prev = null;
        let current = secondHead;

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        secondHead = prev;

        let result = new ListNode();

        while (firstHead || secondHead) {
            if (firstHead) {
                result.next = firstHead;
                result = result.next;
                firstHead = firstHead.next;
            }

            if (secondHead) {
                result.next = secondHead;
                result = result.next;
                secondHead = secondHead.next;
            }
        }

        return result.next;
    }
}
