// 🎯 ES6 Object Access: Dot vs Bracket vs Optional Chaining

// 💥 Dot Notation . (Fastest)
const messi = {
    "golden-ball": 8,
    10: "legend",
    true: "playmaker"
};

// messi.10 → Syntax Error (number key)
// messi.true → Syntax Error (reserved word)
// messi.golden-ball → NaN (interpreter sees subtraction)

// 🔥 Bracket Notation [] (Required for):
// 1. Number keys: messi[10]
// 2. Variable keys: const key = "golden-ball"; messi[key]
// 3. Special chars: messi["golden-ball"]
// 4. Boolean keys: messi[true]

// 🌪️ Optional Chaining ?. (Error Prevention)
const barcelona = {
    stadium: {
        name: "Camp Nou",
        capacity: 99354
    },
    trophies: {
        championsLeague: 5,
        // laLiga: 27 (missing property)
    }
};

// Without optional chaining → Error
// console.log(barcelona.trophies.laLiga.count);

// With optional chaining → undefined
console.log(barcelona.trophies.laLiga?.count);

// 🏆 Nested Object Access Patterns
const fifaWorldCup = {
    2022: {
        winner: "Argentina",
        goals: {
            total: 17,
            messi: 7
        }
    },
    "best-players": ["Mbappé", "Messi", "Martínez"]
};

// Access 2022 goals
console.log(fifaWorldCup[2022].goals.messi); // 7

// Access best players array
console.log(fifaWorldCup["best-players"][1]); // Messi

// 🚨 Edge Case Royal Rumble
const weirdObject = {
    1337: "leet",
    "": "empty key",
    " ": "space key",
    "🚀": "emoji key"
};

console.log(weirdObject[1337]); // "leet"
console.log(weirdObject[""]); // "empty key"
console.log(weirdObject[" "]); // "space key"
console.log(weirdObject["🚀"]); // "emoji key"

/*
| Scenario                | Use                     | Example                     |
|-------------------------|-------------------------|-----------------------------|
| Known valid identifier  | Dot notation            | obj.name                    |
| Dynamic key             | Bracket notation        | obj[keyVar]                 |
| Number/boolean key      | Bracket notation        | obj[10], obj[true]          |
| Special characters      | Bracket notation        | obj["my-key"]               |
| Deeply nested property  | Optional chaining       | obj?.a?.b?.c                |
==================================================================================|
*/