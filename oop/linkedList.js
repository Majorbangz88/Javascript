const Node = require("./node");

class LinkedList {
    constructor() {
        this.head = null;

        this.insertAtHead = (value) => {
            let newNode = new Node(value);
            newNode.nextElement = this.head;
            this.head = newNode;
        }

        this.getHead = () => {
            if (this.head !== null) {
                return this.head.value;
            }
        }

        this.deleteAtHead = () => {
            if (this.head !== null) {
                this.head === this.nextElement;
            }
        }

        this.insertAtEnd = (value) => {
            let newNode = new Node(value);
            let element = this.head;

            if (element === null) {
                this.head = newNode;
                this.tail = newNode;
                return;
            }

            while(element.nextElement !== null) {
                element = element.nextElement;
            }

            element.nextElement = newNode;
            this.tail = newNode;
        }

        this.getSize = () => {
            let size = 0;
            if (this.head !== null){
                let current = this.head;
                while (current !== null) {
                    size++;
                    current = current.nextElement;
                }
            }  
            return size;
        }

        this.removeDuplicate = () => {
            let current = this.head;
            let compare = this.head;

            while (current !== null) {
                if (current.value === compare.nextElement.value)
                current.nextElement = current.nextElement.nextElement;
            }
            
        }

        this.getLast = () => {
            let element = this.head;

            if (element === null) {
                return null;
            }

        }

        this.getElementAtIndex = (value) => {
            let element = this.head;
            let result = 0;

            if (value !== null) {
                result = this.getSize - value
            }
            return 
        }

        this.isPalindrome = () => {
            
        }
    }
}

LinkedList.prototype.isEmpty = function() {
    return this.head === null;
}

LinkedList.prototype.printElements = function() {
    let element = this.head;
    while (element !== null) {
        process.stdout.write(`${element.value} -> `);
        element = element.nextElement;
    }
    process.stdout.write('null');
}

module.exports = LinkedList;