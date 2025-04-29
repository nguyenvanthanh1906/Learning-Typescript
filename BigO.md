# Big O Cheat Sheet

## Big O Notations

- **O(1)** Constant – No loops
- **O(log N)** Logarithmic – Usually searching algorithms have log N if they are sorted (e.g., Binary Search)
- **O(n)** Linear – For loops, while loops through N items
- **O(n log n)** Log Linear – Usually sorting operations
- **O(n²)** Quadratic – Every element in a collection needs to be compared to every other element. Two nested loops
- **O(2ⁿ)** Exponential – Recursive algorithms that solve a problem of size N
- **O(n!)** Factorial – You are adding a loop for every element

> Iterating through half a collection is still **O(n)**  
> Two separate collections: **O(a \* b)**

---

## What Can Cause Time in a Function?

- Operations (`+`, `-`, `*`, `/`)
- Comparisons (`<`, `>`, `==`)
- Looping (`for`, `while`)
- Outside function call (`function()`)

---

## Rule Book

- **Rule 1:** Always consider the worst case
- **Rule 2:** Remove constants
- **Rule 3:** Different inputs should have different variables
  - Example: `O(a + b)`
  - If arrays are nested: `O(a * b)`
- Use `+` for steps in order
- Use `*` for nested steps
- **Rule 4:** Drop non-dominant terms

---

## What Causes Space Complexity?

- Variables
- Data structures
- Function calls
- Allocations
