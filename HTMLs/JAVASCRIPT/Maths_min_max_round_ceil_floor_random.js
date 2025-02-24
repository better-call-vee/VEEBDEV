/*
MATH OBJECT IN JAVASCRIPT
   - The Math object provides properties and methods for mathematical operations.
   - Commonly used methods: abs, round, ceil, floor, random.
   - Example scenarios based on WWE events and stats.
*/

// Example 1: Math.abs (Absolute Value)
// Scenario: Calculate the absolute difference in titles between two wrestlers.
const romanReignsTitles = 5;
const soloSikoaTitles = -2; // Negative value due to a hypothetical penalty
const titleDifference = Math.abs(romanReignsTitles - soloSikoaTitles);
console.log(`Absolute Title Difference: ${titleDifference}`); // Output: Absolute Title Difference: 7

// Example 2: Math.round (Rounding to Nearest Integer)
// Scenario: Round the average crowd rating for a WWE event.
const crowdRating = 8.6;
const roundedRating = Math.round(crowdRating);
console.log(`Rounded Crowd Rating: ${roundedRating}`); // Output: Rounded Crowd Rating: 9

// Example 3: Math.ceil (Round Up)
// Scenario: Determine the number of tables needed for a Tables Match.
const participants = 7;
const tablesNeeded = Math.ceil(participants / 2); // Each table can hold 2 wrestlers
console.log(`Tables Needed: ${tablesNeeded}`); // Output: Tables Needed: 4

// Example 4: Math.floor (Round Down)
// Scenario: Calculate the number of full hours in a wrestling match duration.
const matchDurationMinutes = 45;
const fullHours = Math.floor(matchDurationMinutes / 60);
console.log(`Full Hours in Match Duration: ${fullHours}`); // Output: Full Hours in Match Duration: 0

// Example 5: Math.random (Generate Random Numbers)
// Scenario: Simulate a random wrestler's entrance theme volume (0 to 10).
const randomVolume = Math.floor(Math.random() * 11); // Generates a random integer between 0 and 10
console.log(`Random Entrance Theme Volume: ${randomVolume}`); // Output: Random value between 0 and 10

// Example 6: Combining Methods for Realistic Scenarios
// Scenario: Simulate a random wrestler's finishing move damage (1 to 100).
function generateFinishingMoveDamage() {
   const minDamage = 50; // Minimum damage guaranteed
   const maxDamage = 100; // Maximum possible damage
   return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
}
const finishingMoveDamage = generateFinishingMoveDamage();
console.log(`Finishing Move Damage: ${finishingMoveDamage}`); // Output: Random value between 50 and 100

/*
   - Math.abs(x): Returns the absolute value of x (removes negative sign).
   - Math.round(x): Rounds x to the nearest integer.
   - Math.ceil(x): Rounds x up to the next largest integer.
   - Math.floor(x): Rounds x down to the nearest integer.
   - Math.random(): Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
*/


/*
MATH.MIN & MATH.MAX
   - Math.min(...values): Returns the smallest value among given numbers
   - Math.max(...values): Returns the largest value among given numbers
   - Works with multiple arguments or arrays using spread operator (...)
   - Non-numeric values return NaN
*/

// Example 1: Basic usage with multiple numbers
console.log(Math.min(3, 7, -5, 0, 12)); // Output: -5
console.log(Math.max(3, 7, -5, 0, 12)); // Output: 12

// Example 2: Using variables
const score1 = 45, score2 = 89, score3 = 23;
console.log(Math.min(score1, score2, score3)); // Output: 23
console.log(Math.max(score1, score2, score3)); // Output: 89

// Example 3: With an array using spread operator
const temperatures = [32, 15, 28, -5, 40];
console.log(Math.min(...temperatures)); // Output: -5
console.log(Math.max(...temperatures)); // Output: 40

// Example 4: Mixed positive and negative numbers
console.log(Math.min(-10, 0, 5, -20, 15)); // Output: -20
console.log(Math.max(-10, 0, 5, -20, 15)); // Output: 15

// Example 5: Handling non-numeric values
console.log(Math.min(5, "hello", 10)); // Output: NaN
console.log(Math.max(5, "hello", 10)); // Output: NaN

// Example 6: Edge cases with no arguments
console.log(Math.min()); // Output: Infinity
console.log(Math.max()); // Output: -Infinity

// Example 7: Real-world scenario - Finding best price
const prices = [1200, 999, 1500, 799, 1300];
const lowestPrice = Math.min(...prices);
const highestPrice = Math.max(...prices);
console.log(`Lowest Price: ${lowestPrice}, Highest Price: ${highestPrice}`);
// Output: Lowest Price: 799, Highest Price: 1500