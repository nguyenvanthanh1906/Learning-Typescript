class Graph {
  numberOfNodes: number;
  adjacentList: { [key: number]: number[] };
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node: number) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1: number, node2: number) {
    if (!this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2);
    }
    if (!this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1);
    }
  }
}
