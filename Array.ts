class MyArray<T> {
  length: number;
  data: { [key: number]: T };
  constructor(length: number, data: object) {
    this.length = 0;
    this.data = {} as { [key: number]: T };
  }

  get(index: number): T {
    return this.data[index];
  }

  push(item: T): number {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop(): T | undefined {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index: number): T | undefined {
    const item = this.data[index];

    this.shiftItems(index);

    return item;
  }

  shiftItems(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}
