function fibonacciRecursionMaster() {
  let cache = {};
  return function fib(n: number) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

function fibonacciMaster2(n: number) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let array = [0, 1];
  for (let i = 2; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array.pop();
}
