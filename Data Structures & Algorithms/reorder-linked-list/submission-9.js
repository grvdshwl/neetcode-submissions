class Solution {
    reorderList(head) {
        if (!head || !head.next) return;

        // Find middle
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse second half
        let second = slow.next;
        slow.next = null;

        let prev = null;
        while (second) {
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        // Merge
        let first = head;
        second = prev;

        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
