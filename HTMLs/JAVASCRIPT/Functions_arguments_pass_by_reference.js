// Function Arguments & Parameters
function cena(f, u) {
    console.log(arguments); // [1,2,3,4,5] (array-like object)
    console.log(arguments.length); // 5 (all passed arguments)
    console.log(cena.length); // 2 (declared parameters: f, u)

    // Convert arguments to array
    const newArg = [...arguments];
    console.log(newArg); // [1,2,3,4,5]
}
cena(1, 2, 3, 4, 5); // Call with 5 arguments

// Key Points:
// 1. arguments object exists only inside functions
// 2. Contains all passed arguments, even beyond parameters
// 3. Not a real array - use spread operator [...arguments] to convert

// Pass by Value (Primitive Types - Royale Giant Health)
let royalGiantHealth = 3000;

function boostHealth(health) {
    health = health * 2; // Creates copy
    console.log(`In battle: ${health}`); // 6000
}

boostHealth(royalGiantHealth);
console.log(royalGiantHealth); // 3000 (original unchanged)

// Pass by Reference (Non-Primitive - Bowler Card)
const bowlerCard = {
    hitpoints: 1500,
    ability: "hi hi huii"
};

function upgradeCard(card) {
    card.hitpoints *= 2; // Modifies original object
    card.ability += " + bowlerrr, bye bye";
}

upgradeCard(bowlerCard);
console.log(bowlerCard.hitpoints); // 3000
console.log(bowlerCard.ability); // "hi hi huii + bowlerrr, bye bye"

// Key Takeaways:
// 1. Primitives (numbers/strings) pass copies (value)
// 2. Objects/arrays pass references (original modified)
// 3. arguments object helps handle variable parameters