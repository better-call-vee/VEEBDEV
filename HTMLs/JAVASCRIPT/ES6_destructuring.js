
// 🥊 1. Object Destructuring (Exact Property Names Required)
const wrestler = {
    name: "John Cena",
    title: "WWE Champion",
    signatureMove: "Attitude Adjustment"
};

// Must use EXACT property names
const { name, title } = wrestler;
console.log(`${name} is the ${title}`); // "John Cena is the WWE Champion"

// 🛡️ Default Values (When property missing)
const { entranceTheme = "Break the Walls" } = wrestler;
console.log(entranceTheme); // "Break the Walls" (property doesn't exist)

// 🤼 Nested Destructuring
const match = {
    participants: ["Roman Reigns", "Seth Rollins"],
    location: "WrestleMania"
};
const { participants: [champion, challenger] } = match;
console.log(challenger); // "Seth Rollins"

// ⚡ 2. Array Destructuring (Position Matters)
const opponents = ["Brock Lesnar", "Goldberg", "Undertaker"];

// Variables get elements by POSITION (any names allowed)
const [a, b] = opponents;
console.log(a); // "Brock Lesnar" (first element)
console.log(b); // "Goldberg"     (second element)

// 🎯 Skipping Elements
const [, , legend] = opponents;
console.log(legend); // "Undertaker" (third element)

// 🧙 Rest Operator (Capture remaining elements)
const [currentChamp, ...rest] = opponents;
console.log(rest); // ["Goldberg", "Undertaker"]

// 💥 Edge Cases Royal Rumble:
// Array destructuring with mismatched lengths
const [x, y, z, w] = [1, 2];
console.log(z); // undefined
console.log(w); // undefined

// Object destructuring with aliases
const { name: superstarName } = wrestler;
console.log(superstarName); // "John Cena" (different variable name)

/*
| Concept               | Object Destructuring                  | Array Destructuring            |
|-----------------------|---------------------------------------|--------------------------------|
| Syntax                | { propertyName } = object             | [variable1, variable2] = array |
| Property/Position     | Must match property names             | Order determines values        |
| Defaults              | const {x=5} = obj                     | const [a=10] = arr             |
| Rest                  | N/A                                   | const [a, ...rest] = arr       |
===================================================================================================
*/

// 🎤 Mic Drop Example: PPV Match Setup
const event = {
    mainEvent: ["CM Punk", "MJF"],
    date: "New Year's Smash"
};

// Object destructuring with array destructuring combo
const {
    mainEvent: [face, heel],
    date
} = event;

console.log(`At ${date}: ${face} vs ${heel}`);
// "At New Year's Smash: CM Punk vs MJF"