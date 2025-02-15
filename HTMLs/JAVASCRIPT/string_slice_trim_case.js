/* STRING DECLARATION

Strings can be declared using three types of quotes:
1. Single quotes (' ') - 'Hello'
2. Double quotes (" ") - "World"
3. Backticks (``) - `Template literals, can include expressions like ${variable}`
*/

// Example
const name = "John";
const greeting = "Hello";
const sentence = `My name is ${name}`; // Template literal
console.log(sentence);

/* new String() - Why does it print [String: '']? 
Creates a String object (not a primitive value).
It returns a String object with the value inside. Primitive strings do not show this, 
while String objects are more like full-fledged objects (have methods, properties, etc.). */

const str = new String("");
console.log(str); // [String: '']

/* string.length 
Counts the number of characters in the string, including spaces. */

const example = "Hello World";
console.log(example.length); // Output: 11

/* Indexing for String
Strings are indexed starting from 0. You can access characters by index. */

console.log(example[0]); // Output: 'H'
console.log(example[6]); // Output: 'W'

/* STRING IS IMMUTABLE
Strings cannot be changed directly after creation. 
Solution: Reassign the string or create a new one. */

let text = "Hello";
text[0] = "h"; // Doesn't work!
console.log(text); // Output: "Hello"
text = "hello"; // Reassigning works
console.log(text); // Output: "hello"
text = text.slice(0, 3) + "t" + text.slice(4); // Change 'l' at index 3 to 't'
console.log(text);

/* Case Sensitivity
toLowerCase() and toUpperCase() methods convert to lowercase/uppercase. 
They will work on const as they don’t mutate the string, they return a new one. */

const constantText = "JavaScript";
console.log(constantText.toLowerCase()); // Output: "javascript"
console.log(constantText.toUpperCase()); // Output: "JAVASCRIPT"

/* .trim()
Removes whitespace from both ends of a string. Does not affect the middle spaces. */

const messyString = "   Hello World   ";
console.log(messyString.trim()); // Output: "Hello World"
