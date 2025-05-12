function selectionSort<T>(array: T[]) {
  for (let j = 0; j < array.length - 1; j++) {
    let minPosition = j;
    for (let i = j + 1; i < array.length; i++) {
      if (array[minPosition] > array[i]) {
        minPosition = i;
      }
    }
    let temp = array[j];
    array[j] = array[minPosition];
    array[minPosition] = temp;
  }
}
