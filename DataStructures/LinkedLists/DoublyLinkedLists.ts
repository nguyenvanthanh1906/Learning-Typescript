type MyDoublyNode = {
  value: string;
  prev: MyDoublyNode | null;
  next: MyDoublyNode | null;
};

class DoublyLinkedLists {
  head: MyDoublyNode;
  tail: MyDoublyNode;
  length: number;
  constructor(value: string) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value: string) {
    const newNode: MyDoublyNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;

    return this;
  }

  prepend(value: string) {
    const newNode: MyDoublyNode = {
      value: value,
      next: null,
      prev: null,
    };

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index: number, value: string) {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode: MyDoublyNode = {
      value: value,
      next: null,
      prev: null,
    };

    const previousNode = this.getPreviousNode(index);
    const nextNode = previousNode.next;
    if (nextNode) {
      nextNode.prev = newNode;
    }
    newNode.next = nextNode;
    newNode.prev = previousNode;
    previousNode.next = newNode;

    this.length++;

    return this;
  }

  getPreviousNode(index: number): MyDoublyNode {
    let currentNode: MyDoublyNode = this.head;
    let currentIndex = 0;
    while (currentIndex <= index && currentNode.next) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  remove(index: number): this {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      if (this.head.next) {
        this.head = this.head.next;
      }
    } else {
      const previousNode = this.getPreviousNode(index);
      if (!previousNode || !previousNode.next) return this;

      previousNode.next = previousNode.next.next;
    }

    this.length--;

    return this;
  }
}
