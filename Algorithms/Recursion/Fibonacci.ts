function fibonacciRecursion(n: number) {
    //O(2^n)
    if (n < 2) {
      return n;
    }
  
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
  }