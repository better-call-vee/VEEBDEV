/* Reverse a string in three different ways */

// Example 1: Using for...of loop with concatenation (letter + answer string)
let str = "JavaScript";
let reversed1 = "";
for (let letter of str) {
  reversed1 = letter + reversed1; // Add letter to the beginning of the result string
}
console.log(reversed1); // Output: "tpircSavaJ"

// Example 2: Using a normal for loop
let reversed2 = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed2 += reversed1[i]; // Add each character from the end to the result string
}
console.log(reversed2); // Output: "tpircSavaJ"

// Example 3: Using .reverse() method with .split() and .join()
let reversed3 = str.split("").reverse().join(""); // Split into array, reverse, then join back
console.log(reversed3); // Output: "tpircSavaJ"
