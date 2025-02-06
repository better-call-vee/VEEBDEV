/*
Type Coercion, Parsing, and Special Numeric Values in JavaScript:
   - When combining different data types (e.g., number + string), JavaScript performs type coercion.
   - Parsing Functions:
       - `parseInt()`: Converts a string to an integer (ignores non-numeric characters after valid digits).
       - `parseFloat()`: Converts a string to a floating-point number (handles decimal points).
       - `Number()`: Converts a value to a number (strict parsing, returns NaN for invalid input).
       - `BigInt()`: Converts a value to a BigInt (used for very large integers).
   - Special Cases:
       - Returns `NaN` (Not-a-Number) if parsing fails.
       - `toFixed()`: Formats a number to a fixed number of decimal places and returns it as a string.
   - Special Numeric Values:
       - `Infinity`: Represents positive infinity (e.g., 50 / 0).
       - `-Infinity`: Represents negative infinity (e.g., -50 / 0).
*/

// Example 1: Adding a number and a string
let number = 10; // Number
let string = "20"; // String
console.log(number + string); // Output: "1020" (type coercion converts number to string)
console.log(typeof (number + string)); // Output: string

// Example 2: Using parseInt() for integer strings
let integerString = "42.9px"; // Contains non-numeric characters
let parsedInteger = parseInt(integerString); // Parses only the numeric part
console.log(parsedInteger); // Output: 42
console.log(typeof parsedInteger); // Output: number

// Example 3: Using parseFloat() for floating-point strings
let floatString = "3.14abc";
let parsedFloat = parseFloat(floatString); // Parses until non-numeric characters
console.log(parsedFloat); // Output: 3.14
console.log(typeof parsedFloat); // Output: number

// Example 4: Using Number() for strict parsing
let strictString = "42.54";
let strictNumber = Number(strictString); // Converts directly to a number
console.log(strictNumber); // Output: 42
console.log(typeof strictNumber); // Output: number

let invalidStrictString = "42abc";
let invalidStrictNumber = Number(invalidStrictString); // Fails for non-numeric strings
console.log(invalidStrictNumber); // Output: NaN
console.log(typeof invalidStrictNumber); // Output: number

// Example 5: Using BigInt() for very large integers
let bigIntString = "9007199254740991"; // Beyond safe integer limit
let bigIntValue = BigInt(bigIntString); // Converts to BigInt
console.log(bigIntValue); // Output: 9007199254740991n (note the 'n' suffix)
console.log(typeof bigIntValue); // Output: bigint

// Example 6: NaN (Not-a-Number)
let invalidString = "abc";
let parsedInvalid = parseInt(invalidString); // Cannot parse non-numeric string
console.log(parsedInvalid); // Output: NaN
console.log(typeof parsedInvalid); // Output: number (NaN is still of type "number")

// Example 7: Using toFixed() for precision
let total = 5.6789;
let fixedTotal = total.toFixed(2); // Formats to 2 decimal places
console.log(fixedTotal); // Output: "5.68"
console.log(typeof fixedTotal); // Output: string (toFixed() always returns a string)

// Example 8: Infinity and -Infinity
let positiveInfinity = 50 / 0; // Division by zero results in Infinity
console.log(positiveInfinity); // Output: Infinity
console.log(typeof positiveInfinity); // Output: number

let negativeInfinity = -50 / 0; // Division by zero with negative numerator
console.log(negativeInfinity); // Output: -Infinity
console.log(typeof negativeInfinity); // Output: number

console.log("\n");
console.log("now string - num: ");
console.log("50" - 20);
console.log(20 - "50");
console.log("50" - "20");
console.log("50" + "20"); // will produce a string


// isNaN function
console.log('\n');
const a = isNaN("11");
console.log(a);
const b = isNaN(2 - 10);
console.log(b);
