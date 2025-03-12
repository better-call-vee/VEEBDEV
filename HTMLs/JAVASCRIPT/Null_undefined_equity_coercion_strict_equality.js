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

console.log("-----");
// Non-Primitive Equality Check
const cena = [];
const rock = [];
console.log(cena === rock); // false (different memory references)

// Type Coercion Rules
// Arithmetic operators (+, -, *, /) convert operands to numbers
console.log(5 * "2"); // 10 ("2" → 2 via ToNumber conversion)
console.log(5 + "2"); // "52" (string concatenation due to + operator)

// Comparison operators (==) trigger coercion
console.log(5 == "5"); // true (loose equality)
console.log(0 == false); // true (both coerce to 0)
console.log(null == undefined); // true (special case)

// Strict equality (===) prevents coercion
console.log(5 === "5"); // false
console.log(null === undefined); // false

// Why 5*"2" becomes 10:
// * operator forces numeric conversion:
// 1. "2" → 2 (string→number)
// 2. 5 * 2 = 10 (numeric multiplication)

// Other Coercion Cases:
console.log(Number("42")); // 42 (explicit conversion)
console.log(String(123)); // "123"
console.log(Boolean(0)); // false
console.log(!!"hello"); // true (truthy check)

// Edge Cases:
console.log([] == 0); // true ([] → "" → 0)
console.log([] == ![]); // true (both become 0)
console.log(NaN == NaN); // false (IEEE 754 standard)

// Key Takeaways:
// 1. * operator always converts to numbers
// 2. == allows coercion, === disallows
// 3. Objects/arrays compare by reference
// 4. Boolean coercion follows truthy/falsy rules