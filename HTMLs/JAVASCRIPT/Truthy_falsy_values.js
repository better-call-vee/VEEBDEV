// Falsy Values (6 in total):
// 1. false
// 2. 0 (zero)
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN

// Examples:
console.log(!!false); // false
console.log(!!0); // false
console.log(!!""); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

// Truthy Values (everything else):
// Non-zero numbers, non-empty strings, objects, arrays, functions, etc.

// Edge Cases:
console.log(!!"false"); // true (non-empty string)
console.log(!!"0"); // true (non-empty string)
console.log(!![]); // true (empty array)
console.log(!!{}); // true (empty object)
console.log(!!function () { }); // true (function)

// Wrestling Analogy:
const johnCena = false; // falsy
const theRock = "The Rock"; // truthy
const emptyArena = ""; // falsy
const emptyChampionships = null; // falsy
const mysteryBox = undefined; // falsy

// Typeof Check:
console.log(typeof null); // "object" (quirk)
console.log(typeof undefined); // "undefined"
console.log(typeof ""); // "string"
console.log(typeof 0); // "number"
console.log(typeof []); // "object" (arrays are objects) 