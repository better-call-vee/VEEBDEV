// Callback Function: Function passed as argument and executed later

// Example 1: Synchronous Callback
function processMatch(entranceTheme, callback) {
    console.log(`Playing: ${entranceTheme}`);
    callback(); // Execute the callback
}

// Callback function 
function announce() {
    console.log("The Rock is ready!");
}

processMatch("If You Smell...", announce); // Pass function reference

// Why callbacks are needed:
// 1. Code reusability (plug different behaviors)
// 2. Separation of concerns (decouple logic)

// Comparison: Without vs With Callback
// Without callback (rigid):
function calculate(a, b) {
    return a + b;
}

// With callback (flexible):
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(calculate(5, 3, add)); // 8
console.log(calculate(5, 3, multiply)); // 15

// Key Patterns:
// 1. Higher-order functions (functions returning/accepting functions)
// 2. Callbacks enable inversion of control

// Losing context
const wrestler = {
    name: "Stone Cold",
    sayQuote: function () {
        const inner = function () {
            console.log(`${this.name} says: Open a can of worms!`);
        };
        inner(); // 'this' is undefined (lost context)
    }
};

wrestler.sayQuote(); // Error: Cannot read 'name' of undefined

// Fix using arrow functions (lexical this):
const fixedWrestler = {
    name: "Stone Cold",
    sayQuote: function () {
        const inner = () => {
            console.log(`${this.name} says: Open a can of worms!`);
        };
        inner();
    }
};

fixedWrestler.sayQuote(); // Works: "Stone Cold says: Open a can of worms!"
// here,
// 1. Regular function 'sayQuote' has 'this' pointing to the object
// 2. Arrow function 'inner' takes 'this' from surrounding scope (sayQuote)
// 3. No separate 'this' binding for arrow functions