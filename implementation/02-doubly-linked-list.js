// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // Write your hypothesis on the time complexity of this method here
        // O（1）

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // Need to pay extra attention when head and tail point to the same node
        if (this.length === 1) {
            this.head.prev = null;
        }

        this.length += 1;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return undefined;
        }

        let removedValue;
        removedValue = this.head.value;
        
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return removedValue;
        }

        this.length -= 1;
        this.head.next.prev = null;
        this.head = this.head.next;
        return removedValue;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) {
            return undefined;
        }

        let removedValue = this.tail.value;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return removedValue;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length -= 1;
        return removedValue;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) {
            return undefined;
        }
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.tail) {
            return undefined
        }

        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
