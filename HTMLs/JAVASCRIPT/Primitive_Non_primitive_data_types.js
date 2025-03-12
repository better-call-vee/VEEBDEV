// Primitive Data Types (Immutable, Fixed Size)
let number = 42; // Number
let name = "John"; // String
let isActive = true; // Boolean
let nothing = null; // Null
let notDefined = undefined; // Undefined
let uniqueId = Symbol("id"); // Symbol (ES6)

// Primitives are copied by value
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (unchanged)

// Non-Primitive Data Types (Mutable, Dynamic Size)
let obj = { age: 25 }; // Object
let arr = [1, 2, 3]; // Array
let func = () => { }; // Function

// Non-primitives are copied by reference
let original = [10, 20];
let copy = original;
copy.push(30);
console.log(original); // [10, 20, 30] (modified)

// Solution: Create independent copies
// Arrays: Spread operator or slice()
let arrCopy = [...original];
arrCopy.push(69);
console.log(original);
// Objects: Object.assign() or spread
let objCopy = { ...obj };
