/*
OBJECTS IN JAVASCRIPT: ESSENTIAL OPERATIONS
*/

// ---------------------------
// 1. Primitive vs Non-Primitive:
// ---------------------------
let title = "Universal Champion"; // Primitive (string)
const reigns = {
  // Non-Primitive (object)
  name: "Roman Reigns",
  daysHeld: "1000+",
  "fav entrance": "Solo Sikoa Shield Entrance",
};

// Primitives: Stored by value (string, number, boolean, etc.)
// Objects: Stored by reference (like C++ pointers but managed automatically)

// ---------------------------
// 2. Accessing Properties:
// ---------------------------
// Dot Notation (common case)
console.log(reigns.name); // "Roman Reigns"
console.log(reigns.daysHeld); // 1000+
console.log(Object.keys(reigns).length); // 3

// Bracket Notation (special cases)
console.log(reigns["fav entrance"]); // NEEDED FOR SPACES/SPECIAL CHARACTERS
console.log(reigns["name"]); // Works but unnecessary here

// ---------------------------
// 3. When Dot Notation Fails:
// ---------------------------
// Case 1: Property names with spaces/special chars
// reigns.fav entrance → Syntax Error! Use ["fav entrance"]

// Case 2: Dynamic property access
const propName = "daysHeld";
console.log(reigns[propName]); // 1000+ (variable evaluation)
// reigns.propName → undefined (looks for "propName" key)

// Case 3: Using reserved keywords
const obj = { class: "Heel" };
// obj.class → problematic (class is reserved), use obj["class"]

// ---------------------------
// 4. Key Differences from C/C++:
// ---------------------------
// - No struct/class dichotomy - everything is object-based
// - Dynamic properties (can add/remove anytime)
// - Bracket notation enables dictionary-like behavior
// - No -> operator (only . and [])
