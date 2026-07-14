class Node {
    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node();
        this.tail = new Node();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    removeNode(node) {
        const next = node.next;
        const prev = node.prev;
        prev.next = next;
        next.prev = prev;
    }

    insertNode(node) {
        const last = this.tail.prev;

        last.next = node;
        node.prev = last;
        node.next = this.tail;
        this.tail.prev = node;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key);

        this.removeNode(node);
        this.insertNode(node);

        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);

            node.value = value;
            this.removeNode(node);
            this.insertNode(node);
            return;
        }

        const node = new Node(key, value);

        this.map.set(key, node);
        this.insertNode(node);

        if (this.map.size > this.capacity) {
            const lru = this.head.next;

            this.removeNode(lru);
            this.map.delete(lru.key);
        }
    }
}
