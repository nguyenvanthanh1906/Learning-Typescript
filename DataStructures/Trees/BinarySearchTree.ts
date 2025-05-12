type BSTNode<T> = {
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;
  value: T;
};

class BinarySearchTree<T> {
  root: BSTNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    let newNode: BSTNode<T> = {
      left: null,
      right: null,
      value: value,
    };

    if (!this.root) {
      this.root = newNode;

      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;

            return this;
          }
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;

            return this;
          }
          currentNode = currentNode.left;
        }
      }
    }
  }

  lookup(value: T): BSTNode<T> | null {
    if (!this.root) {
      return null;
    }

    let currentNode: BSTNode<T> | null = this.root;

    while (currentNode) {
      if (value == currentNode.value) {
        return currentNode;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return null;
  }

  breadthFirstSearch(): T[] {
    if (!this.root) return [];
    let list = [] as T[];
    let queue = [] as BSTNode<T>[];
    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  breadthFirstSearchR(queue: BSTNode<T>[], list: T[]): T[] {
    if (queue.length <= 0) {
      return list;
    }

    const currentNode = queue.shift()!;
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchR(queue, list);
  }

  DFSInorder(node: BSTNode<T>, list: T[]) {
    if(node.left) {
      this.DFSInorder(node.left, list)
    }

    list.push(node.value)

    if(node.right) {
      this.DFSInorder(node.right, list)
    }

    return list
  }

  DFSPreorder(node: BSTNode<T>, list: T[]) {
    list.push(node.value)
    
    if(node.left) {
      this.DFSPreorder(node.left, list)
    }

    if(node.right) {
      this.DFSPreorder(node.right, list)
    }

    return list
  }

   DFSPostorder(node: BSTNode<T>, list: T[]) {
    
    if(node.left) {
      this.DFSPostorder(node.left, list)
    }

    if(node.right) {
      this.DFSPostorder(node.right, list)
    }

    list.push(node.value)

    return list
  }
}
