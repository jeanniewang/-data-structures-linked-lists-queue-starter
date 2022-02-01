// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        this.length += 1;

        if (this.head === null) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        
        return this;

        // Your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // Write your hypothesis on the time complexity of this method here
        // O(n)

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length += 1;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return undefined;
        }

        this.length -= 1;

        const removedNode = new SinglyLinkedNode(this.head.value);
        removedNode.next = this.head.next;
        this.head = this.head.next;
        return removedNode;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) {
            return undefined;
        }

        this.length -= 1;
        let curr = this.head;
        let removedNode;
        if(!curr.next) {
            this.head = null;
            removedNode = new SinglyLinkedNode(curr.value);
            return removedNode;
        }

        while (curr.next.next) {
            curr = curr.next;
        }
        removedNode = new SinglyLinkedNode(curr.next.value);
        curr.next = null;
        return removedNode;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
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

    print() {
        // Print out the linked list
        if (!this.head) {
            return;
        }
        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}

