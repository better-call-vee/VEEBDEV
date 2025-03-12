// 🥊 Object Looping(for-in vs for-of)
// =================================================================================

const wrestler = {
    name: "Stone Cold",
    age: 58,
    catchphrase: "Open a can of whoop-ass!",
    title: "Texas Rattlesnake"
};

// 1️⃣ for...in Loop (Iterates over KEYS)
for (const key in wrestler) {
    if (wrestler.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${wrestler[key]}`);
        // Output: 
        // Key: name, Value: Stone Cold
        // Key: age, Value: 58
        // ...etc
    }
}

// 2️⃣ Bracket Notation Access
console.log(wrestler["catchphrase"]); // "Open a can of whoop-ass!"

// 3️⃣ for...of with Object.entries() + Destructuring
for (const [key, value] of Object.entries(wrestler)) {
    console.log(`🔥 ${key.toUpperCase()}: ${value}`);
    // Output:
    // NAME: Stone Cold
    // AGE: 58
    // ...etc
}

// 💥 New: String Method Magic ✨
// replace() - Find/replace patterns (using regex)
// repeat() - Repeat string N times

// 🎤 Mic Drop Example: Championship Stats
const stats = {
    wins: 25,
    losses: 2,
    championships: 16
};

// Full stats breakdown with emoji flair
for (const [stat, value] of Object.entries(stats)) {
    // 1. replace(/s$/, '') - Remove trailing 's' (wins → win)
    // 2. repeat(value) - Create string of N emojis
    console.log(`🏆 ${stat.replace(/s$/, '')}: ${'🌟'.repeat(value)}`);
    // /[se]+$/ if I want to replace both s and e
    // Output:
    // 🏆 win: 🌟 (25 stars)
    // 🏆 loss: 🌟🌟
    // 🏆 championship: 🌟 (16 stars)
}

/*
| String Method         | What it Does                          | Example                     |
|-----------------------|---------------------------------------|-----------------------------|
| str.replace(/s$/, '') | Remove trailing 's' character         | "wins" → "win"              |
| '🌟'.repeat(3)        | Create "🌟🌟🌟"                     | repeat(5) → "🌟🌟🌟🌟🌟"  |
================================================================================================
*/

// 🧪 Edge Cases Royal Rumble:
// replace() with regex vs simple string
"wrestlers".replace(/s/g, 'Z'); // "wretZlerZ" (global replace)
"wrestlers".replace('s', 'Z'); // "wretZlers" (only first occurrence)

// repeat() with 0 or negative numbers
// '💥'.repeat(0); // ""
// '💥'.repeat(-1); // "" (treats negatives as 0)