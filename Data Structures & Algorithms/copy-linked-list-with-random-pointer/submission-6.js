// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        const cloneMap = new Map();

        // Pass 1: Create all cloned nodes
        let current = head;

        while (current) {
            cloneMap.set(current, new Node(current.val));
            current = current.next;
        }

        // Pass 2: Connect next and random pointers
        current = head;

        while (current) {
            const clone = cloneMap.get(current);

            clone.next = current.next ? cloneMap.get(current.next) : null;
            clone.random = current.random ? cloneMap.get(current.random) : null;

            current = current.next;
        }

        return cloneMap.get(head);
    }
}