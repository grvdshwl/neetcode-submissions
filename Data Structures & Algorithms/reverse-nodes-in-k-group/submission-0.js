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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            const kthNode = this.getKthNode(groupPrev,k);

            if (!kthNode) {
                break;
            }

            const groupNext = kthNode.next;

            let prev = null;
            let current = groupPrev.next;
            kthNode.next = null;

            let tail = current;

            while (current) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            groupPrev.next = prev;
            tail.next = groupNext;

            groupPrev = tail;
        }

        return dummy.next;
    }

    getKthNode(current, k) {
        while (current && k > 0) {
            current = current.next;
            k--;
        }

        return current;
    }
}
