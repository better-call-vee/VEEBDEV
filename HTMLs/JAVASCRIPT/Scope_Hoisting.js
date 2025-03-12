// Scope Types:
// Global Scope: Accessible everywhere
const globalVar = "I'm global"; // Available in all scopes

// Block Scope (let/const):
if (true) {
    let blockLet = "Block scoped";
    const blockConst = "Also block scoped";
}
// console.log(blockLet); // ReferenceError (not accessible outside)

// Function Scope (var):
function test() {
    var functionVar = "Function scoped";
}
// console.log(functionVar); // ReferenceError (not accessible outside)

// Hoisting Behavior:
// var declarations are hoisted and initialized with undefined
console.log(hoistedVar); // undefined (no error)
var hoistedVar = "Declared later";

// let/const are hoisted but NOT initialized (Temporal Dead Zone)
// console.log(notHoistedLet); // ReferenceError
let notHoistedLet = "TDZ example";

// Function declarations are fully hoisted:
hoistedFunction(); // "Works!"
function hoistedFunction() {
    console.log("Works!");
}

// Key Differences:
// var: Function-scoped, hoisted with undefined
// let/const: Block-scoped, hoisted but uninitialized
// function declarations: Fully hoisted

// Practical Example:
var crowd = "Global crowd";
if (true) {
    var crowd = "Overwritten"; // Affects global scope
    let localCrowd = "Local crowd";
}
console.log(crowd); // "Overwritten" (var leaked)
// console.log(localCrowd); // ReferenceError (let contained)

// Hoisting Priority:
// 1. var declarations moved to top of function/global scope
// 2. let/const declarations exist in TDZ until declaration line
// 3. Function declarations take precedence over variable declarations