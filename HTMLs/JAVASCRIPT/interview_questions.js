
/* ⚽ 1. Data Types (Primitive vs Object) */
const dataTypes = {
    primitives: ["string", "number", "boolean", "null", "undefined", "symbol", "BigInt"], // 7 Types(only stores singles)
    nonPrimitives: ["object", "function"] // Everything else
};

/* 🏆 2. Functions & Arrays are OBJECTS */
console.log(typeof function () { }); // "function" (but technically object)
console.log(typeof []); // "object"

/* 🔍 3. Array Detection (Avoid typeof Trap) */
function isArray(el) {
    return Array.isArray(el); // ✅ Correct way
    // return el instanceof Array; // Alternative (but fails cross-realm)
}

/* 🕳️ 4. undefined vs null */
const messi = { goals: undefined }; // Undefined: Declared but not assigned
const ronaldo = { goals: null }; // Null: Explicit "no value" assignment

/* 🤼 5. == (Loose Referee) vs === (Strict Referee) */
5 == "5"; // true (Type conversion)
5 === "5"; // false (No conversion)

/* 🎩 6. Implicit Conversion Magic */
console.log(3 + "2" == "32") // JS: "I'll make them friends!"
console.log("5" - 2 == 3) // JS: "Let's play numbers today!"

/* 🌐 7. Scope Types */
const CampNou = "Global Scope"; // Everywhere accessible
function UCL() {
    const trophy = "Function Scope"; // Only inside
    if (true) {
        let year = "Block Scope"; // ES6+ only
    }
}

/* 🛡️ 8. Block Scope (let/const) */
if (true) {
    let busquets = "Defensive Midfielder"; // Block prisoner
}
// console.log(busquets); // ReferenceError (Not in global!)

/* 🔗 9. Closure (Memory Keeper) */
function createCounter() {
    let count = 0; // Remembered even after function dies
    return () => count++;
}
const counter = createCounter(); // Counter's secret: remembers count

/* 📞 10. Callback Function (Pass the Ball) */
function takePenalty(shotCallback) {
    shotCallback(); // Execute when ready
}
takePenalty(() => console.log("Goal!"));

/* 🏗️ 11. Hoisting (JS's Pre-Game Setup) */
console.log(offside); // undefined (var gets hoisted)
var offside = true;

// console.log(varane); // Error (let/const not hoisted)
let varane = "Defender";

/* 🔄 12. Pass-by: Value vs Reference */
let xavi = 8; // Primitive (copied)
let iniesta = xavi; // New memory location

let barca = { trophies: 95 }; // Object (reference)
let realMadrid = barca;
realMadrid.trophies = 90; // Affects original! 😱

/* 🎯 QUICK REFERENCE TABLE */
/*
| Concept          | Key Point                              | Example                  |
|-------------------|----------------------------------------|--------------------------|
| typeof array      | Returns "object"                       | typeof [] ➔ "object"     |
| Null vs Undefined | Intentional vs uninitialized          | null vs undefined        |
| ===               | No type coercion                       | 5 !== "5"                |
| Block Scope       | {} confinement (let/const)            | if(){ let x }            |
| Closure           | Function + Lexical Environment        | Factory functions        |
| Callback          | Function passed as argument           | event listeners          |
| Pass-by-Reference | Objects share memory address          | Arrays/objects modified  |
*/