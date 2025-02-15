/*
   - The sort() method sorts the elements of an array in place and returns the sorted array.
   - By default, it converts elements to strings and sorts them lexicographically (alphabetically).
   - To sort numbers or custom objects, you need a compare function.

COMPARE FUNCTION
   - The compare function determines the order of sorting:
       - function(a, b) { return a - b; } for ascending order.
       - function(a, b) { return b - a; } for descending order.
   - If compareFunction(a, b) < 0: 'a' comes before 'b'.
   - If compareFunction(a, b) > 0: 'b' comes before 'a'.
   - If compareFunction(a, b) === 0: No change in order.
*/

// Example 1: Sorting Numbers in Ascending Order
const numbers = [5, 2, 8, 1, 4];
numbers.sort((a, b) => a - b); // Sorts numbers in ascending order
console.log(numbers); // Output: [1, 2, 4, 5, 8]

// Example 2: Sorting Numbers in Descending Order
const scores = [100, 20, 50, 75, 90];
scores.sort((a, b) => b - a); // Sorts numbers in descending order
console.log(scores); // Output: [100, 90, 75, 50, 20]

/*
COPYING AN ARRAY BEFORE SORTING
   - Use the spread operator (...) to create a shallow copy of the array before sorting.
   - This prevents mutation of the original array.
*/
// Example 3: Copying and Sorting
const originalArray = [3, 9, 6, 1, 7];
const sortedArray = [...originalArray].sort((a, b) => a - b); // Copies and sorts
console.log(originalArray); // Output: [3, 9, 6, 1, 7] (unchanged)
console.log(sortedArray); // Output: [1, 3, 6, 7, 9] (sorted)

/*
WHY USE A COMPARE FUNCTION?
   - Without a compare function, numbers are treated as strings.
   - Example: [10, 2, 30] would be sorted as [10, 2, 30] because "10" < "2".
   - Always use a compare function when sorting numbers or custom data.
*/
// Example 4: Default String Sorting vs Compare Function
const numericArray = [10, 2, 30];
numericArray.sort(); // Default string-based sorting
console.log(numericArray); // Output: [10, 2, 30] (incorrect for numbers)

const correctSort = [10, 2, 30];
correctSort.sort((a, b) => a - b); // Correct numerical sorting
console.log(correctSort); // Output: [2, 10, 30]
