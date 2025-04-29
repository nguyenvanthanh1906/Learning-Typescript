function mergeSortedArray<T>(arr1: T[], arr2: T[]): T[] {
  let mergeArray = [] as T[];
  let i = 0;
  let j = 0;

  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1[i] || arr2[j]) {
    if (arr2[j] === undefined || arr1[i] <= arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }

  return mergeArray;
}

