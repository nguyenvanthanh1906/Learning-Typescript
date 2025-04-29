function reverse(string: string): string {
  if (!string || typeof string != "string" || string.length < 2) {
    return string;
  }
  
  let array = [] as string[];
  for (let i = 0; i < string.length; i++) {
    array.unshift(string[i]);
  }

  let reverseString = "";
  for (let i = 0; i < array.length; i++) {
    reverseString = reverseString + array[i];
  }

  return reverseString;
}

console.log(reverse("con cac"));
