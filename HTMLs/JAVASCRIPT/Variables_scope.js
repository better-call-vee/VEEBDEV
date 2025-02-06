/*
Variable in JavaScript:
   - Variables are used to store data values.
   - Three ways to declare variables:
       - `var`: Old way, function-scoped (avoid in modern JS). It is scopeless in the global context.
       - `let`: Block-scoped, reassignable.
       - `const`: Block-scoped, non-reassignable (must initialize during declaration).
   - Naming rules:
       - Use meaningful names (e.g., `userName`, `totalAmount`).
       - Cannot start with a number or use reserved keywords.
       - Case-sensitive (e.g., `name` ≠ `Name`).
   - Output using `console.log()`:
       - Prints variable values to the browser console for debugging.
   - `typeof` operator:
       - Returns the data type of a variable (e.g., string, number, boolean).
*/

// Example 1: Declaring and outputting variables
let message = "Hello, JavaScript!"; // String stored in a variable, single quotation is also correct
console.log(message); // Output: Hello, JavaScript!
console.log(typeof message); // Output: string

// Example 2: Using const for fixed values
const pi = 3.1416; // Constant value, cannot be reassigned
console.log(pi); // Output: 3.1416
console.log(typeof pi); // Output: number

// Example 3: Reassigning variables with let
let count = 8;
count = count + 1; // Incrementing value
console.log(count); // Output: 9
console.log(typeof count); // Output: number

// Example 4: Demonstrating block scope with let
{
    let scope = "I am inside a block!";
    console.log(scope); // Output: I am inside a block!
}
// console.log(scope); // Error: scope is not accessible outside the block

// Example 5: Common mistake with const
// const errorExample; // SyntaxError: Missing initializer in const declaration, must for const;

// Example 6: Boolean with var (and demonstrating var's scopelessness)
var isJavaScriptFun;
isJavaScriptFun = true;// Boolean value stored in a variable
console.log(isJavaScriptFun); // Output: true
console.log(typeof isJavaScriptFun); // Output: boolean

// Demonstrating var's scopelessness
if (true) {
    var scopelessVar = "I am not block-scoped!";
}
console.log(scopelessVar); // Output: I am not block-scoped! (var is not block-scoped)

// Example 7: Using typeof to check undefined variables
let undefinedVariable;
console.log(undefinedVariable); // Output: undefined
console.log(typeof undefinedVariable); // Output: undefined