// Checking Parameter Count
function rockBottom(a, b, c) {
    // The Rock checks how many parameters his move expects
    console.log(`This move requires ${rockBottom.length} parameters!`);
}
rockBottom(); // Output: "This move requires 3 parameters!"

// Handling Missing Parameters
function fiveKnuckleShuffle(power = 100, message = "You can't see me!") {
    console.log(`Delivering ${power}% power: ${message}`);
}
fiveKnuckleShuffle(); // Uses defaults: "Delivering 100% power: You can't see me!", without defaults it will show NaN. as
// power will be undefined.
fiveKnuckleShuffle(75); // "Delivering 75% power: You can't see me!"

// 🤼‍♂️ Edge Case Royal Rumble: 
function steelChairShot(a, b = 5, ...rest) {
    console.log(`Parameters expected: ${steelChairShot.length}`); // 1 (only 'a' counts)
    console.log(`Rest parameters: ${rest.length}`); // Any additional args
}
steelChairShot(10, 20, 30, 40); // Output: Parameters expected: 1 | Rest parameters: 2

/*
| Concept               | Behavior                                                                 |
|-----------------------|--------------------------------------------------------------------------|
| function.length       | Returns number of parameters BEFORE first default parameter              |
| Default parameters    | Activate when: 1) Argument missing 2) Explicit undefined passed          |
| Rest parameters       | Collect remaining arguments (don't affect function.length)               |
| Temporal Dead Zone    | Applies to let/const parameters too!                                     |
====================================================================================================
*/

// 🎤 Mic Drop Example: Combining All Concepts
function wweMatch(entranceTheme = "Break the Walls", opponents = ["Undertaker"]) {
    // Check expected parameters (1 in this case)
    console.log(`Parameters expected: ${wweMatch.length}`);

    // Default parameters in action
    console.log(`Entrance music: ${entranceTheme}`);
    console.log(`Facing: ${opponents.join(" vs ")}`);
}

wweMatch(); // Uses all defaults
wweMatch("Living on a Prayer", ["Rey Mysterio", "Edge"]);