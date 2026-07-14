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
        //* define a empty result list
        if(!lists.length){
            return null
        }

        let result = new ListNode(-1001, null);

        //* iterate through each list and merge sort with the result list

        for (let i = 0; i < lists.length; i++) {
            const list = lists[i];
            result = this.merge(result, list);
        }

        return result.next;
    }

    merge(l1, l2) {
        if (!l1) {
            return l2;
        }

        if (!l2) {
            return l1;
        }

        const dummy = new ListNode(0, null);
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

        if (l1) {
            current.next = l1;
        }

        if (l2) {
            current.next = l2;
        }

        return dummy.next;
    }
}
