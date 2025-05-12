type QueueNode<T> = {
  value: T;
  next: QueueNode<T> | null;
};

class Queue<T> {
  first: QueueNode<T> | null;
  last: QueueNode<T> | null;
  lenght: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.lenght = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value: T) {
    const newNode: QueueNode<T> = {
      value: value,
      next: null,
    };
    if (this.lenght == 0) {
      this.first = newNode;
      this.last = newNode;
    } else if (this.last && this.first) {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.lenght++;

    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.lenght--;

    return this;
  }
}
