/*
FUNCTIONS & EXTRA ARGUMENTS
   - Functions can receive MORE args than declared parameters
   - The 'arguments' object (array-like) contains ALL received arguments
   - Access via index: arguments[0], arguments[1], etc.
   - Modern approach: Use rest parameters (...args) instead (ES6+)
*/

function calculateMatchRating(superstar) {
    let totalMoves = 0;

    // arguments[0] = superstar, arguments[1] = first move rating, etc.
    for (let i = 1; i < arguments.length; i++) {
        totalMoves += arguments[i];
    }

    return `${superstar}'s match rating: ${totalMoves}`;
}

console.log(calculateMatchRating("Seth Rollins", 8.5, 9.2, 7.8));
// Output: "Seth Rollins's match rating: 25.5"

// Example 2: Royal Rumble Entrants (rest parameter - modern approach)
function trackRumbleEntrants(...entrants) {
    // entrants is REAL array (can use array methods)
    return `Total: ${entrants.length}. Final four: ${entrants.slice(-4)}`;
}

console.log(trackRumbleEntrants("Cody", "Gunther", "Sami", "Drew", "Bron"));
// Output: "Total: 5. Final four: Gunther,Sami,Drew,Bron"

/* KEY DIFFERENCES
   - arguments is array-LIKE (no push/pop). Convert with Array.from() if needed
   - Arrow functions DON'T have own arguments object
   - Rest parameters (...args) are preferred for modern code
*/

// Example 3: Heel/Face Alignment Check (array conversion)
function checkAlignment(leader) {
    const faction = Array.from(arguments).join(', ');
    console.log(`${leader}'s faction: ${faction}`);
}

checkAlignment("Roman Reigns", "Solo", "Jimmy", "Heyman");
// Output: "Roman Reigns's faction: Roman Reigns, Solo, Jimmy, Heyman"