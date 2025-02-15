/*
Array in JavaScript:
   - Ordered collection of values (can be any data type)
   -Defined using:
      1. `[]` - array literals
      2. `new Array()` - array constructor
   - Key Properties:
      - `length`: Gets/Sets number of elements (dynamically resizable)
      - `index`: Access/Modify elements by their position
   - Methods for manipulation:
      - `push()`, `pop()`, `shift()`, `unshift()` - modify array ends
      - `indexOf()`, `includes()` - search operations
      - `join()` - convert to string
      - Many more utility methods
   - Important Notes:
      - Array indices start at 0
      - Arrays are reference types (not value types like in C/C++)
      - Can store any data type: strings, numbers, booleans, null, undefined, objects, even other arrays
*/

// Section 1: Creating Arrays 🎨
const colors = ["Red", "Green", "Blue"]; // literal syntax
const numbers = new Array(1, 2, 3); // constructor syntax
console.log(colors); // Output: ["Red", "Green", "Blue"]
console.log(numbers.length); // Output: 3

// Section 2: Array Length 📏
console.log(colors.length); // Output: 3
colors.length = 2; // Modify length (truncates the array)
console.log(colors); // Output: ["Red", "Green"]

// Section 3: Array Indexing 🎯
console.log(colors[0]); // Output: "Red"
colors[1] = "Yellow"; // Modify element at index 1
console.log(colors); // Output: ["Red", "Yellow"]

// Section 4: Array Methods 🛠️
// Push - Add to end
colors.push("Purple"); // Add element to end
console.log(colors); // Output: ["Red", "Yellow", "Purple"]

// Pop - Remove from end
const removed = colors.pop(); // Remove last element
console.log(colors); // Output: ["Red", "Yellow"]
console.log(removed); // Output: "Purple"

// Shift - Remove from beginning
const firstColor = colors.shift(); // Remove first element
console.log(colors); // Output: ["Yellow"]
console.log(firstColor); // Output: "Red"

// Unshift - Add to beginning
colors.unshift("Pink"); // Add element to beginning
console.log(colors); // Output: ["Pink", "Yellow"]

// Array Operations 🎮
console.log(colors.indexOf("Yellow")); // Output: 1
console.log(colors.includes("Pink")); // Output: true

// Printing Arrays 🖨️
console.log(colors); // Output: ["Pink", "Yellow"]
console.log(colors.join(" ")); // Output: "Pink Yellow"

// Checking if Array 🧐
const isArray = Array.isArray(colors); // returns true
console.log(isArray); // Output: true

// Practical Use-Cases Example 📚
// 1. Managing a shopping cart
let cart = ["Phone", "Headphones"];
cart.push("Charger"); // Add new item
console.log(cart); // ["Phone", "Headphones", "Charger"]

// 2. Todo list application
let todos = [];
todos.unshift("Complete Project"); // Add task to beginning
todos.push("Review Code"); // Add task to end
console.log(todos); // ["Complete Project", "Review Code"]

// 3. Data processing
const scores = [90, 85, 95];
const average = scores.reduce((a, b) => a + b) / scores.length;
console.log("Average Score:", average); // Output: 90
// The `reduce()` method executes a user-supplied "reducer" function on each element of the array,
// progressively accumulating a return value.

/*
1. Use `push()` instead of `arr[arr.length]` for better performance
2. `unshift()` and `shift()` are slower as they reindex all elements
3. Use `indexOf()` for finding elements, but prefer `includes()` for simple existence checks
4. Arrays are 0-indexed and can store any data type
5. `Array.isArray()` is the best way to check if something is an array


Array is considered as an object in JS
isArray to check an array
*/


