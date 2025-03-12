// 🚀 Array.map()

// 🔥 Classic For Loop vs Map()
const numbers = [10, 20, 30];

// For loop equivalent of map()
let forResults = [];
for (let i = 0; i < numbers.length; i++) {
    forResults.push(numbers[i] + 1);
}

// Map() magic in 1 line
const mapResults = numbers.map(num => num + 1);

// 💡 How Map() Works Behind the Scenes:
// 1. Creates new array
// 2. Iterates through original array
// 3. Runs callback on each element
// 4. Pushes result to new array
// 5. Original array remains intact

// 🎯 Multi-line Map Syntax (Requires return!)
const detailedMap = numbers.map((num, index) => {
    const newValue = num * index; // Calculation
    console.log(`Processing index ${index}`);
    return newValue; // Mandatory return
});
console.log(detailedMap); //[0, 20, 60] = 0*10, 1*20, 2*30

// 🚨 Common Mistake: Missing return
const brokenMap = numbers.map(num => {
    num * 2; // No return → all elements become undefined
});
console.log(brokenMap);

// 📌 Key Parameters:
// 1. element: Current array element
// 2. index: Current element's position
// 3. array: Original array reference

// 🌟 Practical Example with Index
const players = ["Messi", "Pedri", "Gavi"];
const playerStats = players.map((name, idx) => ({
    id: idx + 1,
    name: name,
    position: idx === 0 ? "Forward" : "Midfielder"
}));
console.log(playerStats);
console.table(playerStats);
console.log(JSON.stringify(playerStats, null, 2));

/*
| Feature                | For Loop         | Array.map()      |
|------------------------|------------------|------------------|
| Return new array       | Manual           | Automatic        |
| Mutation               | Possible         | Never            |
| Conciseness            | Verbose          | One-liner        |
| Access to index        | Yes (manual)     | Yes (built-in)   |
| Chainable              | No               | Yes (filter/map) |
================================================================
*/

// 💥 Edge Case: Handling Undefined Elements
const sparseArray = [1, , 3]; // Contains empty slot
const mappedSparse = sparseArray.map((num, idx) => {
    return num ? num * 2 : `Empty at ${idx}`;
});
// Result: [2, "Empty at 1", 6]