// Null and Undefined in JavaScript

// Null: Represents intentional absence of value (empty value)
// Analogy: John Cena's intercontinental championship count (exists but is empty)
let championshipCount = null;
console.log(typeof championshipCount); // "object" 

// Undefined: Represents uninitialized/undeclared value (non-existent)
// Analogy: A wrestler "greater than John Cena" that doesn't exist
let greatestWrestler;
console.log(greatestWrestler); // undefined
console.log(typeof greatestWrestler); // "undefined"

// Why null is an object:
// Legacy design choice from JS's early days to maintain type coercion consistency

// Ways to get undefined:

// 1. Uninitialized variables
let crowdReaction;
console.log(crowdReaction); // undefined

// 2. Explicit assignment
let wrestlerStatus = undefined;
console.log(wrestlerStatus); // undefined

// 3. Missing function parameters
function finisherMove(moveName, intensity) {
    console.log(intensity); // undefined if not provided
}
finisherMove("F-U");

// 4. Non-returning functions
function countChampionships() {
    // No return statement
}
console.log(countChampionships()); // undefined

// 5. Void return
function announce() {
    return;
}
console.log(announce()); // undefined

// 6. Non-existent object properties
const wrestler = {
    name: "The Rock",
    signatureMove: "People's Elbow"
};
console.log(wrestler.finisher); // undefined

// Key difference:
// null is explicit (programmer sets it)
// undefined is implicit (JS engine sets it)