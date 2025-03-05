// 🌟 Spread Operator (...)
// ======================================================

// 🎬 Scenario: John Cena's Signature Moves Expansion
const signatureMoves = ["Attitude Adjustment", "STF", "Shoulder Block"];

// 1️⃣ Printing Arrays (Normal vs Spread)
console.log(signatureMoves); // Output: ["Attitude Adjustment", "STF", "Shoulder Block"]
console.log(...signatureMoves); // Output: Attitude Adjustment STF Shoulder Block

// 2️⃣ Array Construction (Element vs Spread)
const wweRoster = ["Roman Reigns", "OTC", "Your Tribal Chief"];
const newRoster = [wweRoster]; // shows [Array(3)]
const expandedRoster = [...wweRoster, "Seth Rollins"]; // Creates ["Roman Reigns", "OTC", "Your Tribal Chief", "Seth Rollins"]
console.log(newRoster);
console.log(expandedRoster);

// 3️⃣ Math.max() Usage (Pre-ES6 vs Spread)
const numbers = [4, 8, 15, 16, 23, 42];
Math.max(numbers); // ❌ NaN (expects numbers, not array)
Math.max(...numbers); // ✅ 42 (spreads array into individual numbers)

// 🤼 Edge Case Royal Rumble:
const mixedValues = [null, "You're fired!", 999];
const newArray = ["Hire me", ...mixedValues]; // Combines without type issues
console.log(newArray);

// - Works on iterables (arrays/strings/maps/sets)
// - Doesn't modify original array
// - Can combine multiple spreads: [...arr1, ...arr2]

/*
| Use Case                | Before ES6                          | With Spread          |
|-------------------------|-------------------------------------|----------------------|
| Function arguments      | apply(null, arr)                    | func(...arr)         |
| Array concatenation     | arr1.concat(arr2)                   | [...arr1, ...arr2]   |
| String to array         | str.split('')                       | [...str]             |
========================================================================================
*/

// 🎤 Mic Drop Example: PPV Match Card Creation
const mainEvent = ["Undertaker", "Mankind"];
const undercard = ["Stone Cold", "Mr. McMahon"];

// Combine all matches with crowd chants
const fullCard = ["Let's Get Ready to Rumble!", ...mainEvent, "vs", ...undercard];
console.log(fullCard); // ["Let's Get Ready...", "Undertaker", "Mankind", "vs", "Stone Cold", "Mr. McMahon"]