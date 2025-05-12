function mergeSort<T>(array: T[]) {
  if (array.length === 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge<T>(mergeSort(left), mergeSort(right));
}

function merge<T>(left: T[], right: T[]) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [] as T[];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left[leftIndex]).concat(right[rightIndex]);
}
