/*
TEMPLATE LITERALS
   - Template literals are a way to create strings in JavaScript using backticks (`) instead of single ('') or double ("") quotes.
   - They allow embedding expressions and variables directly inside the string using ${}.
   - Preserve whitespace, newlines, and formatting as written in the code.
*/

// Example 1: Basic String Interpolation
const name = "Alice";
const greeting = `Hello, ${name}!`; // Embedding variable 'name' using ${}
console.log(greeting); // Output: Hello, Alice!

// Example 2: Multi-line Strings
const multiLine = `
  This is a multi-line string.
  It preserves newlines and indentation.
`;
console.log(multiLine);
// Output:
//   This is a multi-line string.
//   It preserves newlines and indentation.

// Example 3: Embedding Expressions
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`; // Embedding expression ${a + b}
console.log(result); // Output: The sum of 5 and 10 is 15.

// Example 4: Conditional Logic Inside Template Literal
const isAdmin = true;
const userMessage = `Welcome, you are ${isAdmin ? "an admin" : "a regular user"}.`;
console.log(userMessage); // Output: Welcome, you are an admin.

/*
HOW TEMPLATE LITERALS WORK
   - Backticks (`): Define the start and end of the string.
   - ${}: Placeholder syntax for embedding variables, expressions, or function calls.
   - Automatically converts embedded values to strings (e.g., numbers, booleans).
*/

// Example 5: Function Call Inside Template Literal
function getGreeting() {
    return "Good morning!";
}
const message = `Today's greeting: ${getGreeting()}`; // Embedding function call
console.log(message); // Output: Today's greeting: Good morning!

// Example 6: Combining Multiple Features
const firstName = "John";
const lastName = "Doe";
const age = 30;
const bio = `
  Name: ${firstName} ${lastName}
  Age: ${age}
  Eligible to vote: ${age >= 18 ? "Yes" : "No"}
`;
console.log(bio);
// Output:
//   Name: John Doe
//   Age: 30
//   Eligible to vote: Yes

/*
WHY USE TEMPLATE LITERALS?
   - Cleaner syntax for combining strings and variables.
   - Avoids manual concatenation with + operator.
   - Handles multi-line strings and complex expressions effortlessly.
*/