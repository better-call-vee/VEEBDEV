// 🎬 ES6 forEach vs filter vs find
const wrestlers = [
    { id: 1, name: 'John Cena', theme: 'The Time is Now' },
    { id: 2, name: 'The Rock', theme: 'If You Smell...' },
    { id: 3, name: 'Stone Cold', theme: 'Austin 3:16' },
    { id: 4, name: 'Undertaker', theme: 'Rest In Peace' }
];

// 🔥 forEach() 
// Doesn't return anything - just executes code for each element
wrestlers.forEach(wrestler => {
    console.log(`ID ${wrestler.id}: ${wrestler.theme}`);
});

// 🧹 filter() 
// Returns NEW ARRAY of matching elements (ALL matches)
const evenIdWrestlers = wrestlers.filter(w => w.id % 2 === 0);
console.table(evenIdWrestlers);
// Returns [] if no matches found

// 🔍 find() - The Quick Match Specialist
// Returns FIRST match or undefined
const stoneCold = wrestlers.find(w => w.id === 3);
console.log(stoneCold);
const fakeWrestler = wrestlers.find(w => w.id === 99); // undefined

// 🚨 Key Differences Table
/*
| Method   | Return Type          | No Match Return | Use Case                     |
|----------|----------------------|-----------------|------------------------------|
| forEach  | undefined            | -               | Side effects (logging/etc)   |
| filter   | New array            | Empty array []  | Get ALL matching elements    |
| find     | Single element       | undefined       | Get FIRST match only         |
===============================================================================
*/

// Remove id=2 and log remaining wrestlers
const updatedRoster = wrestlers.filter(w => w.id !== 2);
// Find first wrestler after id=2
const nextChamp = updatedRoster.find(w => w.id > 2);