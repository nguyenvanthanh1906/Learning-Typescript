function containCommonItems<T extends string | number | symbol>(
  arr1: T[],
  arr2: T[]
): boolean {
  const map: Record<T, boolean> = {} as Record<T, boolean>;

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      return true;
    }
  }

  return false;
}
console.log(containCommonItems([1, 2, 3, 4], [5, 1, 7, 8]));
