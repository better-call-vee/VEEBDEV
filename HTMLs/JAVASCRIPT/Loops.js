/*
CLASSIC FOR LOOP
   - Syntax: for(initialization; condition; increment/decrement) { ... }
   - Initialization: Sets the starting point (e.g., let i = 0)
   - Condition: Loop runs as long as this is true (e.g., i < 5)
   - Increment/Decrement: Updates the loop variable after each iteration
   - Best for: Fixed number of iterations or when index control is needed
*/
const nums = [1, 2, 3, 4, 5];
let output = "";
for (const num of nums) {
  output += num; // Add the number
  if (num !== nums[nums.length - 1]) output += ", "; // Add a comma and space (except for the last number)
}
console.log(output); // Output: 1, 2, 3, 4, 5

/*
  FOR...OF LOOP
     - Syntax: for(const element of iterable) { ... }
     - Iterates over values of an array or other iterable objects
     - No need for manual indexing
     - Best for: When you only care about the elements, not their indices
  */
// Example 2: Iterating over an array
const numbers = [10, 20, 30];
for (const num of numbers) {
  console.log(num); // Output: 10, 20, 30
}
// console.log(numbers.join(' '));

/*
WHILE LOOP
     - Syntax: while(condition) { ... }
     - Runs as long as the condition evaluates to true
     - Best for: Situations where the number of iterations isn't known beforehand
     - Beware of infinite loops if the condition never becomes false
*/
// Example 3: Countdown from 3 to 1
let count = 3;
while (count > 0) {
  console.log(count); // Output: 3, 2, 1
  count--;
}

/*
  BREAK AND CONTINUE
     - break: Exits the loop immediately
     - continue: Skips the current iteration and moves to the next
     - Useful for controlling flow without waiting for the loop to finish naturally
  */
// Example 4: Using break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // Stops at 3
  if (i % 2 === 0) continue; // Skips even numbers
  console.log(i); // Output: 1
}

/*
  DO...WHILE LOOP
     - Syntax: do { ... } while(condition);
     - Executes the block first, then checks the condition
     - Guarantees at least one execution, even if the condition is false initially
     - Best for: Scenarios where the code must run at least once
  */
// Example 5: At least one execution
let x = 6;
do {
  console.log(x); // Output: 6
  x++;
} while (x < 5); // Condition is false, but still runs once
