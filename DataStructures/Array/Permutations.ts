function permutations<T>(arr: T[]): T[][] {
  if (arr.length == 1) return [arr];

  const result: T[][] = [[]];

  for (let i = 0; i < arr.length; i++) {
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainingPermuted = permutations(remaining);

    for (const per of remainingPermuted) {
      result.push([arr[i]].concat(per));
    }
  }

  return result;
}

console.log(permutations([1, 2, 3]));
