// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
            let counter = 0;
            let node = this.head;

            while(node) {
                counter++;
                node = node.next;
            }
            return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null;

        let node = this.head;
        while(node) {
            if(!node.next) return node;
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previousNode = this.head;
        let currentNode = this.head.next;

        while(currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let lastNode = this.getLast();
        lastNode.next = new Node(data);
    }

    getAt(index) {
        let currentNode = this.head;
        let counter = 0;

        while (currentNode) {
            if (counter === index) {
                return currentNode;
            } else {
                counter++;
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previousNode = this.getAt(index - 1);

        if (!previousNode) {
            return;
        }

        if (!previousNode.next) {
            return;
        }
        previousNode.next = previousNode.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let previousNode = this.getAt(index - 1) || this.getLast();
        let node = new Node(data, previousNode.next);
        previousNode.next = node;
    }
}

module.exports = { Node, LinkedList };
