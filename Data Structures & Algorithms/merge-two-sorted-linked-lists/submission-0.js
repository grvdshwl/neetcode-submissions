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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let node1 = list1;
        let node2 = list2;

        const dummy = new ListNode();
        let current = dummy;

        while (node1 && node2) {
            if (node1.val <= node2.val) {
                current.next = node1;
                current = current.next;
                node1 = node1.next;
            } else {
                current.next = node2;
                current = current.next;
                node2 = node2.next;
            }
        }

        if (node1) {
            current.next = node1;
        }

        if (node2) {
            current.next = node2;
        }

        return dummy.next;
    }
}
