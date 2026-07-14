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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }

        let result = null;

        for (const list of lists) {
            result = this.merge(result, list);
        }

        return result;
    }

    merge(l1, l2) {
        if (!l1) return l2;
        if (!l2) return l1;

        const dummy = new ListNode();
        let current = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 || l2;

        return dummy.next;
    }
}
