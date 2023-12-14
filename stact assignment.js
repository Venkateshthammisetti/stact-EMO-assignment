class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  reverse() {
    let current = this.head;
    let prev = null;

    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

function findSecondLargest(list) {
  if (!list.head || !list.head.next) {
    return "List does not have enough elements.";
  }

  let firstMax = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;

  let current = list.head;

  while (current !== null) {
    if (current.data > firstMax) {
      secondMax = firstMax;
      firstMax = current.data;
    } else if (current.data > secondMax && current.data < firstMax) {
      secondMax = current.data;
    }

    current = current.next;
  }

  return secondMax;
}


const linkedList = new LinkedList();

// Taking input from the user
const size = parseInt(prompt("Enter the size of the array:"));

for (let i = 0; i < size; i++) {
  const num = parseInt(prompt(`Enter Element ${i + 1}`));
  linkedList.addNode(num);
}

function printLinkedList(list) {
  let current = list.head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

function printLinkedList(list) {
  let current = list.head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

console.log("Original Linked List:");
printLinkedList(linkedList);

linkedList.reverse();

console.log("\nReversed Linked List:");
printLinkedList(linkedList);

const secondLargest = findSecondLargest(linkedList);
console.log("\nSecond Largest Number:", secondLargest);