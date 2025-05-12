class HashTable {
  data: Array<Array<[string, any]>>;
  constructor(size: number) {
    this.data = new Array(size);
  }

  _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key: string, value: any): Array<Array<[string, any]>> {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

    return this.data;
  }

  get(key: string): string | undefined {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys(): Array<string> {
    let keys = [] as string[];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          if (this.data[i][j]) {
            keys.push(this.data[i][j][0]);
          }
        }
      }
    }

    return keys;
  }
}

let o = new HashTable(50);
o.set("grapes", "nho");
console.log(o.data);
