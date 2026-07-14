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
            const kthNode = this.getKthNode(groupPrev, k);

            if (!kthNode) {
                break;
            }

            const groupNext = kthNode.next;
            const groupStart = groupPrev.next;

            // Disconnect group
            kthNode.next = null;

            // Reverse group
            const newGroupHead = this.reverseList(groupStart);

            // Connect reversed group
            groupPrev.next = newGroupHead;
            groupStart.next = groupNext;

            // Move to next group
            groupPrev = groupStart;
        }

        return dummy.next;
    }

    getKthNode(node, k) {
        while (node && k > 0) {
            node = node.next;
            k--;
        }

        return node;
    }

    reverseList(head) {
        let prev = null;
        let current = head;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }
}