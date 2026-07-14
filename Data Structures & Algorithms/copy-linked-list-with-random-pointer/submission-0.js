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
        const dummy = new Node();
        let tail = dummy;

        const cloneMap = new Map();

        let current = head;

        while (current) {
            let node;
            if (!cloneMap.has(current)) {
                const value = current.val;
                node = new Node(value);
                cloneMap.set(current, node);
            } else {
                node = cloneMap.get(current);
            }

            const random = current.random;

            let randomNode;

            if (!cloneMap.has(random)) {
                randomNode = current.random ? new Node(current.random.val) : null;
                cloneMap.set(random, randomNode);
            } else {
                randomNode = cloneMap.get(random);
            }

            const next = current.next;

            let nextNode;

            if (!cloneMap.has(next)) {
                nextNode = current.next ? new Node(current.next.val) : null;

                cloneMap.set(next, nextNode);
            } else {
                nextNode = cloneMap.get(next);
            }

            node.next = nextNode;

            node.random = randomNode;

            tail.next = node;

            current = current.next;
            tail = tail.next;
        }

        return dummy.next;
    }
}
