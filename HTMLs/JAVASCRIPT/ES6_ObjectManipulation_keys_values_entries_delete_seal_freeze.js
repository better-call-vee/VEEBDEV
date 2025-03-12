// 🥊 Object Manipulation(Keys/Values/Entries/Delete/Seal/Freeze)
// =================================================================================

// 🎬 Main Event Object
const wrestler = {
    name: "John Cena",
    age: 45,
    title: "WWE Champion",
    signatureMove: "Attitude Adjustment"
};

// 1️⃣ Object.keys() - Get property names
console.log(Object.keys(wrestler));
// Output: ["name", "age", "title", "signatureMove"]

// 2️⃣ Object.values() - Get property values
console.log(Object.values(wrestler));
// Output: ["John Cena", 45, "WWE Champion", "Attitude Adjustment"]

// 3️⃣ Object.entries() - Get key-value pairs
console.log(...Object.entries(wrestler));
// Output: [ ["name","John Cena"], ["age",45], ["title","WWE Champion"], ... ]
// without spread, they will be different array showing

// 4️⃣ Delete Operator - Remove property
delete wrestler.age;
console.log(wrestler.age); // Output: undefined

// 5️⃣ Adding New Property
wrestler.entranceTheme = "Break the Walls";
console.log(wrestler.entranceTheme); // "Break the Walls"

// 6️⃣ Object.seal() - Prevent add/delete, allow modifications
const roster = { champion: "Roman Reigns" };
Object.seal(roster);

roster.champion = "Seth Rollins"; // ✅ Allowed
delete roster.champion; // ❌ Prevented
roster.newChamp = "Brock"; // ❌ Prevented

// 7️⃣ Object.freeze() - Full lockdown (no add/delete/modify)
const match = { location: "WrestleMania" };
Object.freeze(match);

match.location = "SummerSlam"; // ❌ No effect in strict mode
delete match.location; // ❌ Prevented

// 🧪 Integrity Checks
console.log(Object.isSealed(roster)); // true
console.log(Object.isFrozen(match)); // true

// 💥 Edge Cases Royal Rumble:
// Trying to delete non-existent property
delete wrestler.fakeProperty; // No error, returns true

// Sealed object property modification
const stats = { wins: 10 };
Object.seal(stats);
stats.wins = 15; // ✅ Works (modification allowed)
stats.losses = 2; // ❌ Ignored

/*
| Method             | Effect                                  | Mutability After      |
|--------------------|-----------------------------------------|-----------------------|
| Object.seal()      | No add/delete, allow property changes   | Partially mutable     |
| Object.freeze()    | No add/delete/change                    | Fully immutable       |
| delete operator    | Removes property                        | N/A                   |
| New property       | Adds key-value pair                     | N/A                   |
====================================================================================================
*/

// 🎤 Mic Drop Example: PPV Setup
const event = {
    name: "SummerSlam",
    venue: "Las Vegas"
};

// Seal the event details
Object.seal(event);

// Attempt illegal modifications
event.venue = "New York"; // ✅ Works (property exists)
delete event.name; // ❌ Prevented
event.date = "August 5"; // ❌ Ignored

console.log(event); // {name: "SummerSlam", venue: "New York"}