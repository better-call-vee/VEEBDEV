/*
VARIABLES vs COMPARISON OPERATORS
   - Variables (let/const) store values, comparison operators compare them
   - == (loose equality): Checks value with type coercion
   - === (strict equality): Checks value AND type (use this 99% of time)
   - != (loose inequality), !== (strict inequality)
*/

// Example 1: Modern WWE superstars comparison
const romanReignsTitles = 4; // Former Undisputed WWE Universal Champion
const soloSikoaTitles = 0; // New Bloodline enforcer

console.log(romanReignsTitles == "4"); // true (type coercion)
console.log(romanReignsTitles === "4"); // false (different types)
console.log(soloSikoaTitles !== "0"); // true (number vs string)

/*
CONDITIONALS & BRANCHING
   - if/else: Basic decision making
   - Logical Operators:
       - && (AND): Both must be true
       - || (OR): At least one true
       - ! (NOT): Inverts boolean
*/

// Example 2: WrestleMania main event qualification
const isChampion = true;
const rumbleWinner = true;
const isHeel = false;

if (rumbleWinner && !isHeel) {
  console.log("You're in the Face main event slot!"); // Output
} else {
  console.log("Dark match for you!");
}

/*
ADVANCED CONDITIONALS
   - Multi-level: else if ladder
   - Nested: Conditions within conditions
   - Ternary: Compact if-else (condition ? true : false)
*/

// Example 3: Triple Threat match decision (multi-level)
const weapon = "Steel Chair";

if (weapon === "Table") {
  console.log("Set up for the Through-the-Table spot!");
} else if (weapon === "Ladder") {
  console.log("Climb for the Money in the Bank!");
} else {
  console.log("Standard hardcore match"); // Output
}

// Example 4: Tournament bracket logic (nested)
const isFinalRound = true;
const opponentHealth = 15;

if (isFinalRound) {
  if (opponentHealth < 20) {
    console.log("Finish with signature move!");
  } else {
    console.log("Pull out the special finisher!");
  }
}

// Example 5: Crowd reaction check (ternary)
const jeyUSOEntr = true;
console.log(jeyUSOEntr ? "YEET" : "Boo!"); // Output: WHOAAAA OH

// Yes! You can write: isLeader ? ... instead of isLeader === true
const isLeader = true;
console.log(isLeader ? "Acknowledge Me!" : "Follow Orders!"); // Output: Acknowledge Me!

// Example 6: Championship Contender Check (nested ternary)
const ranking = 1;
const hasWonBefore = false;
console.log(
  ranking <= 3
    ? hasWonBefore
      ? "Rematch clause activated!"
      : "First-time championship opportunity!"
    : "Not in title contention"
); // Output: First-time championship opportunity!

/*
SWITCH STATEMENTS
   - Clean alternative to long if-else chains
   - Uses strict comparison (===)
   - Always include break (except for fallthrough cases)
   - Use default for unexpected values
*/

// Example 7: WWE Championship Match Outcomes
const title = "WWE Universal";

switch (title) {
  case "WWE Universal":
    console.log("Roman Reigns's 1000+ day reign"); // Output
    break;
  case "World Heavyweight":
    console.log("Seth Rollins' Visionary Title"); 
    break;
  case "Intercontinental":
    console.log("Gunther's Record-breaking Reign");
    break;
  default:
    console.log("NXT Title Not Listed");
}
