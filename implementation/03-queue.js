const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new SinglyLinkedNode(val);
        // Add node to end of queue (linked list)
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length += 1;
        return this.length;
        // Write your hypothesis on the time complexity of this method here
        // O（1）
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) {
            return null;
        }
        
        let removedValue = this.head.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return removedValue;
        }

        this.head = this.head.next;
        this.length -= 1;
        return removedValue;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
