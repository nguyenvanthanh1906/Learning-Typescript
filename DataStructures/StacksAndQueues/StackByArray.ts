class StackByArray<T> {
  array: T[];
  constructor() {
    this.array = [] as Array<T>;
  }
  peek() {
    return this.array[this.array.length - 1];
  }

  push(value: T) {
    this.array.push(value);

    return this.array;
  }

  pop() {
    this.array.pop();

    return this.array;
  }
}
