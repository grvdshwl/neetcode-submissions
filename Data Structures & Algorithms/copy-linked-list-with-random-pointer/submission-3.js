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
        if (!head) {
            return null;
        }

        const dummy = new Node();
        let tail = dummy;

        const cloneMap = new Map();

        let current = head;

        function getClone(node) {
            if (!node) {
                return null;
            }

            if (!cloneMap.has(node)) {
                cloneMap.set(node, new Node(node.val));
            }

            return cloneMap.get(node);
        }

        while (current) {
            const currentClone = getClone(current);
            const nextClone = getClone(current.next);

            const randomClone = getClone(current.random);
            currentClone.next = nextClone;
            currentClone.random = randomClone;

            tail.next = currentClone;

            tail = tail.next;
            current = current.next;
        }

        return dummy.next;
    }
}
