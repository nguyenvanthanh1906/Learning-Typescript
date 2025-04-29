function firstRecurringCharacter(arr: Array<string | number>) {
  let maps = new Map<string | number, boolean>();

  for (let i = 0; i < arr.length; i++) {
    if (maps.get(arr[i])) {
      return arr[i];
    }
    maps.set(arr[i], true);
  }

  return undefined;
}


