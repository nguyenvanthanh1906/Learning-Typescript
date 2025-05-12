function findFactorialRecursion(number: number) {
  if (number == 2) {
    return 2;
  }

  return number * findFactorialRecursion(number - 1);
}
