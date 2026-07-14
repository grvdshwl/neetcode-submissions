class Node {
    constructor(key = null, value = null, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.length = 0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }
        const node = this.map.get(key);
        this.removeNode(node);
        this.insertNode(node);
        return node.value;
    }

    removeNode(node) {
        const next = node.next;
        const prev = node.prev;
        prev.next = next;
        next.prev = prev;
        this.length--;
    }

    insertNode(node) {
        const prev = this.tail.prev;
        prev.next = node;
        node.next = this.tail;
        node.prev = prev;
        this.tail.prev = node;
        this.length++;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node;
        if (this.map.has(key)) {
            node = this.map.get(key);
            node.value = value;
           this.removeNode(node);
        } else {
            node = new Node(key, value);
            this.map.set(key, node);
        }

        this.insertNode(node);

        if (this.length > this.capacity) {
            const nodeToRemove = this.head.next;
            this.removeNode(nodeToRemove);
            this.map.delete(nodeToRemove.key);
        }
    }
}
