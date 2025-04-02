// Local Storage

// Imagine Local Storage as a treasure chest inside the browser.
// You can store simple string-based key-value pairs here, and it'll remain there even if you close the tab/browser.

// Syntax: localStorage.setItem(key, value);
// Saves data in key-value string format
localStorage.setItem("heroName", "Giant Skeleton"); // Stores "Giant Skeleton" with key "heroName"

// Syntax: localStorage.getItem(key);
// Retrieves data by key
const name = localStorage.getItem("heroName");
console.log(name); // "Giant Skeleton"

// Syntax: localStorage.removeItem(key);
// Deletes data by key
localStorage.removeItem("heroName"); // Removes the "heroName" entry

// Syntax: localStorage.clear();
// Clears all data from Local Storage
localStorage.clear(); // Boom! Empties everything in the chest

// Note: Values stored must be strings. But we can stringify objects!

// Example: Storing an object (Card info)
const wizardCard = {
    elixirCost: 5,
    splashDamage: true,
    quote: "Burn them all!"
};

// Convert object to string before storing
localStorage.setItem("wizard", JSON.stringify(wizardCard));

// To retrieve and use it again
const getWizard = JSON.parse(localStorage.getItem("wizard"));
console.log(getWizard.elixirCost); // 5
console.log(getWizard.quote); // "Burn them all!"

// Key Points:
// 1. Data persists even after refresh or tab close. eg: Cart at any ecommerce site.
// 2. Keys & values must be strings (use JSON.stringify & JSON.parse for objects)
// 3. Methods:
//    - setItem(key, value): add/store
//    - getItem(key): retrieve
//    - removeItem(key): delete one
//    - clear(): nuke all keys
