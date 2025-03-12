// ====== JSON: (JavaScript Object Notation) ======
// Like a wrestling contract format both frontend/backend understand.
// Rules: 1) Keys in quotes 2) Values as string (except numbers/booleans) 3) No functions

// === Creating JSON ===
const rawContract = {
    name: "John Cena",  // JS allows unquoted keys
    age: 47,  // Numbers stay unquoted in JSON
    titles: ["WWE", "US", "World Heavyweight"],
    isActive: false,  // Booleans remain naked
    promo: function () { return "U Can't See Me"; } // JSON IGNORES functions
};

// === JSON.stringify() - Serialize to JSON String (Preparing Contract for Email) ===
const jsonContract = JSON.stringify(rawContract);
/* Outputs:
{"name":"John Cena","age":47,"titles":["WWE","US","World Heavyweight"],"isActive":false}
*/
console.log(jsonContract);
console.log(typeof jsonContract); // "string" - Now ready for network transmission

// === JSON.parse() - Deserialize Back to Object (Signing the Contract) ===
const parsedContract = JSON.parse(jsonContract);
console.log(parsedContract.titles); // ["WWE", "US", "World Heavyweight"] 
console.log(parsedContract.promo); // undefined - JSON discarded functions!

// === Clash Royale Chest Opening Simulation ===
const chestData = `{"gems": 100, "cards": ["Mega Knight", "Electro Giant"], "isGolden": true}`;
const loot = JSON.parse(chestData);
console.log(loot.cards[0]); // "Mega Knight" (now ready for in-game use)

// === Key Mechanics ===
// 1. JSON vs JS Objects:
// - JSON: "keys" quoted, no functions, trailing commas forbidden
// - JS: unquoted keys allowed, functions ok

// 2. When to Use:
// - API Communication (POST requests)
// - localStorage/sessionStorage (only stores strings)
// - Configuration Files

// 3. Common Pitfalls:
// - JSON.parse() fails on trailing commas -> "SyntaxError"
// - Dates get stringified -> need manual handling
// - Circular references break JSON.stringify()

// ==== Ultimate Takeaways ====
// 1. JSON.stringify(obj) -> Convert object to universal string format
// 2. JSON.parse(str) -> Rebuild original object from JSON
// 3. Type Changes:
//    - 🚫 Loss: Functions, undefined
//    - 🔄 Transform: Date -> string
//    - ✅ Preserved: Arrays, nested objects, numbers, booleans

// 4. Real-World Use: Think of JSON as the "paper contract" format,
// while JS objects are live wrestlers in the ring.