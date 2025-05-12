type MyNode<T> = {
  value: T;
  next: MyNode<T> | null;
};

class LinkedLists<T> {
  head: MyNode<T>;
  tail: MyNode<T>;
  length: number;
  constructor(value: T) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value: T) {
    const newNode: MyNode<T> = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;

    return this;
  }

  prepend(value: T) {
    const newNode: MyNode<T> = {
      value: value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index: number, value: T) {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode: MyNode<T> = {
      value: value,
      next: null,
    };

    const previousNode = this.getPreviousNode(index);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;

    return this;
  }

  getPreviousNode(index: number): MyNode<T> {
    let currentNode: MyNode<T> = this.head;
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

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let currentNode = this.head;
    let nextNode = currentNode.next;
    this.tail = this.head;
    while (nextNode) {
      let temp = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = temp;
    }

    this.head.next = null;
    this.head = currentNode;
  }
}
