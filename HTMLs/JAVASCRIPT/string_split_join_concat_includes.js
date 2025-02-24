/* .split() - Splits a string into an array based on a separator in the bracket
It breaks the string into parts and returns an array of those parts. 
If no separator is provided, it will return an array with the whole string as the only element. */

// Example: Split by space
const sentence = "Hello World Pasa";
const words = sentence.split(" "); // Split by space
console.log(words); // Output: ["Hello", "World"]

// Example: Split by every character
const chars = sentence.split("");
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

/* .join() - Joins elements of an array into a single string
It takes an array and joins all its elements into one string using a specified separator (or no separator). */

// Example 1: Join with a space (string array)
const wrds = ["Hello", "there", "world"];
const sntnc = wrds.join(" ");
console.log(sntnc); // Output: "Hello there world"

// Example 2: Join with a dash
const letters = ["J", "A", "V", "A"];
const javaString = letters.join("-");
console.log(javaString); // Output: "J-A-V-A"

// Example 3: Join without any separator
const chr = ["H", "e", "l", "l", "o"];
const helloString = chr.join("");
console.log(helloString); // Output: "Hello"


/* Concatenating Strings
You can concatenate strings using:
1. The + operator
2. Template literals (``) */

// Example 1: Using + operator
const greeting = "Hello" + " " + "World";
console.log(greeting); // Output: "Hello World"

/* .includes() - Checks if a string contains a specified substring
It returns true if the substring is found, otherwise false. */

// Example: Check if "World" exists in the string
const sentence2 = "Hello World";
console.log(sentence2.includes("World")); // Output: true
console.log(sentence2.includes("world")); // Output: false (case-sensitive)
