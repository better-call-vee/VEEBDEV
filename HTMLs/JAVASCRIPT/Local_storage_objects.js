// Store and Retrieve Objects in Local Storage using JSON

// Suppose we have a wrestler object
const undertaker = {
    finisher: "Tombstone Piledriver",
    height: "6'10\"",
    retired: true
};

// Directly saving this object using setItem won't work properly because localStorage only supports strings
// So we convert it to a JSON string
const stringUndertaker = JSON.stringify(undertaker);

// Now store it
localStorage.setItem("legend", stringUndertaker);

// Getting it back
const storedData = localStorage.getItem("legend");
console.log(storedData);
// Output: {"finisher":"Tombstone Piledriver","height":"6'10\"","retired":true}
// This is just a string. You can't do storedData.finisher

// To access properties, convert it back to an object using JSON.parse
const backToObject = JSON.parse(storedData);
console.log(backToObject.finisher); // "Tombstone Piledriver"
console.log(backToObject.retired); // true

// Summary:
// 1. Use JSON.stringify(object) before storing
// 2. Use JSON.parse(string) after retrieving
// 3. Only after parsing can you access individual properties
