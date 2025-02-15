/*
LOOPING OBJECTS: for...in vs for...of

ESSENTIALS:
   - for...in: Iterates over ENUMERABLE properties (keys) of an object
   - for...of: Requires ITERABLE (arrays, strings) - convert object first
   - Bracket notation REQUIRED for dynamic property access
*/

// --------------------- OBJECT SETUP ---------------------
// Create object using literal (common practice)
const wrestlers = {
  name: "Roman Reigns",
  faction: "Bloodline",
  titles: 6,
  isHeel: true,
};

// --------------------- for...in LOOP ---------------------
// Best for DIRECT object key iteration
for (const key in wrestlers) {
  console.log(key, ":", wrestlers[key]); // Bracket notation for values
}

/* OUTPUT:
name : Roman Reigns
faction : Bloodline
titles : 6
isHeel : true
*/

// WARNING: Includes inherited properties if present
// (Not shown here because we're using simple object)

// --------------------- for...of LOOP ---------------------
// Convert object to iterable first using Object methods
const keyArray = Object.keys(wrestlers); // Get array of keys
for (const key of keyArray) {
  console.log(key + " -> " + wrestlers[key]); // String concatenation
}

/* OUTPUT:
name -> Roman Reigns
faction -> Bloodline
titles -> 6
isHeel -> true
*/

// Alternate: Directly use Object.entries() for key-value pairs
for (const [role, name] of Object.entries(wrestlers)) {
  console.log(role, "==", name); // Destructuring assignment
}

/* OUTPUT:
name == Roman Reigns
faction == Bloodline
titles == 6
isHeel == true
*/

// --------------------- OBJECT DECLARATIONS ---------------------
// Using new Object() (rarely used)
const title = new Object();
title.name = "WWE Universal";
title.holder = "Roman Reigns";

// Using Object.create() with null prototype
const cleanStats = Object.create(null);
cleanStats.wins = 42;
cleanStats.losses = 3;
