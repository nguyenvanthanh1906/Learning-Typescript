type StackNode<T> = {
  value:T;
  next: StackNode<T> | null;
};

class Stack<T> {
  top: StackNode<T> | null;
  bottom: StackNode<T> | null;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value: T) {
    const newNode: StackNode<T> = {
      value: value,
      next: null,
    };

    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return this;
  }
}
