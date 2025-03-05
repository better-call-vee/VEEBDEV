// 💥 One-Liner Finisher Move
const spear = (damage) => damage * 1.5; // Implicit return (no {} needed)
console.log(spear(100)); // 150 - Goldberg's signature move!

// 🤼 Multi-Hit Combo Attack
const tripleThreat = (power) => {
  const base = power * 2; // Explicit return needed with {}
  return base + (Math.random() * 100); // Randomized finish
};

// 🎮 Parameter Flexibility (Clash Royale Style)
const elixirCost = (card1, card2 = 5) => card1 + card2; // Default parameter
elixirCost(4); // 9 - Like combining Giant and Musketeer!

// 🚨 Edge Case: Returning Objects (Needs Parentheses!)
const createChamp = (name) => ({ name, tier: "Legendary" }); 
// Without () outside {} would be parsed as function body - ERROR!

// ⚡ Temporal Dead Zone Gotcha
const ultimate = (x = y, y = 5) => { return x; }; // ReferenceError: y is not defined
// Parameters are in TDZ until declared, Parameters are initialized LEFT TO RIGHT
// Earlier parameters CANNOT reference later parameters in defaults

// console.log(ultimate());  will give error

/*
| Feature                | Traditional Function       | Arrow Function             |
|------------------------|----------------------------|----------------------------|
| 'this' binding         | Own 'this' (dynamic)       | Lexical 'this' (static)    |
| arguments object       | Available                  | Not available              |
| new keyword            | Works                      | Forbidden                  |
====================================================================================
*/

// 🎤 Mic Drop Example: FIFA Player Stats
const calcRating = (pace, shoot) => ({
  overall: Math.round((pace + shoot)/2),
  status: (pace > 80 && shoot > 80) ? "Meta" : "Bench"
});

console.log(calcRating(92, 88)); // {overall: 90, status: "Meta"}


// *** arrow function doesn't have console.log(arguments) feature