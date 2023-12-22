const LinkedList = require("./linkedList");

test("that linked-list is empty", () => {
    let list = new LinkedList();
    let isTrue = list.isEmpty();
    expect(isTrue).toBe(true);
})

test("that elements can be inserted at head", () => {
    let list = new LinkedList();
    list.insertAtHead(5);
    let headValue = list.getHead();
    expect(headValue).toBe(5);
})

test("that elements can be deleted at head", () => {
    let list = new LinkedList();

    list.insertAtHead(5);
    list.insertAtHead(6);
    list.insertAtHead(8);
    
    list.deleteAtHead();
    expect(list.getHead()).toBe(8);
})

test("that length of the linkedlist is returned", () => {
    let list = new LinkedList();

    list.insertAtHead(5);
    list.insertAtHead(6);
    list.insertAtHead(8);

    expect(list.getSize()).toBe(3);
})

test("that duplicate elements are removed", () => {
    let list = new LinkedList();

    list.insertAtHead(1);
    list.insertAtHead(1);
    list.insertAtHead(1);
    list.insertAtHead(2);
    list.insertAtHead(2);
    list.insertAtHead(3);
    list.insertAtHead(4);

    list.removeDuplicate()
    expect(list.getSize()).toBe(4);
})

test("that element at the nth index is returned", () => {
    let list = new LinkedList();

    list.insertAtHead(20);
    list.insertAtHead(3);
    list.insertAtHead(34);
    list.insertAtHead(25);
    list.insertAtHead(42);

    expect(list.getElementAtIndex(3)).toBe(2);
})

test("that function returns true if palindromic", () => {
    let list = new LinkedList();

    list.insertAtHead(1);
    list.insertAtHead(2);
    list.insertAtHead(2);
    list.insertAtHead(1);

    expect(list.isPalindrome()).toBe(true)
})

test("that function returns false if not palindromic", () => {
    let list = new LinkedList();

    list.insertAtHead(1);
    list.insertAtHead(2);
    list.insertAtHead(2);
    list.insertAtHead(1);

    expect(list.isPalindrome()).toBe(false)
})