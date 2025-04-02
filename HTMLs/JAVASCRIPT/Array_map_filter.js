/*
ARRAY.MAP() - THE TRANSFORMER
   - Creates NEW array by transforming EVERY element using a function
   - Original array remains UNCHANGED (immutable)
   - Chainable - Can connect multiple array methods
   - Syntax: arr.map(callback(currentValue, index, array))
*/

// Example 1: Modern WWE Championship Counts (Basic)
const reignsTitleRuns = [3, 4, 2]; // Universal, WWE, Tag Team

const currentReigns = reignsTitleRuns.map(reign => reign + 1); // Add current reign
console.log(currentReigns); // [4,5,3] (New array!)
console.log(reignsTitleRuns); // [3,4,2] (Original intact)

// Example 2: Create Match Cards with Index
const superstars = ["Roman", "Seth", "Cody"];
const matchCards = superstars.map((name, index) =>
    `Main Event ${index + 1}: ${name} vs. Challenger`
);
console.log(matchCards);
// ["Main Event 1: Roman vs...", ...]

// Example 3: Object Transformation (Common in APIs)
const wrestlers = [
    { name: "Rhea", finisher: "Riptide" },
    { name: "Bianca", finisher: "KOD" }
];

const finisherList = wrestlers.map(w => `${w.name}'s Finish: ${w.finisher}`);
// ["Rhea's Finish: Riptide", ...]
console.log(finisherList);

/* KEY USE CASES:
1. Data transformation pipelines
2. Extracting specific object properties
3. Generating JSX/HTML elements in React
4. Processing API response data
*/


/*
ARRAY.FILTER() - THE BOUNCER
   - Creates NEW array with elements that PASS a test (callback)
   - Original array remains UNCHANGED (non-destructive)
   - Great for SELECTING SUBSETS of data
   - Syntax: arr.filter(callback(current, index, array))
*/

// Example 1: Filter Champions (Basic)
const wrsts = [
    { name: "Roman", isChampion: true },
    { name: "Jey", isChampion: false },
    { name: "Seth", isChampion: true }
];

// Filter THEN map (separate concerns)
const champions = wrsts
    .filter(w => w.isChampion)  // First filter champions
    .map(w => `${w.name} is ${w.isChampion ? 'champ' : 'loser'}`);
console.log(champions)

// Example 2: Filter Main Event Matches (Using Index)
const matches = [
    "Hell in a Cell",
    "Royal Rumble",
    "Casket Match",
    "Steel Cage"
];

const premiumMatches = matches.filter((match, index) => index < 3).map(w => `${w} lessgooo`);
console.log(premiumMatches);

// Example 3: Complex Filtering (Multiple Conditions)
const roster = [
    { name: "Cody", wins: 12, isHeel: false },
    { name: "Gunther", wins: 15, isHeel: true },
    { name: "LA Knight", wins: 8, isHeel: false }
];

const topFaces = roster.filter(w =>
    !w.isHeel && w.wins >= 10
);
// Only Cody passes both conditions

// Example 4: Filter + Map Combo (Common Pattern)
const ppvResults = [5, 12, 3, 8];
const bigAttendances = ppvResults
    .filter(attendance => attendance > 5)
    .map(att => `Mega Event: ${att}k fans`);
// ["Mega Event: 12k...", "Mega Event: 8k..."]

/* KEY USE CASES:
1. Removing invalid/empty data
2. Selecting items meeting criteria
3. Pre-processing before transformations
4. Implementing search/filter features
 
BRAIN BURN: 
- Return TRUE to KEEP element
- Empty array if nothing passes test
- Callback MUST return boolean
*/