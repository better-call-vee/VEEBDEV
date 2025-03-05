/*
=====================================================================
WWE CHAMPIONSHIP BELT OF STRINGS: TEMPLATE LITERALS
=====================================================================
*/

// 💥 Stone Cold's Stunner: Multi-line Strings
const promo = `Open a can of whoop-ass,
then deliver a Stone Cold Stunner!
No more Mr. Nice Guy!

`;
console.log(promo);
// Output preserves line breaks without \n

// 🌟 The Miz's Mic Work: Dynamic Expressions
const crowdSize = 50000;
const catchphrase = "AWESOME!";
const mizPromo = `Ladies and gentlemen, 
I am the ${catchphrase} ${typeof catchphrase}!
${crowdSize > 40000 ? "You're the reason!" : "I'm still awesome!"}

`;
console.log(mizPromo);
// Output includes evaluated expressions

// 🤼‍♂️ Tag Team: Function Calls Inside Templates
function announce(name) {
    return `${name.toUpperCase()} is READY TO RUMBLE!`;
}
const tagTeam = `The Usos with ${announce("Jimmy")} and ${announce("Jey")}`;
console.log(tagTeam); // Output: "The Usos with JIMMY... JEY..."

// Escaping Backticks
const specialMove = `The \`Leg Drop\` Heard 'Round the World`;
console.log(specialMove); // Output: The `Leg Drop` Heard 'Round the World

/*
=========================================================================
| Feature          | Regular Strings          | Template Literals       |
|------------------|--------------------------|-------------------------|
| Multi-line       | Requires \n              | Natural line breaks     |
| Expressions      | Concat with +            | ${expression} syntax    |
| HTML Escaping    | Manual                   | Automatic               |
| Performance      | Slightly faster          | Slightly slower         |
| Tagged Templates | No                       | Yes (advanced use)      |
=========================================================================
*/

// Combining All Elements
const wrestler = "Edge";
const championshipBelts = 35;
const hallOfFame = true;
const entrance = `
${wrestler.toUpperCase()} enters with ${championshipBelts} belts!
${hallOfFame ? "Hall of Famer!" : "Still a legend!"}
Signature move: ${"Spear!"} 
`;
