/*
Difference Between == and === in JavaScript:
   - `==` (Loose Equality): Compares values after type coercion (converts types to match before comparison).
   - `===` (Strict Equality): Compares both value and type without type coercion.

Null and Undefined:
   - `null`: Represents an intentional absence of any object or value. It must be assigned explicitly.
   - `undefined`: Represents a variable that has been declared but not yet assigned a value.
   - Key Difference: `null == undefined` (true due to type coercion), but `null === undefined` (false because their types differ).
*/

// Example 1: Loose Equality (==)
console.log(5 == "5"); // Output: true (type coercion converts string "5" to number 5)
console.log(null == undefined); // Output: true (both are loosely equal)

// Example 2: Strict Equality (===)
console.log(5 === "5"); // Output: false (no type coercion, types differ)
console.log(null === undefined); // Output: false (types differ: null is object, undefined is undefined)

// Example 3: Null vs Undefined
let variable1 = null; // Explicitly assigned as null
let variable2; // Declared but not assigned (undefined)
console.log(variable1 == variable2); // Output: true (loose equality)
console.log(variable1 === variable2); // Output: false (strict equality)
