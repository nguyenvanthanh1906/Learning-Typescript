function bubbleSort<T>(array: T[]) {
  for (let j = 1; j <= array.length - 1; j++) {
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  return array
}

