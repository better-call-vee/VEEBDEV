/*
SWAPPING VARIABLES IN JAVASCRIPT
   - Swapping variables involves exchanging the values of two variables.
   - Can be done using a temporary variable, without a temporary variable, or using destructuring.
*/

// Example 1: Swap Using a Temporary Variable
// Scenario: Swap the number of titles between two wrestlers.
let romanReignsTitles = 5;
let soloSikoaTitles = 2;
let temp; // Temporary variable to hold one value during the swap

temp = romanReignsTitles; // Store Roman's titles in temp
romanReignsTitles = soloSikoaTitles; // Assign Solo's titles to Roman
soloSikoaTitles = temp; // Assign temp (Roman's original titles) to Solo

console.log(`Roman Reigns Titles: ${romanReignsTitles}`); // Output: Roman Reigns Titles: 2
console.log(`Solo Sikoa Titles: ${soloSikoaTitles}`); // Output: Solo Sikoa Titles: 5

// Example 2: Swap Without a Temporary Variable (Using Arithmetic)
// Scenario: Swap the number of wins between two wrestlers.
let johnCenaWins = 10;
let randyOrtonWins = 15;

johnCenaWins = johnCenaWins + randyOrtonWins; // Add both values and store in John Cena's wins
randyOrtonWins = johnCenaWins - randyOrtonWins; // Subtract Randy's original wins from the sum
johnCenaWins = johnCenaWins - randyOrtonWins; // Subtract Randy's new wins from the sum

console.log(`John Cena Wins: ${johnCenaWins}`); // Output: John Cena Wins: 15
console.log(`Randy Orton Wins: ${randyOrtonWins}`); // Output: Randy Orton Wins: 10

// Example 3: Swap Without a Temporary Variable (Using XOR)
// Scenario: Swap the number of eliminations in a Royal Rumble match.
let brockLesnarEliminations = 8;
let sethRollinsEliminations = 4;

brockLesnarEliminations = brockLesnarEliminations ^ sethRollinsEliminations; // XOR operation
sethRollinsEliminations = brockLesnarEliminations ^ sethRollinsEliminations; // XOR again
brockLesnarEliminations = brockLesnarEliminations ^ sethRollinsEliminations; // Final XOR

console.log(`Brock Lesnar Eliminations: ${brockLesnarEliminations}`); // Output: Brock Lesnar Eliminations: 4
console.log(`Seth Rollins Eliminations: ${sethRollinsEliminations}`); // Output: Seth Rollins Eliminations: 8

// Example 4: Swap Using Destructuring Assignment
// Scenario: Swap the finishing move damage ratings of two wrestlers.
let undertakerDamage = 90;
let kaneDamage = 85;

[undertakerDamage, kaneDamage] = [kaneDamage, undertakerDamage]; // Destructuring assignment for swapping

console.log(`Undertaker Damage: ${undertakerDamage}`); // Output: Undertaker Damage: 85
console.log(`Kane Damage: ${kaneDamage}`); // Output: Kane Damage: 90

/*
KEY SWAPPING TECHNIQUES EXPLAINED
   - Temporary Variable: Simplest method; uses an extra variable to hold one value during the swap.
   - Arithmetic: Uses addition and subtraction (or multiplication/division) to swap without a temporary variable.
   - XOR: Bitwise operation to swap values without a temporary variable (less common but efficient).
   - Destructuring: Modern JavaScript syntax for concise and clean swapping.
*/
